import Article from '../models/Article.js';

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
export const getArticles = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const filter = { type: 'article', status: 'published' };
    
    // Add search functionality
    if (req.query.search) {
      filter.$text = { $search: req.query.search };
    }
    
    // Add category filter
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const articles = await Article.find(filter)
      .populate('author', 'name email')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Article.countDocuments(filter);

    res.status(200).json({
      success: true,
      articles,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single article
// @route   GET /api/articles/:id
// @access  Public
export const getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Increment view count
    article.views += 1;
    await article.save();

    res.status(200).json({
      success: true,
      article
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new article
// @route   POST /api/articles
// @access  Private
export const createArticle = async (req, res, next) => {
  try {
    const articleData = {
      ...req.body,
      author: req.user._id
    };

    const article = await Article.create(articleData);
    await article.populate('author', 'name email');

    res.status(201).json({
      success: true,
      message: 'Article created successfully',
      article
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update article
// @route   PUT /api/articles/:id
// @access  Private
export const updateArticle = async (req, res, next) => {
  try {
    let article = await Article.findById(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Check if user owns the article or is admin
    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this article' });
    }

    article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'name email');

    res.status(200).json({
      success: true,
      message: 'Article updated successfully',
      article
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete article
// @route   DELETE /api/articles/:id
// @access  Private
export const deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Check if user owns the article or is admin
    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this article' });
    }

    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Article deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get articles by user
// @route   GET /api/articles/user/:userId
// @access  Public
export const getArticlesByUser = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await Article.find({
      type: 'article',
      author: req.params.userId,
      status: 'published'
    })
      .populate('author', 'name email')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Article.countDocuments({
      type: 'article',
      author: req.params.userId,
      status: 'published'
    });

    res.status(200).json({
      success: true,
      articles,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};
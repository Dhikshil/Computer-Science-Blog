import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: 'article',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxLength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    desc: {
      type: String,
      maxLength: [500, 'Summary cannot exceed 500 characters'],
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    category: {
      type: String,
      enum: [
        'AI',
        'Machine Learning',
        'Quantum Computing',
        'Cybersecurity',
        'Software Engineering',
        'Other',
      ],
      default: 'Other',
    },
    longImage: {
      type: String,
    },
    shortImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Add text index for search functionality
articleSchema.index({ title: 'text', content: 'text', summary: 'text' });

export default mongoose.model('Article', articleSchema);
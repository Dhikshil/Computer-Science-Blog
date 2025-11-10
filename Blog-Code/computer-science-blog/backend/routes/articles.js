import express from 'express';
import {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticlesByUser
} from '../controllers/articlecontroller.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';
import { articleUpload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', authMiddleware, articleUpload, createArticle);
router.put('/:id', authMiddleware, updateArticle);
router.delete('/:id', authMiddleware, deleteArticle);
router.get('/user/:userId', getArticlesByUser);

export default router;
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
      trim: true,
      maxLength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
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
    imageLong: Buffer,

    imageShort: Buffer,
    
  },
  {
    timestamps: true,
  }
);

// Add text index for search functionality
articleSchema.index({ title: 'text', content: 'text', summary: 'text' });

export default mongoose.model('Article', articleSchema);
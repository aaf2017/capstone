import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  user_fname: String,
  category: String,
  question: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postQuestion = mongoose.model('PostQuestion', postSchema);

export default PostQuestion;

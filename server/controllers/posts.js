import PostQuestion from '../models/postQuestion.js';
//import mongoose from 'mongoose';
export const getPosts = async (req, res) => {
    try {
        const PostQuestions = await PostQuestion.find();

        res.status(200).json(postQuestions);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postQuestion(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message}); // https://www.restapitutorial.com/httpstatuscodes.html
    }
}

/*export const updatePost = async (req. res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('There is no question with that id...');

    const updatedPost = await PostQuestion.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost); /*or updatePost?
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('There is no question with that id...');
    await PostQuestion.findByIdAndRemove(id);

    res.json({ message: 'Your post has been successfully deleted!' });

} 

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('There is no question with that id...');
    
    const PostQuestion.findById(id);
    const updatedPost = await PostQuestion.findByIdAndUpdate(id, { likeCount: post.likeCount +1 }, { new: true })

    res.json(updatedPost);

} 



*/

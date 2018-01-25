import Post from "../models/post";

export function getPosts(req, res){
    Post.find().exec((err, posts) => {
        if(err){
            res.status(500).send(err)
        }
        res.json({posts})
    })
}
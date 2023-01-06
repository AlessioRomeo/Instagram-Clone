import React from 'react';
import Post from "./Post";

function Posts(props) {

    const posts = [
        {
            id: "1",
            username: "alessioromeo",
            userImage: "https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "This is my first post"
        },
        {
            id: "2",
            username: "ariabagheri",
            userImage: "https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            image: "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "This is my second post"
        }
    ]

    return (
        <div>
            {
                posts.map(post =>(
                    <Post
                        key = {post.id}
                        id = {post.id}
                        username = {post.username}
                        userImage = {post.userImage}
                        image = {post.image}
                        caption = {post.caption}
                    />
                ))
            }
        </div>
    );
}

export default Posts;
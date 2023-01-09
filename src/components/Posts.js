import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {collection, onSnapshot, query, orderBy} from 'firebase/firestore'
import {db} from "../../firebase";

function Posts(props) {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const unsubscribe = onSnapshot(
            query(collection(db, 'posts'), orderBy(("timestamp"), "desc")), (snapshot)=>{
                setPosts(snapshot.docs);
            }
        );
    }, [db]);

    return (
        <div>
            {
                posts.map(post =>(
                    <Post
                        key = {post.id}
                        id = {post.id}
                        username = {post.data().username}
                        userImage = {post.data().profileImage}
                        image = {post.data().image}
                        caption = {post.data().caption}
                    />
                ))
            }
        </div>
    );
}

export default Posts;
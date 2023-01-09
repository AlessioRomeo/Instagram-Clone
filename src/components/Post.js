import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Moment from 'react-moment';
import styles from '../../styles/Post.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {FaRegComment, FaRegHeart} from "react-icons/fa";
import {BiBookmark, BiSmile} from "react-icons/bi";
import {FiSend} from "react-icons/fi";
import {useSession} from 'next-auth/react'
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp} from "firebase/firestore";
import {db} from "../../firebase";

function Post({id, username, userImage, image, caption}) {

    const {data: session} = useSession();
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => {setComments(snapshot.docs)}
        )
    }, [db, id])

    async function sendComment(event){
        event.preventDefault();
        const commentToSend = comment;
        setComment("")
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                    <Image className={styles.userImage} width={50} height={50} src={userImage} alt={"User Image"}/>
                    <h1 className={styles.headerUsername}>{username}</h1>
                    <HiOutlineDotsHorizontal className={styles.headerSettings}/>
            </div>
            <img className={styles.image} src={image} alt="Post Image"/>
            {
                session ? (
                    <div className={styles.buttonSection}>
                        <div className={styles.leftIcons}>
                            <FaRegHeart className={styles.icon}/>
                            <FaRegComment className={styles.icon}/>
                            <FiSend className={styles.icon}/>
                        </div>
                        <BiBookmark className={styles.icon}/>
                    </div>
                ) : (
                    <></>
                )
            }

            <div className={styles.captionSection}>
                <h1 className={styles.caption}><span>{username}</span> &nbsp;{caption} </h1>
            </div>

            {comments.length > 0 ? (
                <div className={styles.commentsContainer}>
                    {comments.map(comment => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={styles.commentContainer}>
                            <Image className={styles.commentUserImage} src={comment.data().userImage} width={40} height={40} alt={"User Image"}/>
                            <p className={styles.commentUsername}>{comment.data().username}</p>
                            <p className={styles.comment}>{comment.data().comment}</p>
                            <Moment className={styles.commentTime} fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}

            {
                session ? (
                    <div className={styles.commentSection}>
                        <BiSmile className={styles.icon}/>
                        <input className={styles.input} value={comment} onChange={(event)=>setComment(event.target.value)} placeholder={"Enter your comment..."} type="text"/>
                        <button onClick={sendComment} type={"submit"} disabled={!comment.trim()} className={styles.button}>Post</button>
                    </div>
                ) : (
                    <></>
                )
            }

        </div>
    );
}

export default Post;
import React from 'react';
import Image from "next/image";
import styles from '../../styles/Post.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {FaRegComment, FaRegHeart} from "react-icons/fa";
import {BiBookmark, BiSmile} from "react-icons/bi";
import {FiSend} from "react-icons/fi";

function Post({id, username, userImage, image, caption}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                    <Image className={styles.userImage} width={50} height={50} src={userImage} alt={"User Image"}/>
                    <h1 className={styles.headerUsername}>{username}</h1>
                    <HiOutlineDotsHorizontal className={styles.headerSettings}/>
            </div>
            <img className={styles.image} src={image} alt="Post Image"/>
            <div className={styles.buttonSection}>
                <div className={styles.leftIcons}>
                    <FaRegHeart className={styles.icon}/>
                    <FaRegComment className={styles.icon}/>
                    <FiSend className={styles.icon}/>
                </div>
                <BiBookmark className={styles.icon}/>
            </div>
            <div className={styles.captionSection}>
                <h1 className={styles.caption}><span>{username}</span> &nbsp;{caption} </h1>
            </div>
            <div className={styles.commentSection}>
                <BiSmile className={styles.icon}/>
                <input className={styles.input} placeholder={"Enter your comment..."} type="text"/>
                <button className={styles.button}>Post</button>
            </div>
        </div>
    );
}

export default Post;
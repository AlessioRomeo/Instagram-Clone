import React from 'react';
import Image from "next/image";
import styles from '../../styles/Post.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";

function Post({id, username, userImage, image, caption}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                    <Image className={styles.userImage} width={50} height={50} src={userImage} alt={"User Image"}/>
                    <h1 className={styles.headerUsername}>{username}</h1>
                    <HiOutlineDotsHorizontal className={styles.headerSettings}/>
            </div>
            <img className={styles.image} src={image} alt="Post Image"/>
        </div>
    );
}

export default Post;
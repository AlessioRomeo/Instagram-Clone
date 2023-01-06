import React from 'react';
import styles from '../../styles/MiniProfile.module.scss'
import Image from "next/image";

function MiniProfile() {
    return (
        <div className={styles.container}>
            <Image className={styles.profilePicture} src={"/medias/profileSignOut.png"} width={65} height={65} alt={"Profile Picture"}/>
            <div className={styles.middleContainer}>
                <h1>alessioromeo</h1>
                <p>Welcome to Instagram</p>
            </div>
            <button className={styles.button}>Sign out</button>
        </div>
    );
}

export default MiniProfile;
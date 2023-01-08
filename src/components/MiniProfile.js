import React from 'react';
import styles from '../../styles/MiniProfile.module.scss'
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
    const {data: session} = useSession();
    return (
        <div className={styles.container}>
            <Image className={styles.profilePicture} src={session?.user.image} width={65} height={65} alt={"Profile Picture"}/>
            <div className={styles.middleContainer}>
                <h1>{session?.user.username}</h1>
                <p>Welcome to Instagram</p>
            </div>
            <button className={styles.button} onClick={signOut}>Sign out</button>
        </div>
    );
}

export default MiniProfile;
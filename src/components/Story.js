import React from 'react';
import Image from "next/image";
import styles from '../../styles/Story.module.scss'

function Story({img, username}) {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Image className={styles.image} src={img} width={70} height={70} alt={username}/>
                <p className={styles.username}>{username}</p>
            </div>
        </div>
    );
}

export default Story;
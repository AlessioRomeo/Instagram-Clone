import React, {useEffect, useState} from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en'
import Story from "./Story";
import styles from '../../styles/Stories.module.scss'
import { useSession } from "next-auth/react";
import Image from "next/image";
import {IoMdAddCircle} from "react-icons/io";

function Stories(props) {
    const {data: session} = useSession();
    const [storyUsers, setStoryUsers] = useState([])
    useEffect(()=>{
        const storyUsers = minifaker.array(20, (i)=>(
            {
                username: minifaker.username({locale:"en"}).toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                id: i,
            }
        ));
        setStoryUsers(storyUsers);
    }, []);
    return (
        <>
            {
                session ? (
                    <div className={styles.container}>
                        <div className={styles.yourStorySection}>
                            <Image className={styles.image} src={session.user.image} width={70} height={70} alt={"Your story"}/>
                            <IoMdAddCircle className={styles.addIcon}/>
                            <p className={styles.username}>Your story</p>
                        </div>
                        {
                            storyUsers.map(user=>(
                                <Story key={user.id} username={user.username} img={user.img}/>
                            ))
                        }
                    </div>
                ): (
                    <div className={styles.container}>
                        {
                            storyUsers.map(user=>(
                                <Story key={user.id} username={user.username} img={user.img}/>
                            ))
                        }
                    </div>
                )
            }

        </>
    );
}

export default Stories;
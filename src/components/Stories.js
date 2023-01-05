import React, {useEffect, useState} from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en'
import Story from "./Story";
import styles from '../../styles/Stories.module.scss'

function Stories(props) {
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
        console.log(storyUsers);
    }, []);
    return (
        <div className={styles.container}>
            {
                storyUsers.map(user=>(
                    <Story key={user.id} username={user.username} img={user.img}/>
                ))
            }
        </div>
    );
}

export default Stories;
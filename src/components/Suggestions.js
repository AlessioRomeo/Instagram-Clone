import React, {useEffect, useState} from 'react';
import minifaker, {jobTitle, username} from "minifaker";
import 'minifaker/locales/en'
import styles from '../../styles/Suggestions.module.scss'
import Image from "next/image";

function Suggestions(props) {


    const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(5, (i)=>(
            {
                username: minifaker.username({locale:"en"}).toLowerCase(),
                jobTitle: minifaker.jobTitle(),
                id: i,
            }
        ));
        setSuggestions(suggestions)
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h1>Suggestions for you</h1>
                <button>See all</button>
            </div>
            {
                suggestions.map(suggestions =>(
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.suggestionsContainer}>
                        <Image className={styles.image} src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} width={45} height={45} alt={"Profile Picture"}/>
                        <div className={styles.middleContainer}>
                            <h1>{username()}</h1>
                            <p>{jobTitle()}</p>
                        </div>
                        <button>Follow</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Suggestions;
import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";
import styles from '../../styles/Feed.module.scss'
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed(props) {
    return (
        <div className={styles.container}>
                <section className={styles.innerContainer}>
                    {/*     Stories     */}
                    <Stories/>
                    {/*     Posts     */}
                    <Posts/>
                </section>

                <section className={styles.sideContainer}>
                    {/*     Mini Profile     */}
                    <MiniProfile/>
                    {/*     Suggestions     */}
                    <Suggestions/>
                </section>

        </div>
    );
}

export default Feed;
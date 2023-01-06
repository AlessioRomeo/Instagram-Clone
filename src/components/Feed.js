import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";
import styles from '../../styles/Feed.module.scss'

function Feed(props) {
    return (
        <div className={styles.container}>
            <section>
                {/*     Stories     */}
                <Stories/>
                {/*     Posts     */}
                <Posts/>
            </section>

            <section>
                {/*     Mini Profile     */}
                {/*     Suggestions     */}
            </section>
        </div>
    );
}

export default Feed;
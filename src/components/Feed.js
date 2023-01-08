import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";
import styles from '../../styles/Feed.module.scss'
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import {signIn, signOut, useSession} from "next-auth/react";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineAddCircleOutline} from "react-icons/md";
import Image from "next/image";

function Feed(props) {

    const {data: session} = useSession();

    return (

        <>
        {session ? (
                <>
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
                </>
            ): (
                <div className={styles.containerSignOut}>
                    <section className={styles.innerContainerSignOut}>
                        {/*     Stories     */}
                        <Stories/>
                        {/*     Posts     */}
                        <Posts/>
                    </section>
                </div>
            )}

        </>
    );
}

export default Feed;
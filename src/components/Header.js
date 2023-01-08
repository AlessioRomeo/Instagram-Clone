import React from 'react';
import styles from '../../styles/Header.module.scss'
import Image from "next/image";
import {IoSearch} from "react-icons/io5";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineAddCircleOutline} from "react-icons/md";
import {useSession, signIn, signOut} from "next-auth/react";
import {useRecoilState} from "recoil";
import {modalState} from "../../atom/modalAtom";

function Header(props) {

    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image className={styles.logoText} src={"/medias/logoText.png"} width={180} height={90} alt={"logo"}/>
                <Image className={styles.logoImage} src={"/medias/logoImage.png"} width={60} height={60} alt={"logo"}/>
            </div>
            <div className={styles.searchContainer}>
                <IoSearch className={styles.searchIcon}/>
                <input className={styles.search} placeholder={"Search"} type="text"/>
            </div>
            <div className={styles.menuContainer}>
                {session ? (
                    <>
                        <AiFillHome className={styles.homeIcon}/>
                        <MdOutlineAddCircleOutline onClick={()=>setOpen(true)} className={styles.addIcon}/>
                        <Image className={styles.profilePicture} src={session.user.image} onClick={signOut} width={50} height={50} alt={"Profile Picture"}/>
                    </>
                ): (
                    <button className={styles.buttonSignout} onClick={signIn}>Sign in</button>
                )}
            </div>
        </div>
    );
}

export default Header;
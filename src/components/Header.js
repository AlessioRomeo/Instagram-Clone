import React from 'react';
import styles from '../../styles/Header.module.scss'
import Image from "next/image";
import {IoSearch} from "react-icons/io5";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineAddCircleOutline} from "react-icons/md";

function Header(props) {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image className={styles.logoText} src={"/medias/logoText.png"} width={180} height={90} alt={"logo"}/>
            </div>
            <div className={styles.searchContainer}>
                <IoSearch className={styles.searchIcon}/>
                <input className={styles.search} placeholder={"Search"} type="text"/>
            </div>
            <div className={styles.menuContainer}>
                <AiFillHome className={styles.homeIcon}/>
                <MdOutlineAddCircleOutline className={styles.addIcon}/>
                <Image className={styles.profilePicture} src={"/medias/profileSignOut.png"} width={50} height={50} alt={"logo"}/>
            </div>
        </div>
    );
}

export default Header;
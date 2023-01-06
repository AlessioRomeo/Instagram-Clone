import React from 'react';
import { getProviders, signIn} from "next-auth/react";
import Header from '../../src/components/Header'
import styles from '../../styles/Signin.module.scss'
import Image from "next/image";

function Signin({providers}) {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <Image className={styles.imageLarge} src={"/medias/signinLarge.png"} width={400} height={400} alt={"Sign In Image"}/>
                <div>
                    {
                        Object.values(providers).map((provider)=>(
                            <div className={styles.innerContainer} key={provider.name}>
                                <Image className={styles.imageSmall} src={"/medias/logoText.png"} width={190} height={100} alt={"Sign In Image"}/>
                                <input className={styles.input} placeholder={"Username"} type="text"/>
                                <input className={styles.input} placeholder={"Password"} type="text"/>
                                <button className={styles.button} onClick={()=>signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default Signin;
export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: { providers }
    }
}
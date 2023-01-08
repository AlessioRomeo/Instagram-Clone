import React, {useRef, useState} from 'react';
import { modalState } from '../../atom/modalAtom'
import { useRecoilState } from "recoil";
import Modal from 'react-modal'
import styles from '../../styles/UploadModal.module.scss'
import {FiCamera} from "react-icons/fi";
import {addDoc, collection, serverTimestamp, updateDoc, doc} from 'firebase/firestore';
import {db, storage} from "../../firebase";
import {useSession} from "next-auth/react";
import {ref, uploadString, getDownloadURL} from 'firebase/storage'

function UploadModal(props) {
    const [open, setOpen] = useRecoilState(modalState)
    const filePickerRef = useRef(null)
    const captionRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const {data: session} = useSession();
    async function uploadPost(reference){
        if(loading) return;
        setLoading(true);
        const docRef = await addDoc(collection(db, "posts"), {
            caption: captionRef.current.value,
            username: session.user.username,
            profileImage: session.user.image,
            timestamp: serverTimestamp(),
        });
        const imageRef = ref(storage, `posts/${docRef.id}/image`)
        await uploadString(imageRef, selectedFile, "data_url").then(
            async(snapshot)=>{
                const downloadURL = await getDownloadURL(imageRef)
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL
                })
            }
        )
        setOpen(false)
        setLoading(false)
        setSelectedFile(null)
    }


    const [selectedFile, setSelectedFile] = useState(null)
    function addImageToPost(event){
        const reader = new FileReader()
        if(event.target.files[0]){
            reader.readAsDataURL(event.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    return (
        <div>
            {open && (
                    <Modal
                        isOpen={open}
                        onRequestClose={()=> {
                            setOpen(false);
                            setSelectedFile(null)
                        }}
                        className={styles.modalContainer}
                    >

                            {selectedFile ? (
                                <img src={selectedFile} className={styles.imageUploaded} onClick={()=>setSelectedFile(null)} alt=""/>
                            ) : (
                                <div onClick={()=>filePickerRef.current.click()} className={styles.cameraIconContainer}>
                                    <FiCamera className={styles.cameraIcon}/>
                                    <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
                                </div>
                            )}
                        <input className={styles.input} ref={captionRef} placeholder={"Please enter your caption..."} maxLength={150} type="text"/>
                        <button className={styles.button} onClick={uploadPost} disabled={!selectedFile || loading}>Upload Post</button>
                    </Modal>
            )}
        </div>
    );
}

export default UploadModal;
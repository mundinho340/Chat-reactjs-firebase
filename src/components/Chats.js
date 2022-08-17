 import { CSSProperties } from "react";
 import React, { useRef, useState, useEffect } from "react";
 import { useHistory } from "react-router-dom";
 import { ChatEngine } from 'react-chat-engine';
 import { auth } from '../firebase';
 import Modo from "./Modo"
 import { useAuth } from "../contexts/AuthContext"; 
import axios from "axios";

 const Chats = () => {
     const history = useHistory();
     const { user } = useAuth();
     const [loading, setLoading] = useState(true);
     
     const handleLogout = async () => {
         await auth.signOut();

         history.push('/');
     }
     const modo = async() =>{
        document.body.style.background="black"
        console.log("ola")
     }
     const getFile = async (url) => {
         const response = await fetch(url);
         const data = await response.blob();

         return new File([data], "userPhoto.jpg", {type: 'image/jpeg' })
     }

     useEffect(() => {
         if(!user) {
             history.push('/');

             return;
         }

         axios.get('https://api.chatengine.io/users/me', {  
             headers: {
                 "project-id": "c2edc39d-64d6-411a-9a5d-834972d1102b",
                 "user-name": user.email,
                 "user-secret": user.uid,
             }
         })
         .then(() => {
             setLoading(false);
         })
         .catch(() => {
             let formdata = new FormData();
             formdata.append('email', user.email);
             formdata.append("username", user.email);
             formdata.append('secret', user.uid);

             getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);

                    axios.post('https://api.chatengine.io/users',
                        formdata,
                        { headers: { "private-key": "bcb915ad-c493-4aaa-89e9-a575360de64f" } }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
         })
     }, [user, history]);

     if(!user || loading){
       return(   
           
       <p onClick={handleLogout}> calce aqui</p>)
     } 

     return(
        <div className="chats-page">
            <div className="nav-bar">
                <div onClick={modo}>modo</div>
                <div className="logo-tab">
                    Buzi
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Sair 
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"       
                projectID="c2edc39d-64d6-411a-9a5d-834972d1102b"
                userName={user.email}
                userSecret={user.uid}
            />

        </div>
     );
 }

 export default Chats;

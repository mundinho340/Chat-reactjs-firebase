import React from 'react';
import { GoogleOutlined, FacebookOutlined, GithubOutlined, YoutubeOutlined  } from '@ant-design/icons'


import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-card">
                <h2 className="buzi"><img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" /></h2>

                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with  Google
                </div>
                <br /> <br />

                <div
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                   <a href="http://localhost:3000/" target="_blank"><FacebookOutlined /> Sign In with Facebook</a> 

                </div>

                {/* <br /> <br />

                <div className="login-button github">
                    <GithubOutlined /> Sign In with Github

                </div>

                <br /> <br />

                <div className="login-button Youtube">
                    <YoutubeOutlined /> Sign In with Youtube

                </div> */}
            </div>

        </div>
    );
}

export default Login;
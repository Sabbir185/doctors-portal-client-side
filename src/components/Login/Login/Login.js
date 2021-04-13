import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import loginSider from '../../../images/loginSider.png'
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}



const Login = () => {
    const history = useHistory(); 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleGoogleLogin = () => {
        const google = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(google)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const {displayName, email, photoURL} = result.user;
                const googleUserInfo = {name: displayName, email, photoURL};
                setLoggedInUser(googleUserInfo);
                email && history.push('/');
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }



    return (
        <section>
            <div className="row">

                <div className="col m-5 p-5">
                    <h3 className="text-center brand-text2">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5 shadow p-3 mb-5 bg-body rounded">
                        <input {...register("email", { required: true })} className="form-control mb-3" placeholder="Email" />
                        {errors.email && <span>Email is required</span>}

                        <input {...register("password", { required: true })} className="form-control mb-3" placeholder="Password" />
                        {errors.password && <span>Password is required</span>}

                        <input className="btn btn-info d-block mt-2" type="submit" />
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-info d-block mx-auto">Login With Google</button>
                </div>

                <div className="col mt-5">
                    <img src={loginSider} alt="" className="img-fluid w-75"/>
                </div>
            </div>
        </section>
    );
};

export default Login;
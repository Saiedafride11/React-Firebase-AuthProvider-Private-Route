import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, GithubAuthProvider, signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message)
        });
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
    })
        }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
    })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
        })
    },[])
    return {user, error, signInUsingGoogle, signInUsingGithub, logOut }
};

export default useFirebase;
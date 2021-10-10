import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="Please Enter Your Email"/>
                <br />
                <input type="password" placeholder="Please Enter Your Password"/>
                <br />
                <br />
                <input type="submit" />
            </form>
            <br />
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;
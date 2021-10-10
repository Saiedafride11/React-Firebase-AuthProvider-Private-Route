import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut, error} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">placeOrder</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogIn</Link>
            <span>{user.displayName} </span>
            {user?.displayName && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;
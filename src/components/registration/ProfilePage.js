import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import { getAllUserItems, deleteUser, getUser, userLogOut } from "../../services/api";
import FavoriteItem from "../items/FavoriteItem";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [orders, setOrders] = useState([]);

    const fetchUserData = async (userId) => {
        getUser(userId).then((res) => {
            const { firstName = "FirstName not available", lastName = "LastName not available", username = "Username not available", email = "Email not available", phone = "Phone not available", address = {} } = res.data;
            const { city = "City not available", country = "Country not available" } = address || {};

            const user = {
                name: `${firstName} ${lastName}`,
                username: username,
                email: email,
                phone: phone,
                address: `${city}, ${country}`,
            };

            setUserData(user);
        });
    };

    const fetchFavoriteItems = async (userItemsBody) => {
        getAllUserItems(userItemsBody).then((res) => {
            const item = res.data.map((userItem) => <FavoriteItem item={userItem} />);
            setFavorites(item.slice(0, 3));
        });
    };

 

    const handleDeleteUser = async () => {
        const userId = sessionStorage.getItem('id');

        await deleteUser(userId);
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("isActive");
        navigate('/'); // Redirect to the home/shop page after deleting the user
    };

    const handleLogout = async () => {
        const loggedInUserId = JSON.parse(sessionStorage.getItem("id"));
        const userSecondBody = {
            userId: loggedInUserId,
            active: 0
        };

        await userLogOut(userSecondBody);
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("isActive");
        navigate('/'); // Redirect to the main page after logging out
    };

    useEffect(() => {
        const userItemsBody = {
            userId: JSON.parse(sessionStorage.getItem("id"))
        };

        const userId = sessionStorage.getItem('id');
        if (userId) {
            fetchUserData(userId);
            fetchFavoriteItems(userItemsBody);
        } else {
            navigate('/login');
        }
    }, [navigate,favorites]);

    return (
        <div className="profile-container">
            {!userData ? (
                <div className="login-signup">
                    <button onClick={() => navigate('/login')} className="btn">Login</button>
                    <button onClick={() => navigate('/signup')} className="btn">Sign Up</button>
                </div>
            ) : (
                <div className="profile-content">
                    <h2>Profile Information</h2>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone:</strong> {userData.phone}</p>
                    <p><strong>Address:</strong> {userData.address}</p>

                    <br></br>
                    <div className="list-container">
                        <h3>Favorite List</h3>
                        {favorites.length > 0 && ( // Show the arrow only if there are favorite items
                            <div className="arrow" onClick={() => navigate('/favoriteItems')}>&rarr;</div>
                        )}
                        <ul className='rows'>
                            {favorites.length > 0 ? (
                                favorites.map((item, index) => (
                                    <li  key={index}>{item}</li>
                                ))
                            ) : (
                                <li className='masFav'>No favorite items</li> // Message when no favorites are available
                            )}
                        </ul>
                       
                    </div>

                    <div className="list-container">
                        <h3>Order List</h3>
                       
                        <div className="arrow" onClick={() => navigate('/ordersList')}>&rarr;</div>
                    </div>
                    <br/>
                    <br/>
                    <button className="btn" onClick={handleLogout}>Logout</button>
                    <button className="btn delete-btn" onClick={handleDeleteUser}>Delete Account</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import { getAllUserItems} from "../../services/api";
import FavoriteItem from "../../components/FavoriteItem";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);




  // Simulate API calls
  const fetchUserData = async (userId) => {
    // Replace with actual API call
    const data = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      address: { city: 'New York', country: 'USA' }
    };
    console.log(data)
    setUserData(data);
  };
console.log(userData)

  const fetchFavoriteItems = async (userItemsBody) => {

        getAllUserItems(userItemsBody).then(
            res => {
                console.log(res)
                const item = res.data.map((userItem) => {
                        return (
                     <FavoriteItem item={userItem} />
                        )
                }
        )
        setFavorites(item.slice(0, 3));
            
        }
        );
  };
  const fetchOrders = async (userId) => {
    // Replace with actual API call
    const orders = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];
    setOrders(orders.slice(0, 3)); // Show first 3 orders
  };

  const handleDeleteUser = async () => {
    // Replace with actual API call to delete user
    console.log('User deleted');
  };

  const handleChangePassword = () => {
    navigate('/changePassword');
  };

  useEffect(() => {
    const userItemsBody ={
        userId: JSON.parse(sessionStorage.getItem("id"))
     }
    
    const userId = sessionStorage.getItem('id');
    if (userId) {
      fetchUserData(userId);
      fetchFavoriteItems(userItemsBody);
      fetchOrders(userId);
    } else {
      navigate('/login');
    }
  }, [navigate]);

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
          <p><strong>Address:</strong> {`${userData.address.city}, ${userData.address.country}`}</p>

          <button className="btn" onClick={handleChangePassword}>Change Password</button>
          <button className="btn delete-btn" onClick={handleDeleteUser}>Delete Account</button>

          <div className="list-container">
            <h3>Favorite List</h3>
            <ul>
              {favorites.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="arrow" onClick={() => navigate('/favoriteItems')}>&rarr;</div>
          </div>

          <div className="list-container">
            <h3>Order List</h3>
            <ul>
              {orders.map((order, index) => (
                <li key={index}>{order}</li>
              ))}
            </ul>
            <div className="arrow" onClick={() => navigate('/orderItems')}>&rarr;</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

import {axiosInstance as axios} from './axiosInstance'

const GET_ALL_ITEMS = () => `item/getAll`;
const CREATE_NEW_USER_ITEM = () => `userItems/create`;
const CREATE_NEW_ORDER_ITEM = () => `orderItems/create`;
const AUTHENTICATE = () => `api/public/authenticate`;
const GET_ALL_ORDERS = () => `order/getAll`;
const GET_ALL_USERS = () => `user/getAll`
const CREATE_NEW_USER = () => `user/create`;
const GET_ALL_IDS = () => `orderItems/getAll/orderIds`;

export const authenticate = (userBody) => {
    return axios.post(AUTHENTICATE(), userBody);
}
export const updateItem = (itemBody) => {
    return axios.put(`item/update/${itemBody.id}`,itemBody);
};

export const getAllItems = () => {
    return axios.get(GET_ALL_ITEMS());
};

export const createUserItem = (userItemBody) => {
    return axios.post(CREATE_NEW_USER_ITEM(), userItemBody);
}
export const getAllOrderIds = () => {
    return axios.get(GET_ALL_IDS());
}

export const deleteUserItem = (userItemBody) => {
    return axios.delete(`userItems/delete/${userItemBody.userId}/${userItemBody.itemId}`);
}

export const createOrderItem = (orderItemBody) => {
    return axios.post(CREATE_NEW_ORDER_ITEM(), orderItemBody);
}

export const decOrderItemQuantity = (orderItemBody) => {
    return axios.put(`orderItems/decrease/quantity/${orderItemBody.orderId}/${orderItemBody.ItemsId}`);
};


export const updateUserActive = (userSecondBody) => {
    return axios.put(`user/update/active/${userSecondBody.username}`, userSecondBody);
}


export const userLogOut = (userSecondBody) => {
    return axios.put(`user/update/logout/${userSecondBody.userId}`, userSecondBody);
}


export const userStatus = (userId) => {

    return axios.get(`user/get/userStatus/${userId}`);
}

export const getUser = (userId) => {

    return axios.get(`user/get/${userId}`);
} 

export const getUserId = (userName) => {
    return axios.get(`user/get/id/${userName}`);
}

export const getAllUserItems = (userItemsBody) => {
    return axios.get(`userItems/getAll/${userItemsBody.userId}`);
}

export const getAllOrderItems = (orderId) => {
    return axios.get(`orderItems/getAll/${orderId}`);
}

export const getItem = (itemId) => {
    return axios.get(`item/get/${itemId}`);
}

export const getTempOrder = (userId) => {
    return axios.get(`order/get/tempOrder/${userId}`);
}
export const getAllCloseOrders = (userId) => {
    return axios.get(`order/getAll/CloseOrders/${userId}`);
}

export const getOrder = (orderId) => {
    return axios.get(`order/get/${orderId}`);
}
export const getAllOrders = () => {
    return axios.get(GET_ALL_ORDERS());
};

export const getAllUsers = () => {
    return axios.get(GET_ALL_USERS());
};

export const createNewUser = (userBody) => {
    return axios.post(CREATE_NEW_USER(), userBody);
}
export const deleteOrder = (orderBody) => {
    return axios.delete(`order/delete/${orderBody.id}`);
}

export const updateOrderShippingAddress = (orderId,orderBody) => {
    return axios.put(`order/update/shippingAddress/${orderId}`, orderBody);
}
export const updateOrderStatus = (orderId) => {
    return axios.put(`order/update/status/${orderId}`);
}
export const deleteAllOrderItems = (orderItemsBody) => {
    return axios.delete(`orderItems/delete/allItems/${orderItemsBody.orderId}`);
}

export const deleteUser = (userId) => {
    return axios.delete(`user/delete/${userId}`);
}


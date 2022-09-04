import React, { useState, useEffect } from 'react';
import '../styles/orders.css';
import { db } from '../firebase';
import { useGlobalContext } from '../StateProvider';

const Orders = () => {
  const [{ cart, user }, dispatch] = useGlobalContext();
  const [orders, setOrders] = useState([]);
  console.log('🚀 ~ file: Orders.jsx ~ line 9 ~ Orders ~ setOrders', orders);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'></div>
    </div>
  );
};

export default Orders;

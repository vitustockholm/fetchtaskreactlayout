import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
  const API = 'https://fakestoreapi.com/products';
  //Hooks

  // ---state
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([0]);

  //----side effects

  useEffect(() => {
    if (!users.length) {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          console.log('usersffect: data fetched');
        });
    }
    console.log('usersEfect ffetched default');
  }, [count, users.length]);
  //,[]) veikia kaip mountinimas uzsibaigia infinioty loopas

  //Custom Functions
  const deleteUser = (id) => {
    // fetch(`api/users/${id}`, { method: 'DELETE' });   <-- sending Delete requet to backend
    const usersAfterDelete = users.filter((user) => user.id !== id);

    setUsers(usersAfterDelete);
  };

  return (
    <div className='products'>
      <h2 id='hhh'>Best Sellers</h2>

      {users.slice(0, 10).map((user) => (
        <Product user={user} key={user.id} action={deleteUser} />
      ))}
      <button onClick={() => setCount(count + 1)}>Clicked: {count} </button>
    </div>
  );
};

export default Products;

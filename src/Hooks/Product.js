import React, { useEffect } from 'react';

const Product = ({ user, action }) => {
  //Hooks
  //--side effects
  useEffect(() => {
    console.log('user effect');

    return () => {
      console.log('User removed , id', +user.id);
    };
  });
  return (
    <ul id={user.id} className='product'>
      <li>
        <img src={user.image} alt='' />
      </li>
      <li>{user.category}</li>
      <li>{user.title}</li>

      <li>{user.price}</li>
      <button onClick={() => action(user.id)}>Add To Cart</button>
    </ul>
  );
};

export default Product;

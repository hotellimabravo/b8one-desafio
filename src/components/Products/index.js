import React from 'react';
import UIButton from '../Button';
import './index.css';




function ProductList() {
  const posts = [
    {
      id: 1,
      description: 'Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      price: 2599,
      oldprice: 2813,
      img: './image.png',
      installment: 10
    },
    {
      id: 2,
      description: 'Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      price: 2599,
      oldprice: 2813,
      img: './image.png',
      installment: 10
    },
    {
      id: 3,
      description: 'Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      price: 2599,
      oldprice: 2813,
      img: './image.png',
      installment: 10
    },
    {
      id: 4,
      description: 'Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      price: 2599,
      oldprice: 2813,
      img: './image.png',
      installment: 10
    }, 
  ];

  
  return (
    <div className='products'>
      {posts.map((post) =>
        <div className="card" key={post.id}>
          <img className='imageCard' src={post.img} alt='pdtimg' />

          <p className="description">{post.description}</p>

          <p className="oldprice">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(post.oldprice)}</p>

          <p className="price">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(post.price)}</p>

          <p className="parcelamento">em até <span className="weight">{post.installment}x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(post.price/10)}</span> sem juros. </p>
          
          <UIButton idProduto={post.id} />
        </div>
      )}
    </div>
  )
};








export default ProductList;



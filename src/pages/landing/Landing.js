import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>Welcome to Mota - Your One-Stop Automobile Advertising Platform</h1>
      <p>Mota is a web-based platform that allows automobile companies, car selling businesses, and individuals to list their cars for sale. Potential clients can view the cars and find their dream car with ease. Our theme is red and white, making it easy on the eyes and aesthetically pleasing.</p>
      <Link to='/register'>
        <button className='list-car-btn'>List Your Car for Sale</button>
      </Link>
      <Link to='/home'>
        <button className='browse-inventory-btn'>Browse Our Inventory</button>
      </Link>
      <div className='reviews'>
        <h2>What Our Customers Are Saying</h2>
        <div className='review'>
          <p>“I had a great experience using Mota to list my car for sale. The process was easy and straightforward, and I received a lot of interest in my car. I highly recommend it.” - Glen Ayienda</p>
        </div>
        <div className='review'>
          <p>“Mota made it easy for me to find my dream car. The selection was great and the sellers were helpful. I will definitely use it again.” - Kevin Mushan</p>
        </div>
        <div className='review'>
          <p>“I sold my car in no time thanks to Mota. The platform was user-friendly and the red and white theme made it easy on the eyes. I highly recommend it.” - Cynthia Wambui</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

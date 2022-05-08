import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import banner from '../../img/banner-1.png'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className="col-sm-6 align-self-center">
            <p className='big-text'>Welcome to Guild FUITE</p>
            <p>Would you like millions of new customers to enjoy your amazing groceries? So would we!
It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
Interested? Let's start our partnership today!</p>
            <a className='btn button btn-first' href="#">Like Video</a>
            <a className='btn button btn-second' href="#">Subscribe</a>
          </div>       
        <div className="col-sm-6">
          <img src={banner} alt="" className='img-fluid'/>
        </div>
      </div>
    </div>
        </div >
    );
};

export default Banner;
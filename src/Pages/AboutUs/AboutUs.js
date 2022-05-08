import React from 'react';
import bg from '../../img/bg-2.jpg'

const AboutUs = () => {
    return (
        <div id='aboutus'>
      <div className="container mb-5 ">
          <h1 className='text-warning text-center mb-5 mt-5'>About us</h1>
        <div className='row'>
        <div className="col-sm-5 pr-3">
          <img src={bg} alt="" className='img-fluid'/>
        </div>
          <div className="col-sm-7 align-self-center">
            <p className='big-text-2'>This is Guild FUITE</p>
            <p>This is a fruite management website. In this website you can add your item.Then when your stock out you can delete item. If you want to delete item go to manage inventory page. In this website you can get more extea functionality. We are create this website for helping you. If you any question please down blew in Ask any Question section.</p>
          </div>       
      </div>
    </div>
        </div >
    );
};

export default AboutUs;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark text-white pt-5 pb-4'>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-wight-bold text-warning'>Guild Fuite</h5>
                        <p style={{textAlign: 'left'}}>It is a fruite Warehouse Managment Website. In this website you can add your product with price. Then you can manage your products.</p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='text-uppercase mb-4 font-wight-bold text-warning'>Products</h5>
                    <p>
                        <Link to="/items" className='text-white text-decoration-none'>Items</Link>
                    </p>
                    <p>
                        <Link to="/my-items" className='text-white text-decoration-none'>My items</Link>
                    </p>
                    <p>
                        <Link to="#about" className='text-white text-decoration-none'>About us</Link>
                    </p>
                    <p>
                        <Link to ="#contact" className='text-white text-decoration-none'>Contact us</Link>
                    </p>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='text-uppercase mb-4 font-wight-bold text-warning'>Useful links</h5>
                    <p>
                        <Link to="/login" className='text-white text-decoration-none'>Login</Link>
                    </p>
                    <p>
                        <Link to="/registation" className='text-white text-decoration-none'>Registation</Link>
                    </p>
                    <p>
                        <a href="#" className='text-white text-decoration-none'>Become an Affiliate</a>
                    </p>
                    <p>
                        <a href ="#" className='text-white text-decoration-none'>Help</a>
                    </p>
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-2 mx-auto mt-3'>
                    <h5 className='text-uppercase mb-4 font-wight-bold text-warning'>Contact us</h5>
                    <p>
                        <i className='fas fa-home me-2'></i>New Youk, NY 2333, Us
                    </p>
                    <p>
                        <i className='fas fa-envelope me-2'></i>robert36@gmail.com
                    </p>
                    <p>
                        <i className='fas fa-phone me-2'></i>+1235 5767 87757553
                    </p>
                    <p>
                        <i className='fas fa-mobile me-2'></i>+015557 567454 890
                    </p>
                    </div>
                </div>
                <hr className='mb-4' />
                <div className='row align-items-center'>
                    <div className="col-md-7 col-lg-8 inline-block">
                        <p className='d-inline-block'> Copyright &copy; 2022 All rigts reserveed by:</p>
                        <a className='text-decoration-none' href="#">
                            <strong className='text-warning'>&nbsp;Guild Fruite</strong>
                        </a>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <ul className='list-unstyled list-inline'>
                                <li className='list-inline-item'>
                                    <a className='btn-fofting btn-sm text-white' style={{ fontSize: '23px' }} href="https://www.facebook.com/programmingherowebcourse"><i className='fab fa-facebook'></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='btn-fofting btn-sm text-white' style={{ fontSize: '23px' }} href="https://www.instagram.com/programminghero/"><i className='fab fa-instagram'></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='btn-fofting btn-sm text-white' style={{ fontSize: '23px' }} href="https://www.linkedin.com/company/programminghero/"><i className='fab fa-linkedin'></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a className='btn-fofting btn-sm text-white' style={{ fontSize: '23px' }} href="https://www.youtube.com/c/ProgrammingHeroCommunity"><i className='fab fa-youtube'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;
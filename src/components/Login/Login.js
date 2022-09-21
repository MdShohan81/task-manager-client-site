import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-100  p-4">
                            <div className="card-body">
                                <h4 className='text-center'>SIGN IN</h4>
                                <br/>
                                <input  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button  className="btn w-100 animated fadeInUp float-end" style={{"background-color": "#CB0C9F","color": "#ffffff"}}>Login</button>
                                <hr/>
                                <div className=" mt-5 text-center">

                                    <span>
                                        <Link className="text-center ms-3 text-decoration-none h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 text-decoration-none h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </span>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
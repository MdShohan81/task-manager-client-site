import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="container">
            <div className="row  justify-content-center ">
                <div className="col-md-7 mt-5 col-lg-6 center-screen">
                    <div className="card w-100  p-4 animated fadeIn">
                        <div className="card-body">
                            <h4 className='text-center pb-3'>Sign Up</h4>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className=" p-2">
                                        <input  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="text-center p-2">
                                    <button  className="btn w-100 animated fadeInUp float-end" style={{"background-color": "#CB0C9F","color": "#ffffff"}}>SIgn Up</button>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-5 text-center">

<span>
    <Link className="text-center ms-3 text-decoration-none h6 animated fadeInUp" to="/login">Log In</Link>
    <span className="ms-1">|</span>
    <Link className="text-center ms-3 text-decoration-none h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
</span>

</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
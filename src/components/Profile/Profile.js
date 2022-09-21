import React from 'react';
import shohan from '../../assets/img/shohan.jpeg'

const Profile = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img src={shohan}  className="icon-nav-img-lg"  alt="img"/>
                                <hr/>
                                <div className="row">
                                    <div className="p-1">
                                        <label>Profile Picture</label>
                                        <input  placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="p-1">
                                        <label>Email Address</label>
                                        <input  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="p-1">
                                        <label>First Name</label>
                                        <input  placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="p-1">
                                        <label>Last Name</label>
                                        <input  placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="p-1">
                                        <label>Mobile</label>
                                        <input placeholder='Mobile'  className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="p-1">
                                        <label>Password</label>
                                        <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="p-1">
                                        <button  className="btn w-100 float-end animated fadeInUp" style={{"background-color": "#CB0C9F","color": "#ffffff"}}>Update Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
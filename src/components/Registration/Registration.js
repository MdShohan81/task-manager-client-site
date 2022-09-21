import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {IsEmail,IsEmpty,IsMobile, ErrorToast} from '../../helper/FormHelper';
import {RegistrationRequest} from "../../APIRequest/APIRequest";

const Registration = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();

    let navigate=useNavigate();

    const onRegistration = () => {

        let email=emailRef.value;
        let fastName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(fastName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            RegistrationRequest(email,fastName,lastName,mobile,password).then((result)=>{
                if(result===true){
                    navigate("/login")
                }
            })
        }
    }

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
                                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className=" p-2">
                                        
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="text-center p-2">
                                    <button onClick={onRegistration}  className="btn w-100 animated fadeInUp float-end" style={{"background-color": "#CB0C9F","color": "#ffffff"}}>SIgn Up</button>
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
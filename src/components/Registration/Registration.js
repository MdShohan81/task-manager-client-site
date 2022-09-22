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
        let photo= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA8ADwDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAABwUIAAQGAgP/xAA0EAABAwMBBgUDAwMFAAAAAAABAgMEBQYRAAcSEyExUUFhcYGhIjKRCGKxFEKCFyMzU9H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AZtRdwXHSrYpyp1WlJYbHJKeq3D2SnqTr3Xq3Dt2iyarOXusx0bxHis+CR5k4Ghy3qBVNrtwu3BX3FtUhhZQ20g4BHXho7DplXj/Abj+0687wlriWZRlMsg7vGKAtQ8yo/Qn0P517RYW1KpDiTrscjFXPcTNc/hHLSzFiU6h00MxmmIUOOgnCcIQgDmST8knR9WtudAp8pTFOiP1IJOC6lQbQfQkZP40EM5Z21qj/AO7AuNc/d5hBmKUT7OcvnX1pe1+tUOemm3vRnGD/AN6GihYHcpPJQ80/OugtrbJbtelIhykuUuQ4cI45BbUe2+OnvjXXV63qXctOVBqsVD7R5pJH1Nnuk+B0GzTqlCq8FqdT5LcmM6MocbOQf/D5a2tBDTlX2L3clh1xyVQJys+Sk9wPBaeWe49sOUaQzMjNSY7iXWXkBba0nIUkjII0BFtknSa1cdFs6EvBfWlbnYqWrdTn0GT76VaPSotDpEamQ0brEZsIT3OOpPmTz0TsYn/qRc4w3hGCtwHyY5fJzpl0BHt4uF+LAhUFhakJl5efx/clJwlPpnn7DQfps29UF9+NT66yhS24+WH8D7ATlJPlnI9xoT0GashsfuF+u2WhuUsuPwHDHK1dVJABT8HHtqt+rGbGaC/RrKD8lCm3ag6XwhQwQjACfyBn30E9fdttXTacunqQC+lPFjKP9rien55j30Y7PdqkG3rXRSquHVuR3VBojwb5ED2O9pw1Um646Il3VeO0AENzXkpA8BvnQJ9bWLc/UHBnOjDM/cGTyH1oLXwQDpn0b7Z7WdrFvtVmEkmVS8rUE/cpo43j/jjP51E/61sM2Cy+kB2vkcBTShyCgP8AlPkeuO/LQI1xVq36ZBU1cEyI0w+ndLT5B4gP7epHtoxe2RWrcajNti5kMsL58IAPhPl9wUPfRHUqpOrE5ydUZLkmQ6cqWs5Pp5Dy1rIcW2rebWpCu6Tg6Brg7OrGsqS3NuW4GZjiFAtsu4QnPfhglSv476U6XVabV4aZNLmMSmMYCmVAgeR7emqgKUVKKlEknqSdStu3NVLWqaJ1LkqbUPvbJyhwdlDx0FtHnUMMredUEobSVKJ8AOZ1UqembXqrOqbEVxxMmS44d1OcFRzj50pXptZiVqxmYVISpNRqg4chkczHT0UM+O90Hlnprudndootm0I0OWyhUt0l+RvJB3VqA+n2AA9tB1hAIIIyD1B0FbStk79OferVux1PQlkreitj6mO5SPFPl4enR21mgpmRg4Os1aG4dmlrXI4p+VA4EhXNT8U8NZPc8sE+o1Xy66FFoVTdjRXHVoQspBdIJ+ANBA69NNOPupaZbU44s4ShIySewGuwsC0KddNUajT3ZKEK68FSQfkHT1btj27awCqZT0JexgyHPrcP+R6e2NBw2zDZUqlOtV64Gh/WJ+qNFPPg/uV+7sPD16LOs1mg/9k=';
        

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
            RegistrationRequest(email,fastName,lastName,mobile,password,photo).then((result)=>{
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
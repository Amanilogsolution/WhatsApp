import './Login.css'
import React, { useState } from 'react';
import {UserLogin} from '../../api/index'



function Login() {
    const [toogleicon, setToogleicon] = useState(true);

    const handleClick =async(e)=>{
        e.preventDefault();
        const userId = document.getElementById('Username').value;
        const userpassword = document.getElementById('Password').value
        console.log(userId,userpassword)
        const result = await UserLogin(userId,userpassword)
        console.log(userId===result.user_id)
        if(userId===result.user_id){
            localStorage.setItem("userID",result.user_id)
            window.location.href="/Dashboard"
        }
        else{
            alert("Invalid User")
        }
    }

    const handletoggle = () => {
        setToogleicon(!toogleicon)
    }
    return (
        <>
            <div className="containerdiv" >

                <div className="login-div">
                    <h1 className="login-heading"><span>Login</span></h1>
                    <form>
                        <div className='row'>
                            <label htmlFor="Username"><b>UserName </b></label><br />
                            <input className="inputbox" type="text" id="Username" placeholder="User Name" />
                        </div>
                        <div className='row'>
                            <label htmlFor="Password" className="lablePass"><b>Password</b></label>
                            <input className="inputbox inputbox2" type={toogleicon ? "password" : "text"} id="Password" placeholder="Password" />
                            {
                                toogleicon ? <span className="material-symbols-outlined eye-icon" onClick={handletoggle}>
                                    visibility_off
                                </span> : <span className="material-symbols-outlined eye-icon" onClick={handletoggle}>
                                    visibility
                                </span>
                            }
                        </div>
                        <button className="submitbtn" onClick={handleClick}><b>Submit</b></button>
                    </form>
                </div>
            </div>
        </>)
}
export default Login;
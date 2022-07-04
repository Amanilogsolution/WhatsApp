import './Login.css'
import React, { useState } from 'react'



function Login() {
    const [toogleicon, setToogleicon] = useState(false);

    const handletoggle = () => {
        setToogleicon(!toogleicon)
    }
    return (
        <>
            <div className="containerdiv" >

                <div className="login-div">
                    <h1 className="heading"><span>Login</span></h1>
                    <form>
                        <div className='row'>
                            <label htmlFor="Username"><b>UserName </b></label><br />
                            <input className="inputbox" type="text" id="Username" placeholder="UserName" />
                        </div>
                        <div className='row'>
                            <label htmlFor="Password" className="lablePass"><b>Password</b></label>
                            <input className="inputbox2" type={toogleicon ? "password" : "text"} id="Password" placeholder="Password" />
                            {
                                toogleicon ? <span className="material-symbols-outlined eye-icon" onClick={handletoggle}>
                                    visibility
                                </span> : <span className="material-symbols-outlined eye-icon" onClick={handletoggle}>
                                    visibility_off
                                </span>
                            }


                        </div>
                        <button className="submitbtn"><b>Submit</b></button>
                    </form>
                </div>
            </div>
        </>)
}
export default Login;
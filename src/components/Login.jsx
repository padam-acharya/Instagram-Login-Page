import React from 'react'
import { ImFacebook2 } from "react-icons/im"
function Login() {
    return (
        <div className='login-container'>
            <div className="login-box">
                <a href="https://www.fontspace.com/category/lettering"><img src="https://see.fontimg.com/api/renderfont4/dBYX/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SW5zdGFncmFt/grestal-script-demo-regular.png" alt="Lettering fonts" /></a>

                <form action="" className='login-form'>
                    <input type="text" name="username" placeholder='Phone number, username or email' />
                    <input type="password" name="password" placeholder='Password' />
                    <button className='btn-primary' >Log in</button>
                </form>
                <div className="split">
                    <div className='left'></div>
                    <span>OR</span>
                    <div className='right'></div>
                </div>
                <div className="facebook-login-box">
                    <a href="" className='fb-link'><ImFacebook2 /><span>Login with Facebook</span></a>
                    <a href="" className='forgot-password-link'>Forgot password?</a>
                </div>


            </div>
            <div className="sign-up-container">
                <p>Don't have an account? <a href="">Sign up</a></p>
            </div>

            <div className="info">
                <p>Get the app.</p>
            </div>

            <div className="store">
                <img src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" alt="" />
                <img src="https://www.theprimemachine.net/tpmcrafty/images/English_get-it-from-MS.png" alt="" />
            </div>
        </div>
    )
}

export default Login
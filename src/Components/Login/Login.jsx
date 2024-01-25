import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login=()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleLogin =()=>{

        const users = JSON.parse(localStorage.getItem("allUsers"))
        const myUsers = users.find((e)=> e.email === email && e.password === password )
        // console.log("userdata",myUsers)
        if(myUsers){
            localStorage.setItem("loggedInUser", JSON.stringify(myUsers))
           
            navigate("/home") 
        }else{
            alert("you dont have an account with us: Pls signUp")
        }
    }

    const handleLog=()=>{
        navigate("/signup")
    }
    return(
        <div className='login-wrapper'>
            <div className='bck-img'>
                {/* <img src="https://media.istockphoto.com/id/168533401/photo/country-church.webp?b=1&s=170667a&w=0&k=20&c=hs5LJZ0z1N7S5LnNHMD4l6WBHjX3i7Tqy_CAbXST2VI=" alt="" /> */}
            </div>
            <div className='login-body'>
                <div className='loginh1'><h1>Login</h1></div>
                <div className='email'>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
                </div>
                <div className='email'>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div className='loginbutt'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='pass'>
                    
                    <p>Forgot password?</p>
                </div>
                <div className='pastor' onClick={handleLog}><h4>Don't have an account? <span>SignUp</span></h4></div>
            </div>
        </div>
    )
}

export default Login
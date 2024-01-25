import { useNavigate } from "react-router-dom"
import "./Homepage.css"
const Homepage = () => {
    const navigate=useNavigate()

    const user = JSON.parse(localStorage.getItem("loggedInUser"))

    

    const handleLogout=()=>{
        localStorage.removeItem("loggedInUser")
        navigate("/login")
    }
    const handlewallet =()=>{
        navigate("/wallet")
    }


    return (
        <div className="homepage">
            <div className="header">
                <div className="headwrap">
                    <div className="image">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className="leftl">
                        <div>Home</div>
                        <div onClick={handlewallet}>Wallet</div>
                        <div>Transaction History</div>
                        <div>Blog</div>
                        <div>About Us</div>
                        <div>Services</div>
                        <button className="lgbtn" onClick={handleLogout}>Log out</button>

                    </div>
                </div>
            </div>
            <div className="landmain">
                <div className="leftsid">
                    <div className="aliig">
                       <div>
                       <h1>Welcome {user.firstName}!!!</h1>
                      
                       </div>
                    <h1>THE CURVE <span>PAY</span></h1>
                    <h2>Faster and Secure <br />Money Transfer</h2>
                    </div>
                </div>
                <div className="Rimage">
                    <img src="https://www.bcu.com.au/content-publishers/blog/how-to-bank-safely-online.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Homepage
import "./Landingpage.css"
import { useNavigate } from "react-router-dom"
const Landingpage = () => {

    const Nav =useNavigate()

    const handlesignp =()=>{
        Nav("/signup")
    }
    return (
        <>
            <div className="LandBox">
                <div className="landwrapper">
                    <div className="leftside">
                        <div className="leftwrap">
                       
                       <h1>Welcome to <br /> CURVEPAY</h1>
                      
                       
                        
                      <h1>  Easy, Fast and Safe Digital Services</h1>
                      <button onClick={handlesignp} className="Sigbtn">SIGN UP</button>
                      </div>
                    </div>
                    <div className="fullRight">
                    <div className="Rights">
                        <img src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/01/20005646/Bank-PO-.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landingpage
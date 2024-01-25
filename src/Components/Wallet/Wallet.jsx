import { useNavigate } from "react-router-dom"
import "./Wallet.css"
const Wallet = () => {

    const users = JSON.parse(localStorage.getItem("allUsers"))
    const user = JSON.parse(localStorage.getItem("loggedInUser"))
    const updatedBalance = JSON.parse(localStorage.getItem("update"))
    const history = JSON.parse(localStorage.getItem("allAccountUsers"))
    // console.log(history.balance)



    const Nav = useNavigate()

    const hoomm = () => {
        Nav("/home")
    }

    const transfer = () => {
        Nav("/transfer")
    }
    const transact = () => {
        Nav("/transaction")
    }
    return (
        <div className="Walletbox">
            <div className="walletwarp">
                <div className="leftwall">
                    <div className="leftwallwrap">

                        <div className="diiv">
                            <div onClick={hoomm}>Home</div>
                            <div>Wallet</div>
                            <div onClick={transfer}>Transfer</div>
                            <div>Pay Service</div>
                            <div onClick={transact}>Transaction History</div>
                            <div>My CurvePay Card</div>
                        </div>
                    </div>

                </div>
                <div className="rightwal">
                    <div className="rightupp">
                        <div className="firstwall">
                            <div className="balwrap">
                                <h3>Your Balance</h3>
                                <h1>{user.balance}</h1>
                                Status: Active
                            </div>
                        </div>
                        <div className="firstwall">
                            <div className="balwrap">
                                <h3>Information</h3>
                                <div className="inwrap">
                                    <p>Location:</p>
                                    <p>Nigeria</p>

                                </div>
                                <div className="inwrap">
                                    <p>Address:</p>
                                    <p>Peru</p>

                                </div>
                                <div className="inwrap">
                                    <p>Wallet ID:</p>
                                    <p>{user.accountNumber}</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="imgtran">
                    <img src="https://www.knowyourpayments.com/wp-content/uploads/2016/05/transaction-basics-icon@2x-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Wallet
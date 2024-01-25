import "./Transactionhis.css"
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const TransactionHis = () => {

    const Nav = useNavigate()

    const backk =()=>[
        Nav("/home")
    ]
    // const allAvailableUsers = JSON.parse(localStorage.getItem("update"))
    const history =JSON.parse(localStorage.getItem("allAccountUsers"))
    console.log(history)
    return (
        <div className="tran">

            <div className="tranwrap">
                <div className="transhup">
                <IoMdArrowRoundBack onClick={backk } style={{fontSize: "25px", cursor: "pointer"}}/>

                    <div className="divh1"><h1>Transaction History</h1></div>
                </div>
                <div className="holder1">
                <div className="heading">
                    <h3>Account Name</h3>
                    <h3>Account Number</h3>
                    <h3>Amount</h3>
                    <h3>Date</h3>
                    <h3>Status</h3>
                </div>
                </div>
                <div className="holder">
               {
                history.map((e)=>(
                    <div className="heading1">
                    <h3>{e.firstName}</h3>
                    <h3>{e.accountNumber}</h3>
                    <h3>{e.balance}</h3>
                    <h3>18-01-2024</h3>
                    <h3>Successful</h3>
                </div>
                ))
               }
               </div>
            </div>
            {/* {history.map((e) => (
                <>
                    <p>{e.firstName}</p>
                    <p>{e.balance}</p>
                    <p>{e.accountNumber}</p>
                    <p></p>
                </>


            ))} */}
        </div>
    )
}
export default TransactionHis
import { Navigate, Outlet } from "react-router-dom"

const WalletRoute = ()=>{
    const AllData = JSON.parse(localStorage.getItem("loginData"))
    return(
        AllData.user || AllData.admin? <Outlet />: <Navigate to="/home" />
    )
}
export default WalletRoute
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landingpage from './Components/Landingpage/Landingpage'
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Homepage from './Components/Homepage/Homepage'
import WalletRoute from './Components/Private Route/WalletRoute'
import Wallet from './Components/Wallet/Wallet'
import Transferpage from './Components/Transfer/Transferpage'
import TransactionHis from './Components/TransactionHistory/Transactionhis'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Homepage/>
  },
  {
    path: "/wallet",
    element: <Wallet/>
  },
  {
    path: "/transfer",
    element: <Transferpage/>
  },
  {
    path: "/transaction",
    element: <TransactionHis/>
  },
  {
   path: "/",
   element: <WalletRoute/>,
   children:[
    {
      path: "/wallet",
      element: <Wallet/>
    },
   ]
  }
])

function App() {
  return (
    <>
     <RouterProvider router= {router}/>
    </>
  )
}

export default App

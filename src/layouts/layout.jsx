import { Outlet } from "react-router"
import Header from "../components/header"

const Layout = () => {
  return (
    <> 
        <Header />
        <Outlet/> 
    </>
  )
}

export default Layout
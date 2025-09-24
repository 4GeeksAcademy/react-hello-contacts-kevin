import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar";


 const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
        </ScrollToTop>
    )
}

export default Layout;
import { Route,Routes } from "react-router-dom"
import Contacts from "./pages/Contacts"
import AddContact from "./pages/AddContact"
import Layout from "./pages/Layout"

const AppRoutes = ()=>{
  return(
    <Routes>
     <Route element={<Layout />}>
        <Route path="/" element={<Contacts />}/>
        <Route path="/add" element={<AddContact />}/>
        <Route path="/edit/:id" element={<AddContact />}/> 
     </Route>
    </Routes>
  )
}

export default AppRoutes;
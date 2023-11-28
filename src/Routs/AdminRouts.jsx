import { useContext } from "react"
import useAdmin from "../Hooks/useAdmin"
import { AuthContext } from "../Provider/Provider"
import { Navigate, useLocation } from "react-router-dom"

const AdminRouts = ( {children} ) =>{
    const [isAdmin, adminLoading] = useAdmin()
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
}

export default AdminRouts
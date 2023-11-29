import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../Hooks/useAdmin"
import useAuth from "../Hooks/useAuth"

const AdminRouts = ( {children} ) =>{
    const [isAdmin, adminLoading] = useAdmin()
    const {user, loading} = useAuth()
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
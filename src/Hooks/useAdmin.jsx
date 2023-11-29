
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const secureAxios = useAxiosSecure()
    const { user , loading} = useAuth()


    const { data: isAdmin = false, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/user/admin/${user?.email}`)
                return res.data
                
            }
        }
    })
    return [isAdmin, adminLoading]



};

export default useAdmin;
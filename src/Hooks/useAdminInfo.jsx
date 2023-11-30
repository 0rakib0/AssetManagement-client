
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdminInfo = () => {
    const secureAxios = useAxiosSecure()
    const { user , loading} = useAuth()


    const { data: AdminInfo } = useQuery({
        queryKey: [user?.email, 'admin-info'],
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/admin-info/${user?.email}`)
                return res.data
                
            }
        }
    })
    return AdminInfo

    
    
};

export default useAdminInfo;
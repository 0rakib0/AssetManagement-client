
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserInfo = () => {
    const secureAxios = useAxiosSecure()
    const { user , loading} = useAuth()


    const { data: UserInfo } = useQuery({
        queryKey: [user?.email, 'admin-info'],
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/admin-info/${user?.email}`)
                return res.data
                
            }
        }
    })
    return UserInfo

    
    
};

export default useUserInfo;
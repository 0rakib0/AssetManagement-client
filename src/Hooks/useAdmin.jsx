import useAxious from "./AxiousSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAdmin = () => {
    const secureAxios = useAxious()
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
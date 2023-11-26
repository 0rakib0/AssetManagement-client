import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const MyTeam = () => {

    const { user } = useAuth()
    const secureAxios = useAxiosSecure()
    const [adminEmail, setAdminEmail] = useState()

    const { data: myTeam } = useQuery({
        queryKey: ['myTeam', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/my-team/${user.email}`)
            return res.data
        }
    })
    useEffect(() => {
        const admiNEmail = myTeam?.adminEmail
        console.log(admiNEmail)
        if (admiNEmail) {
            setAdminEmail(admiNEmail)
        }
    }, [myTeam])


    const { data: Employees} = useQuery({
        queryKey: ['employee', adminEmail],
        queryFn: async () => {
            const res = await secureAxios.get(`/team-employee/${adminEmail}`)
            return res.data
        }
    })

    console.log(Employees)


    return (
        <div className="mt-4">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-3/12 mx-auto uppercase pb-4">My Team</h2>
            <div className="md:mt-8 md:mx-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Member Type</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Employees?.map((emplyee,index )=> <tr key={emplyee._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={emplyee.employee.profile} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{emplyee.employee.full_name}</td>
                                    <td>Employee</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;
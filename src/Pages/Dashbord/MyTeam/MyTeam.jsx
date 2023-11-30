import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet-async";

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


    const date = new Date()
   const  date_formate = moment(date).format('MM')
   console.log(date_formate)

    const { data: Employees} = useQuery({
        queryKey: ['employee', adminEmail],
        queryFn: async () => {
            const res = await secureAxios.get(`/team-employee/${adminEmail}`)
            return res.data
        }
    })


    const EmployeDOB = Employees?.map(em => em.employee.dob)
    

    console.log(EmployeDOB)

    var dateObjects = EmployeDOB?.map(function(dateString) {
        // Split the date string into day, month, and year components
        var dateComponents = dateString.split('-');
    
        // Create a new Date object using the components
        // Note: Months in JavaScript are 0-indexed, so we subtract 1 from the month component
        // return new Date(dateComponents[2], dateComponents[1] - 1, dateComponents[0]);
        return dateComponents[1];
    });
    
    console.log(dateObjects)
  
    // console.log(moment(EmployeDOB).format('MM-DD-YYY'))
    // console.log()


    return (
        <div className="mt-4">
            <Helmet>
                <title>Dashbord | My Team</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
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
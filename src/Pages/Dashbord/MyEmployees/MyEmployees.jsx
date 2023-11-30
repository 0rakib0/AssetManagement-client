import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyEmployees = () => {

    const secureAxios = useAxiosSecure()
    const { user } = useAuth()

    const { data: Employees, refetch } = useQuery({
        queryKey: ['employee', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/team-employee/${user?.email}`)
            return res.data
        }
    })


    const handleDeleteTeam = (id, EmId) =>{
        axios.delete(`http://localhost:5000/remove-emplyees/${id}?employeId=${EmId}`)
        .then(res =>{
            console.log(res.data)
            refetch()
        })

        console.log(id, EmId)
    }   

    return (
        <div className='mt-4'>
            <Helmet>
                <title>Dashbord | My Employee</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">My Employee List</h2>

            <h3 className="text-center mt-6 text-2xl font-bold">Total Employee: {Employees?.length}</h3>

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
                                <th>Action</th>
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
                                    <th>
                                        <button onClick={() =>handleDeleteTeam(emplyee._id, emplyee.employee._id)} className="bg-thirdColor text-white p-2 rounded-lg">Remove From Team</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEmployees;
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const AddEmployee = () => {

    const secureAxios = useAxiosSecure()
    const { user } = useAuth()

    const { data: emplyee, refetch } = useQuery({
        queryKey: ['emplyee'],
        queryFn: async () => {
            const res = await secureAxios.get('/emplyees')
            return res.data
        }
    })

    const hanldeAddEmployee = (employee) => {
        const MyTeam = {
            employee,
            adminEmail: user?.email
        }

        axios.post('http://localhost:5000/add-employee', MyTeam)
            .then(res => {
                if (res.data.result.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Employee Successfully Added to Team",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })



    }


    return (
        <div className="mt-4">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">Add Employee</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Member Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                emplyee?.map(emplyee => <tr key={emplyee._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={emplyee.profile} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{emplyee.full_name}</td>
                                    <td>Employee</td>
                                    <th>
                                        <button onClick={() => hanldeAddEmployee(emplyee)} className="bg-thirdColor text-white p-2 rounded-lg">Add to the team</button>
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

export default AddEmployee;
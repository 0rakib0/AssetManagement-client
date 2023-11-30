import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllCustomRequest = () => {


    const secureAxios = useAxiosSecure()

    const { data: CusReq, refetch } = useQuery({
        queryKey: ['customrequest'],
        queryFn: async () => {
            const res = await secureAxios.get('/all-custom-request')
            return res.data
        }
    })

    const handleReject = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assetmanagement-xi.vercel.app/cansel-custom-requst/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });



    }


    const handleAprove = id => {
        axios.put(`https://assetmanagement-xi.vercel.app/update-custom-request/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Request Successfully Aproved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }

    return (
        <div className="mt-6">
            <Helmet>
                <title>Dashbord | All Custom request</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-5/12 mx-auto uppercase pb-4">All Custom Request</h2>
            <div className="overflow-x-auto mt-8  mx-4">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <td>Asset Name</td>
                            <td>Asset Type</td>
                            <td>Email of requester</td>
                            <td>Price</td>
                            <td>Additional note</td>
                            <td>Approve Button</td>
                            <td>Reject Button</td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            CusReq?.map((request, index) => <tr key={request._id}>
                                <th>{index + 1}</th>
                                <td>{request.assetName}</td>
                                <td>{request.assetype}</td>
                                <td>{request.userEmail}</td>
                                <td>${request.assetPrice}</td>
                                <td>{request.info}</td>
                                {request.isAprove ? <>
                                    <th><button disabled className="bg-green-300 rounded-md text-white p-1">Aproved</button></th>
                                    <th><button disabled className="bg-red-300 rounded-md text-white p-1 ">Reject</button></th>
                                </> :
                                    <>
                                        <th><button onClick={() => handleAprove(request._id)} className="bg-green-600 rounded-md text-white p-1">Aprove</button></th>
                                        <th><button onClick={() => handleReject(request._id)} className="bg-red-600 rounded-md text-white p-1 ">Reject</button></th>
                                    </>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomRequest;
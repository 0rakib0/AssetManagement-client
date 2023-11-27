import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";


const AllRequest = () => {


    const { user } = useAuth()

    const secureAxios = useAxiosSecure()

    const { data: allRequest } = useQuery({
        queryKey: ['allRequest', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/admin-request/${user?.email}`)
            return res.data
        }
    })

    return (
        <div className="mt-6">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">All Request</h2>

            <div className="overflow-x-auto mt-8  mx-4">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <td>Asset Name</td>
                            <td>Asset Type</td>
                            <td>Email of requester</td>
                            <td>Request Date</td>
                            <td>Additional note</td>
                            <td>Status</td>
                            <td>Approve Button</td>
                            <td>Reject Button</td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            allRequest?.map((request, index) =><tr key={request._id}>
                                <th>{index + 1}</th>
                                <td>{request.singleAsset.assetName}</td>
                                <td>{request.singleAsset.assetType}</td>
                                <td>{request.userEmail}</td>
                                <td>{moment(request.requetDate).format('DD-MM-YYY')}</td>
                                <td>{request.Notes}</td>
                                <td>Pending</td>
                                <th><button className="bg-green-600 rounded-md text-white p-1 ">Aprove</button></th>
                                <th><button className="bg-red-600 rounded-md text-white p-1 ">Reject</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllRequest;
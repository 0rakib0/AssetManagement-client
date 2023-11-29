import { useQuery } from "react-query"
import useAdmin from "../../../Hooks/useAdmin"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import moment from "moment";

const HomeDashbord = () => {
    const [isAdmin, adminLoading] = useAdmin()
    if (adminLoading) {
        return 'Loadin......'
    }

    const secureAxios = useAxiosSecure()
    // Admin Dashbord Section

    const { data: PendingRequest, isLoading } = useQuery({
        queryKey: 'reqquest',
        queryFn: async () => {
            const res = await secureAxios.get('/pending-request')
            return res.data
        }
    })


    const { data: TopRequest } = useQuery({
        queryKey: 'toprequest',
        queryFn: async () => {
            const res = await secureAxios.get('/top-requests')
            return (res.data)
        }
    })


    const {data: LimitStock} = useQuery({
        queryKey:'Limit-stock',
        queryFn: async () =>{
            const res = await secureAxios.get('/limit-stock')
            return (res.data)
        }
    })
    

    if (isLoading) {
        <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </>
    }



    // Employee Dashbord Section



    const isAdmin2 = isAdmin
    return (
        <div className="mt-12 pl-8">
            {isAdmin2 ?
                <div className="m-6">
                    {/* Pending Request */}
                    <div className="overflow-x-auto mt-8  mx-4">
                        <h1 className="text-xl text-primaryColor ml-4 mb-4">Pending Request</h1>
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <thead>
                                <tr className="text-center">
                                    <th>#</th>
                                    <td>Asset Name</td>
                                    <td>Asset Type</td>
                                    <td>Email of requester</td>
                                    <td>Request Date</td>
                                    <td>Status</td>
                                    <td>Approve Button</td>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    PendingRequest?.map((request, index) => <tr key={request._id}>
                                        <th>{index + 1}</th>
                                        <td>{request.singleAsset.assetName}</td>
                                        <td>{request.singleAsset.assetType}</td>
                                        <td>{request.userEmail}</td>
                                        <td>{moment(request.requetDate).format('DD-MM-YYY')}</td>
                                        <td>{request.Notes}</td>
                                        {request.isAprove ? <td className="bg-green-300 rounded-lg">Aproved</td> :
                                            <td className="bg-yellow-300 rounded-lg">Pending</td>
                                        }

                                        <th><button disabled className="bg-green-300 rounded-md text-white p-1">Aproved</button></th>


                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* Top Requested asset */}
                    <div className="overflow-x-auto mt-8  mx-4">
                        <h1 className="text-xl text-primaryColor ml-4 mb-4">Top Requested Asset</h1>
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <thead>
                                <tr className="text-center">
                                    <th>#</th>
                                    <td>Asset Name</td>
                                    <td>Asset Type</td>
                                    <td>Request Date</td>
                                    <td>Status</td>
                                    <td>Approve Button</td>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    TopRequest?.map((request, index) => <tr key={request?._id?._id}>
                                        <th>{index + 1}</th>
                                        <td>{request?._id?.assetName}</td>
                                        <td>{request?._id?.assetType}</td>
                                        <td>{moment(request.requetDate).format('DD-MM-YYY')}</td>

                                        {request.isAprove ? <td className="bg-green-300 rounded-lg">Aproved</td> :
                                            <td className="bg-yellow-300 rounded-lg">Pending</td>
                                        }
                                        {
                                            <th><button disabled className="bg-green-300 rounded-md text-white p-1">Aproved</button></th>

                                        }
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                :

                <div>
                    <h1>This is Employee Dashbord</h1>
                </div>}
        </div>
    )
}
export default HomeDashbord
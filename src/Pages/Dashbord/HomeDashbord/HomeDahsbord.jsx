import { useQuery } from "react-query"
import useAdmin from "../../../Hooks/useAdmin"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import { PieChart } from '@mui/x-charts/PieChart';

const HomeDashbord = () => {
    const [isAdmin, adminLoading] = useAdmin()
    if (adminLoading) {
        return 'Loadin......'
    }

    const { user } = useAuth()
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


    const { data: LimitStock } = useQuery({
        queryKey: ['Limit-stock', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/limit-stock/${user?.email}`)
            return (res.data)
        }
    })

    const { data: OutOfStock } = useQuery({
        queryKey: ['out-stock', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/out-stock/${user?.email}`)
            return (res.data)
        }
    })

    const { data: Percentage } = useQuery({
        queryKey: ['percentage', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/parcentage/${user?.email}`)
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
                    <div>
                        <div>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'series A' },
                                            { id: 2, value: 20, label: 'series C' },
                                        ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
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
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={request.singleAsset.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{request.singleAsset.assetName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{request.singleAsset.assetType}</td>
                                        <td>{request.userEmail}</td>
                                        <td>{moment(request.requetDate).format('DD-MM-YYY')}</td>
                                        {request.isAprove ? <td className="bg-green-300 rounded-lg">Aproved</td> :
                                            <td className="bg-yellow-300 rounded-lg">Pending</td>
                                        }

                                        <th><button disabled className="bg-green-300 rounded-md text-white p-1">Aproved</button></th>


                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr className="my-6" />
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
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={request?._id?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{request?._id?.assetName}</div>
                                                </div>
                                            </div>
                                        </td>
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
                    <hr className="my-6" />
                    {/* Limited Stock */}
                    <div className="overflow-x-auto">
                        <h1 className="text-xl text-primaryColor ml-4 mb-4">Limited Stock</h1>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Product Type</th>
                                    <th>Product Quantity</th>
                                    <th>Added Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    LimitStock?.map((asset, index) => <tr key={asset.id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={asset.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{asset.assetName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {asset.assetType}
                                        </td>
                                        <td>{asset.assetQuantity}</td>
                                        <td>{moment(asset.addedDate).format('DD-MM-YYY')}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr className="my-6" />
                    {/* Out Of Stock */}
                    <div className="overflow-x-auto">
                        <h1 className="text-xl text-primaryColor ml-4 mb-4">Out Of Stock</h1>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Product Type</th>
                                    <th>Product Quantity</th>
                                    <th>Added Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    OutOfStock?.map((asset, index) => <tr key={asset.id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={asset.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{asset.assetName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {asset.assetType}
                                        </td>
                                        <td>{asset.assetQuantity}</td>
                                        <td>{moment(asset.addedDate).format('DD-MM-YYY')}</td>
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
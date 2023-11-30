import { useQuery } from "react-query"
import useAdmin from "../../../Hooks/useAdmin"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useEffect, useState } from "react";
import useAdminInfo from "../../../Hooks/useAdminInfo";
import { useNavigate } from "react-router-dom";
import useUserInfo from "../../../Hooks/useUserInfo";
import { Helmet } from "react-helmet-async";

const HomeDashbord = () => {
    const [isAdmin, adminLoading] = useAdmin()
    const AdminInfo = useAdminInfo()
    const userInfo = useUserInfo()
    if (adminLoading) {
        return 'Loadin......'
    }

    const [returnabl, setReturnable] = useState()
    const [nonreturnabl, setNonReturnable] = useState()


    const { user } = useAuth()
    const secureAxios = useAxiosSecure()
    const isAdmin2 = isAdmin
    const navigate = useNavigate()
    // Admin Dashbord Section




    if (isAdmin2) {
        if (AdminInfo?.isPaid === false) {
            navigate('dashbord/payment')
        }
    }


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
        queryKey: 'percentage',
        queryFn: async () => {
            const res = await secureAxios.get(`/parcentage`)
            return (res.data)
        }
    })


    const returnable = Percentage?.request1?.length
    const nonreturnable = Percentage?.request2?.length

    const TotalCount = returnable + nonreturnable

    const returnablePercentage = ((returnable / TotalCount) * 100);
    const NonreturnablePercentage = (nonreturnable / TotalCount) * 100;



    useEffect(() => {
        if (returnablePercentage) {
            setReturnable(returnablePercentage)
            setNonReturnable(NonreturnablePercentage)


        }
    }, [returnablePercentage])


    console.log(returnabl)
    console.log(nonreturnabl)

    if (isLoading) {
        <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </>
    }



    const data = [
        { value: returnabl, label: 'A' },
        { value: nonreturnabl, label: 'B' },
    ];

    const size = {
        width: 400,
        height: 200,
    };


    // Employee Dashbord Section---------------------------------

    const { data: customrequest } = useQuery({
        queryKey: ['custom-req', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/custom-request/${user?.email}`)
            return res.data
        }
    })

    const { data: MyPendingRequest } = useQuery({
        queryKey: ['reqquest', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/my-pending-request/${user?.email}`)
            return res.data
        }
    })

    const { data: totalAsset } = useQuery({
        queryKey: ['reqquest', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/all-request-emp/${user?.email}`)
            return res.data
        }
    })



    return (
        <div className="mt-12 pl-8">
            <Helmet>
                <title>Dashbord | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            {isAdmin2 ?
                <div className="m-6">
                    <div className="grid md:grid-cols-4 gap-4 text-center text-white mb-4">
                        <div className="bg-thirdColor py-4 rounded-lg">
                            <p className="text-5xl font-bold">{PendingRequest?.length}</p>
                            <h4 className="text-xl font-semibold">Rending Request</h4>
                        </div>
                        <div className="bg-thirdColor py-4 rounded-lg">
                            <p className="text-5xl font-bold">{TopRequest?.length}</p>
                            <h4 className="text-xl font-semibold">Top Ruquested</h4>
                        </div>
                        <div className="bg-thirdColor py-4 rounded-lg">
                            <p className="text-5xl font-bold">{LimitStock?.length}</p>
                            <h4 className="text-xl font-semibold">Limited Stock</h4>
                        </div>
                        <div className="bg-thirdColor py-4 rounded-lg">
                            <p className="text-5xl font-bold">{OutOfStock?.length}</p>
                            <h4 className="text-xl font-semibold">Stock Out</h4>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <PieChart
                                series={[
                                    {
                                        arcLabel: (item) => `${item.label} (${item.value})`,
                                        arcLabelMinAngle: 45,
                                        data,
                                    },
                                ]}
                                sx={{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                        fill: 'white',
                                        fontWeight: 'bold',
                                    },
                                }}
                                {...size}
                            />
                            <div className="flex  justify-evenly mt-4">
                                <div className="bg-[#02b2af] p-2 text-white">Returnable</div>
                                <div className="bg-[#2E96FF] p-2 text-white">Non Returnable</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">

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
                                    TopRequest?.map((request, index) => <tr key={index}>
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
                                    LimitStock?.map((asset, index) => <tr key={asset._id}>
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
                                    OutOfStock?.map((asset, index) => <tr key={asset._id}>
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
                    {userInfo?.inTeam ? <div>
                        <div className="grid md:grid-cols-3 gap-4 text-center text-white mb-4">
                            <div className="bg-thirdColor py-4 rounded-lg">
                                <p className="text-5xl font-bold">{customrequest?.length}</p>
                                <h4 className="text-xl font-semibold">Custom Request</h4>
                            </div>
                            <div className="bg-thirdColor py-4 rounded-lg">
                                <p className="text-5xl font-bold">{MyPendingRequest?.length}</p>
                                <h4 className="text-xl font-semibold">My Pending Ruquested</h4>
                            </div>
                            <div className="bg-thirdColor py-4 rounded-lg">
                                <p className="text-5xl font-bold">{totalAsset?.length}</p>
                                <h4 className="text-xl font-semibold">Total Asset</h4>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-8  mx-4">
                            <h1 className="text-xl text-primaryColor ml-4 mb-4">Custom Request</h1>
                            <table className="table table-xs table-pin-rows table-pin-cols">
                                <thead>
                                    <tr className="text-center">
                                        <th>#</th>
                                        <td>Asset Name</td>
                                        <td>Asset Type</td>
                                        <td>Email of requester</td>
                                        <td>Price</td>
                                        <td>Additional note</td>
                                        <td>status</td>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        customrequest?.map((request, index) => <tr key={request._id}>
                                            <th>{index + 1}</th>
                                            <td>{request.assetName}</td>
                                            <td>{request.assetype}</td>
                                            <td>{request.userEmail}</td>
                                            <td>${request.assetPrice}</td>
                                            <td>{request.info}</td>
                                            {request.isAprove ? <>
                                                <th><button disabled className="bg-green-300 rounded-md text-white p-1">Aproved</button></th>

                                            </> :
                                                <>
                                                    <th><button className="bg-ged-600 rounded-md text-white p-1">Pending</button></th>

                                                </>
                                            }
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* My Pending Request */}
                        <div className="overflow-x-auto mt-8  mx-4">
                            <h1 className="text-xl text-primaryColor ml-4 mb-4">My Pending Request</h1>
                            <table className="table table-xs table-pin-rows table-pin-cols">
                                <thead>
                                    <tr className="text-center">
                                        <th>#</th>
                                        <td>Asset Name</td>
                                        <td>Asset Type</td>
                                        <td>Email of requester</td>
                                        <td>Request Date</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        MyPendingRequest?.map((request, index) => <tr key={request._id}>
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
                                            <td className="bg-yellow-300 rounded-lg">Pending</td>


                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> :
                        <h1 className="mt-12 text-center text-red-400 text-xl font-bold">You rae not in a team please contact with HR/Admin</h1>
                    }
                </div>}
        </div>
    )
}
export default HomeDashbord
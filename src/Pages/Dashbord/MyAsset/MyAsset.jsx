import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const MyAsset = () => {

    const { user } = useAuth()
    const secureAxios = useAxiosSecure()
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const { data: Asset, refetch } = useQuery({
        queryKey: ['asset', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/my-asset/${user?.email}?search=${search}&fiter=${type}`)
            return res.data
        }
    })

    useEffect(() => {
        // This effect will be called whenever 'search' changes
        refetch();
    }, [search, refetch]);

    const handleSerch = event => {
        event.preventDefault()
        const search = event.target.search.value
        setSearch(search)
    }

    useEffect(() => {
        refetch()
    }, [type, refetch])

    const handleTypeSelect = (event) => {
        console.log(event.target.value)
        setType(event.target.value)
    }


    const handleCancel = (id) => {

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
                axios.delete(`http://localhost:5000/cansel-requst/${id}`)
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

    const handleReturn = (id, id2) => {
        axios.put(`http://localhost:5000/update-request/${id}?assetId=${id2}`)
            .then(res => {
                if (res.data.result.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Susseccfully reaturn!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }


    return (
        <div className="mt-6">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-2/12 mx-auto uppercase pb-4">My Asset</h2>

            <div className='md:flex items-center justify-evenly'>
                <form onSubmit={handleSerch}>
                    <div className="join ml-6 my-4">
                        <input className="input input-bordered join-item" name='search' placeholder="Search" />
                        <button className="btn bg-primaryColor text-white hover:text-black join-item rounded-r-lg">Search</button>
                    </div>
                </form>
                {/* <button onClick={handleSeeAvailablAsset} className="bg-primaryColor p-2 text-white rounded-lg">See Only Available Product</button> */}
                <div>
                    <select onChange={handleTypeSelect} name="asetType" className='border-2 border-primaryColor rounded-lg px-8 py-2'>
                        <option value="" hidden>Filter Data</option>
                        <option value="">All</option>
                        <option value="pending">Pending</option>
                        <option value="aprove">Aprove</option>
                        <option value="returnable">Returnable</option>
                        <option value="nonreturnable">Non-Returnable</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Request Date</th>
                            <th>Approval Date</th>
                            <th>Request Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Asset?.map((asset, index) => <tr key={asset.id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={asset.singleAsset.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{asset.singleAsset.assetName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {asset.singleAsset.assetType}
                                </td>
                                <td>{moment(asset.requetDate).format('DD-MM-YYY')}</td>
                                <td>
                                    {asset.isAprove ? moment(asset.requetDate).format('DD-MM-YYY') :
                                        <button className="text-black bg-yellow-300 p-1 rounded-lg">Not Aprove</button>
                                    }
                                </td>
                                <td>
                                    {asset.isAprove ? <button className="bg-green-300 p-1 rounded-lg">Aproved</button> :
                                        <button className="text-black bg-yellow-300 p-1 rounded-lg">Not Aprove</button>
                                    }
                                </td>
                                <th>
                                    {asset.retured ? <button disabled className="bg-thirdColor p-2 text-white rounded-lg">Returned</button> : <>{asset.isAprove ? <button className="bg-primaryColor p-2 text-white rounded-lg" >Print Details</button> :
                                        <button onClick={() => handleCancel(asset._id)} className="bg-red-400 p-2 text-white rounded-lg" >Cansel</button>
                                    }
                                        {asset.isAprove && asset.singleAsset.assetType && <button onClick={() => handleReturn(asset._id, asset.singleAsset._id)} className="bg-primaryColor text-white ml-2 p-2 rounded-lg">Return</button>

                                        }</>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAsset;
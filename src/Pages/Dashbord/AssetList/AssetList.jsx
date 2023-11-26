import { useQuery } from 'react-query'
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import moment from "moment";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
const AssetList = () => {

    const axiosSecure = useAxiosSecure()

    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const { user } = useAuth()

    const { data: asset, refetch } = useQuery({
        queryKey: ['asset', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/asset-list/${user?.email}?search=${search}&type=${type}`)
            return res.data
        },
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

    useEffect(() =>{
        refetch()
    },[type, refetch])

    const handleTypeSelect = (event) =>{
        console.log(event.target.value)
        setType(event.target.value)
    }

    return (
        <div className="mt-4">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">My Asset List</h2>

            <div className='md:flex items-center justify-evenly'>
                <form onSubmit={handleSerch}>
                    <div className="join ml-6 my-4">
                        <input className="input input-bordered join-item" name='search' placeholder="Search" />
                        <button className="btn bg-primaryColor text-white hover:text-black join-item rounded-r-lg">Subscribe</button>
                    </div>
                </form>

                <div>
                    <select onChange={handleTypeSelect} name="asetType" className='border-2 border-primaryColor rounded-lg px-8 py-2'>
                        <option value="" hidden>Select Type</option>
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
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Quantity</th>
                            <th>Added Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            asset?.map((asset, index) => <tr key={asset.id}>
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
                                <th>
                                    <button className="btn btn-ghost btn-xs text-2xl text-orange-400"><FaEdit></FaEdit></button>
                                    <button className="btn btn-ghost btn-xs text-2xl text-red-400"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetList;
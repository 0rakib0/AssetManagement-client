// import { useEffect, useState } from "react"
// import { useQuery } from "react-query"
// import useAxiosSecure from "../../../Hooks/useAxiosSecure"
// import useAuth from "../../../Hooks/useAuth"
// import moment from "moment"
// import axios from "axios"
// import Swal from "sweetalert2"
// import { Helmet } from "react-helmet-async"

// const RequestForAsset = () => {

//     const [assetId, setAsetId] = useState('')
//     console.log(assetId)

//     const axiosSecure = useAxiosSecure()

//     const [search, setSearch] = useState('')
//     const [type, setType] = useState('')

//     const { user } = useAuth()

//     const { data: asset, refetch } = useQuery({
//         queryKey: ['asset'],
//         queryFn: async () => {
//             // const res = await axiosSecure(`/asset-list/${user?.email}?search=${search}&type=${type}`)
//             const res = await axiosSecure(`/all-asset?search=${search}&type=${type}`)
//             return res.data
//         },
//     })

//     useEffect(() => {
//         // This effect will be called whenever 'search' changes
//         refetch();
//     }, [search, refetch]);

//     const handleSerch = event => {
//         event.preventDefault()
//         const search = event.target.search.value
//         setSearch(search)
//     }

//     useEffect(() => {
//         refetch()
//     }, [type, refetch])

//     const handleTypeSelect = (event) => {
//         console.log(event.target.value)
//         setType(event.target.value)
//     }


//     const OpenModal = (id) => {
//         setAsetId(id)
//         document.getElementById('my_modal_3').showModal();
//     }

//     const singleAsset = asset?.find(item => item._id == assetId)


//     const handleRequest = (event) => {
//         event.preventDefault()
//         const Notes = event.target.additionalNots.value
//         const SendRequest = {
//             singleAsset,
//             userEmail: user?.email,
//             Notes,
//             isAprove: false,
//             requetDate: new Date()
//         }
//         axios.post('https://assetmanagement-xi.vercel.app/send-request', SendRequest)
//             .then(res => {
//                 if (res.data.result.insertedId) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Request successfully send to admin!",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//                 refetch()
//             })
//     }


//     return (
//         <div className="mt-4">
//             <Helmet>
//                 <title>Dashbord | Requst for asset</title>
//                 <link rel="canonical" href="https://www.tacobell.com/" />
//             </Helmet>
//             <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">Request For Asset</h2>

//             <div className='md:flex items-center justify-evenly'>
//                 <form onSubmit={handleSerch}>
//                     <div className="join ml-6 my-4">
//                         <input className="input input-bordered join-item" name='search' placeholder="Search" />
//                         <button className="btn bg-primaryColor text-white hover:text-black join-item rounded-r-lg">Subscribe</button>
//                     </div>
//                 </form>
//                 {/* <button onClick={handleSeeAvailablAsset} className="bg-primaryColor p-2 text-white rounded-lg">See Only Available Product</button> */}
//                 <div>
//                     <select onChange={handleTypeSelect} name="asetType" className='border-2 border-primaryColor rounded-lg px-8 py-2'>
//                         <option value="" hidden>Filter Data</option>
//                         <option value="">All</option>
//                         <option value="availableStock">Available Stock</option>
//                         <option value="returnable">Returnable</option>
//                         <option value="nonreturnable">Non-Returnable</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Product Name</th>
//                             <th>Product Type</th>
//                             <th>Product Quantity</th>
//                             <th>Added Date</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             asset?.map((asset, index) => <tr key={asset.id}>
//                                 <th>
//                                     {index + 1}
//                                 </th>
//                                 <td>
//                                     <div className="flex items-center gap-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img src={asset.image} alt="Avatar Tailwind CSS Component" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="font-bold">{asset.assetName}</div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {asset.assetType}
//                                 </td>
//                                 <td>{asset.assetQuantity}</td>
//                                 <td>{moment(asset.addedDate).format('DD-MM-YYY')}</td>
//                                 <th>
//                                     {asset.assetQuantity == 0 ? <button disabled className="bg-thirdColor p-2 text-white rounded-lg" title="This item out of stock">Request</button> :
//                                         <button className="bg-primaryColor p-2 text-white rounded-lg" onClick={() => OpenModal(asset._id)}>Request</button>

//                                     }
//                                 </th>
//                             </tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             {/* You can open the modal using document.getElementById('ID').showModal() method */}
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box flex gap-2">
//                     <div>
//                         <form method="dialog">
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                         </form>
//                         <img src={singleAsset?.image} className="w-24" alt="" />
//                         <h3 className="font-bold text-lg">Name: {singleAsset?.assetName}</h3>
//                         <p className="py-4">Type: {singleAsset?.assetType}</p>
//                     </div>
//                     <div className="mt-6 ml-8">
//                         <form onSubmit={handleRequest}>
//                             <textarea className="p-2 border border-primaryColor" placeholder="additional notes" name="additionalNots" id="" cols="30" rows="5"></textarea><br />
//                             <button className="bg-primaryColor p-2 text-white rounded-lg">Send Request</button>
//                         </form>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

// export default RequestForAsset
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Addasset = () => {

    const {user} = useAuth()

    console.log(user?.email)


    const handleSubmit = (event) =>{
        event.preventDefault()
    
        const form = event.target
        const assetName = form.name.value;
        const assetType = form.assetype.value;
        const assetQuantity = form.quatity.value
        const image = form.image.value

        const asset = {
            assetName, 
            assetType, 
            assetQuantity : parseInt(assetQuantity),
            image,
            email: user?.email,
            addedDate: new Date()
        }

        axios.post('http://localhost:5000/add-asset', asset)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Asset Sucessfully Added!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })


        console.log(assetName, assetType, assetQuantity)

        console.log(form)
    }

    return (
        <div className="mt-4">
            <Helmet>
                <title>Dashbord | Add Asset</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-4/12 mx-auto uppercase pb-4">Add New Asset</h2>
            <div className="mx-auto m-6 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card shrink-0 w-11/12">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <h1 className="text-center text-2xl font-bold uppercase">Add New Asset </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asset Name</span>
                                </label>
                                <input type="text" placeholder="Asset Name" name="name" className="input input-bordered border-thirdColor" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asset Type</span>
                                </label>
                                <select className="input input-bordered" name="assetype" id="">
                                    <option value="returnable">Returnable</option>
                                    <option value="nonreturnable">Non-Returnable</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asset Quantity</span>
                                </label>
                                <input type="number" placeholder="Asset Quantity" name="quatity" className="input input-bordered border-thirdColor" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asset Image</span>
                                </label>
                                <input type="text" placeholder="Asset Image URL" name="image" className="input input-bordered border-thirdColor" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="border-2 border-thirdColor hover:text-white px-2 py-3 rounded-lg text-lg hover:bg-primaryColor duration-200">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addasset;
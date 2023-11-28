import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CustomRequest = () => {

    const { user } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const assetName = form.name.value
        const assetPrice = form.price.value
        const assetype = form.assetype.value
        const assetImage = form.image.value
        const whyNeed = form.need.value
        const info = form.info.value
        console.log(assetName, assetPrice, assetype, assetImage, whyNeed, info)

        const customRequest = {
            assetName,
            assetPrice,
            assetype,
            assetImage,
            whyNeed,
            info,
            userEmail: user?.email,
            requestDate: new (Date)
        }

        axios.post('http://localhost:5000/custom-Request', customRequest)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Request successfully send. pleae waite for responce!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })



    }

    return (
        <div className="mt-6">
            <h2 className="text-center text-4xl border-b-2 border-primaryColor w-6/12 mx-auto uppercase pb-4">Make a Custom Request</h2>

            <div className="mx-auto m-6 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card shrink-0 w-11/12">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <h1 className="text-center text-2xl font-bold uppercase">Custom Request For An Asset </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asset Name</span>
                                </label>
                                <input type="text" placeholder="Asset Name" name="name" className="input input-bordered border-thirdColor" required />


                                <label className="label">
                                    <span className="label-text">Asset Price</span>
                                </label>
                                <input type="number" placeholder="Asset Price" name="price" className="input input-bordered border-thirdColor" required />

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
                                    <span className="label-text">Asset Image</span>
                                </label>
                                <input type="text" placeholder="Asset ImageURL" name="image" className="input input-bordered border-thirdColor" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Why Need</span>
                                </label>
                                <input type="text" placeholder="Why You Need this asset" name="need" className="input input-bordered border-thirdColor" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Aditional Information</span>
                                </label>
                                <input type="text" placeholder="Aditional Info" name="info" className="input input-bordered border-thirdColor" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="border-2 border-thirdColor hover:text-white px-2 py-2 rounded-lg text-lg hover:bg-primaryColor duration-200">Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomRequest;
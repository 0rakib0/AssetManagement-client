

const CustomRequest = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        console.log(form)

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
                                    <span className="label-text">Asset Image</span>
                                </label>
                                <input type="number" placeholder="Asset Quantity" name="quatity" className="input input-bordered border-thirdColor" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Why Need</span>
                                </label>
                                <input type="text" placeholder="Asset Image URL" name="image" className="input input-bordered border-thirdColor" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Aditional Information</span>
                                </label>
                                <input type="text" placeholder="Asset Image URL" name="image" className="input input-bordered border-thirdColor" required />
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
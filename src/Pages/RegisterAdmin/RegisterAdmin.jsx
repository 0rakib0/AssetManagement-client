
const RegisterAdmin = () => {
    return (
        <div className="hero min-h-screen bg-SecondariColor w-11/12 mx-auto m-6 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center h-full lg:text-left w-6/12 rounded-lg">
                    <img src="https://previews.123rf.com/images/naum100/naum1001610/naum100161000080/64589806-man-working-on-laptop-computer-businessman-with-idea-and-gears-cartoon-vector-illustration.jpg" className="h-full w-full rounded-lg" alt="" />
                </div>
                <div className="card shrink-0 w-6/12">
                    <form className="card-body">
                        <h1 className="text-center text-2xl font-bold uppercase text-white">Register As Admin</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" name="fullName" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-white">Company Name</span>
                            </label>
                            <input type="text" placeholder="Company Name" name="companyName" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-white">Company Logo URL</span>
                            </label>
                            <input type="text" placeholder="Company Logo URL" name="companyLogo" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-white">Date Of Birth</span>
                            </label>
                            <input type="date" name="dob" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-white">Select a package</span>
                            </label>
                            <select className="input input-bordered" name="package" id="">
                                <option value="5">5 Members for $5</option>
                                <option value="8">10 Members for $8</option>
                                <option value="18">20 Members for $15</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="border-2 border-thirdColor text-white px-2 py-4 rounded-lg text-lg hover:bg-primaryColor duration-200">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterAdmin;


const RegisterEmp = () => {
    return (
        <div className="hero min-h-screen bg-SecondariColor w-11/12 mx-auto m-6 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center h-full lg:text-left w-6/12 rounded-lg">
                    <img src="https://previews.123rf.com/images/microbagrandioza/microbagrandioza1810/microbagrandioza181000022/114029529-businessman-office-worker-worker-at-workplace-at-morning-working-day-concept-vector-flat-cartoon.jpg" className="h-full w-full rounded-lg" alt="" />
                </div>
                <div className="card shrink-0 w-6/12">
                    <form className="card-body">
                        <h1 className="text-center text-2xl font-bold uppercase text-white">Register As Employee</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" name="fullName" className="input input-bordered border-thirdColor bg-primaryColor" required />
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered border-thirdColor bg-primaryColor" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-thirdColor bg-primaryColor" required />
                            <label className="label">
                                <span className="label-text text-white">Date Of Birth</span>
                            </label>
                            <input type="date" name="dob" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
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

export default RegisterEmp;
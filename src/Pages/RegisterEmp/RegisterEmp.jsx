import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const RegisterEmp = () => {

    const { Register } = useAuth()


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const full_name = form.fullName.value
        const profile = form.profilePic.value
        const email = form.email.value
        const password = form.password.value
        const dob = form.dob.value

        const EmpinInfo = {
            profile,
            full_name,
            email,
            dob,
            isAdmin: false,
            inTeam: false

        }


        // console.log(AdminInfo)

        Register(email, password)
            .then(result => {
                const user = result.user
                updateProfile(auth.currentUser, {
                    displayName: full_name,
                    photoURL: profile
                })
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account Successfully Register",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: `Error: ${error.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                console.log(user)
                axios.post('http://localhost:5000/adddAdmin', EmpinInfo)
                    .then(res => {
                        console.log(res.data)
                    })
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Error: ${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }


    return (
        <div className="hero min-h-screen bg-SecondariColor w-11/12 mx-auto m-6 rounded-lg">
            <Helmet>
                <title>Dashbord | Employee Register</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center h-full lg:text-left w-6/12 rounded-lg">
                    <img src="https://previews.123rf.com/images/microbagrandioza/microbagrandioza1810/microbagrandioza181000022/114029529-businessman-office-worker-worker-at-workplace-at-morning-working-day-concept-vector-flat-cartoon.jpg" className="h-full w-full rounded-lg" alt="" />
                </div>
                <div className="card shrink-0 w-6/12">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl font-bold uppercase text-white">Register As Employee</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" name="fullName" className="input input-bordered border-thirdColor bg-primaryColor  text-white" required />
                            <label className="label">
                                <span className="label-text text-white">Profile Pic</span>
                            </label>
                            <input type="text" placeholder="Profile pic url" name="profilePic" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
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
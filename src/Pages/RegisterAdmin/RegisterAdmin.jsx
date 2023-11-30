import { updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import auth from "../../firebase.config";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterAdmin = () => {

    const { Register, Logout } = useAuth()
    const naviget = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const full_name = form.fullName.value
        const companyName = form.companyName.value
        const comapnyLogo = form.companyLogo.value
        const email = form.email.value
        const password = form.password.value
        const dob = form.dob.value
        const memberpackage = form.package.value

        const AdminInfo = {
            full_name,
            companyName,
            email,
            memberpackage,
            dob,
            isAdmin: true,
            isPaid: false
        }
        console.log(AdminInfo)
        Register(email, password)
            .then(result => {
                const user = result.user
                updateProfile(auth.currentUser, {
                    displayName: full_name,
                    photoURL: comapnyLogo
                })
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Admin Successfully Register",
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
                axios.post('http://localhost:5000/adddAdmin', AdminInfo)
                .then(res => {
                    console.log(res.data)
                })

                Logout()
                naviget('/login')
                
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
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center h-full lg:text-left w-6/12 rounded-lg">
                    <img src="https://previews.123rf.com/images/naum100/naum1001610/naum100161000080/64589806-man-working-on-laptop-computer-businessman-with-idea-and-gears-cartoon-vector-illustration.jpg" className="h-full w-full rounded-lg" alt="" />
                </div>
                <div className="card shrink-0 md:w-6/12">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl font-bold uppercase text-white">Register As Admin</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" name="fullName" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
                            <label className="label">
                                <span className="label-text text-white">Company Name</span>
                            </label>
                            <input type="text" placeholder="Company Name" name="companyName" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
                            <label className="label">
                                <span className="label-text text-white">Company Logo URL</span>
                            </label>
                            <input type="text" placeholder="Company Logo URL" name="companyLogo" className="input input-bordered border-thirdColor bg-primaryColor text-white" required />
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
                            <label className="label">
                                <span className="label-text text-white">Select a package</span>
                            </label>
                            <select className="input input-bordered border-thirdColor bg-primaryColor text-white" name="package" id="">
                                <option value="5member">5 Members for $5</option>
                                <option value="10Member">10 Members for $8</option>
                                <option value="20Member">20 Members for $15</option>
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
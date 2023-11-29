import Swal from "sweetalert2"
import useAuth from "../../Hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { Login } = useAuth()

    const naviget = useNavigate()


    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        Login(email, password)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Successfully Login",
                showConfirmButton: false,
                timer: 1500
            });
            naviget('/dashbord')
        })
        .catch(error =>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }

    return (
        <div className="hero min-h-screen bg-SecondariColor w-11/12 mx-auto m-6 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center h-full lg:text-left w-6/12 rounded-lg">
                    <img src="https://previews.123rf.com/images/microbagrandioza/microbagrandioza1810/microbagrandioza181000022/114029529-businessman-office-worker-worker-at-workplace-at-morning-working-day-concept-vector-flat-cartoon.jpg" className="h-full w-full rounded-lg" alt="" />
                </div>
                <div className="card shrink-0 w-6/12">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl font-bold uppercase text-white">Please Login</h1>
                        <div className="form-control">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="border-2 border-thirdColor text-white px-2 py-4 rounded-lg text-lg hover:bg-primaryColor duration-200">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
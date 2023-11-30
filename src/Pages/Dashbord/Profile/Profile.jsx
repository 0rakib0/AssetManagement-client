import Swal from "sweetalert2"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import useUserInfo from "../../../Hooks/useUserInfo"

const Profile = () => {
    const userInfo = useUserInfo()
    const secureAxiouse = useAxiosSecure()


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const full_name = form.name.value
        const dob = form.dob.value
        const updateUser = {
            full_name,
            dob
        }

        secureAxiouse.put(`/update-user/${userInfo?.email}`, updateUser)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "ProfileSuccessfully Updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="mt-12 ml-12 w-3/4">
            <h1 className="text-center text-xl">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Full Name</span>
                    </div>
                    <input type="name" name="name" defaultValue={userInfo?.full_name} className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" name="email" defaultValue={userInfo?.email} readOnly className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Date of Birth</span>
                    </div>
                    <input type="date" name="dob" defaultValue={userInfo?.dob} className="input input-bordered w-full" />
                </label>

                <label className="form-control w-full mt-4">
                    <input type="submit" value='Update Profile' className="input input-bordered w-full bg-primaryColor text-white" />
                </label>

            </form>
        </div>
    )
}
export default Profile
import { Link } from "react-router-dom"

const Error =() =>{
    return (
        <div className="md:mt-12 md:ml-12">
            <img src="https://www.matebiz.com/wp-content/uploads/404-error-page1.jpg" alt="" />
            <Link to='/'><button className="bg-red-200 p-2 rounded-lg text-center mt-6">Back To Home</button></Link>
        </div>
    )
}

export default Error
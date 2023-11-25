
import { FaHandPointRight } from "react-icons/fa";
const Package = () => {

    const BasicFeture = [
        'Up to 5 Members',
        'Standard Asset Requests',
        'Overview of Team Activity',
        'Email Support'
    ]

    const StanderdFeture = [
        'Up to 10 Members',
        'Custom Asset Requests',
        'In-depth Analysis of Team Activity',
        'Faster Response Time',
        'Sneak Peeks and Beta Access'
    ]

    const Premium = [
        'Up to 20 Members',
        'Custom Asset Requests',
        'In-depth Analysis of Team Activity',
        'Personalized Assistance',
        'Connect with Other Enterprise Systems',
        'Sneak Peeks and Beta Access'
    ]

    return (
        <div>
            <h1 className="text-4xl uppercase my-12 text-center border-b-2 border-primaryColor mx-auto pb-4 w-[250px] text-primaryColor font-bold">Our Package</h1>
            <div className="grid md:grid-cols-3 space-y-2">
                <div className="bg-thirdColor ml-6 pt-8 pt-4 font-semibold flex flex-col text-white rounded-lg relative overflow-hidden">
                    <h4 className="text-4xl uppercase text-center z-10">Basic</h4>
                    <h3 className="text-4xl mt-4 text-center z-10">$5</h3>
                    <p className="text-center my-2 z-10">Per month</p>
                    <ul className="md:ml-6 md:mt-4 md:mt-12 pb-4 flex-grow">
                        {
                            BasicFeture.map((basic, index) => <li key={index} className="flex items-center gap-2 text-primaryColor mb-2 text-white"><FaHandPointRight className="text-primaryColor"></FaHandPointRight> {basic}</li>)
                        }
                    </ul>
                    <div className="p-2">
                        <button className="border-2 border-primaryColor p-2 w-full rounded-lg relative group duration-1000 overflow-hidden z-10 hover:text-white"><span className="z-10 relative">Get Package</span>
                            <div className="bg-primaryColor h-[40px] w-full absolute top-0 left-0 transition-transform transform translate-x-full group-hover:translate-x-0 z-0"></div>
                        </button>
                    </div>
                    <div className="bg-[#3D2A16] w-full absolute h-[320px] -mt-44 rounded-full">
                        
                    </div>
                </div>

                <div className="bg-thirdColor ml-6 pt-8 pt-4 font-semibold flex flex-col text-white rounded-lg relative overflow-hidden">
                    <h4 className="text-4xl uppercase text-center z-10">Standard</h4>
                    <h3 className="text-4xl mt-4 text-center z-10">$8</h3>
                    <p className="text-center my-2 z-10">Per month</p>
                    <ul className="md:ml-6 md:mt-4 md:mt-12 pb-4 flex-grow">
                        {
                            StanderdFeture.map((basic, index) => <li key={index} className="flex items-center gap-2 text-primaryColor mb-2 text-white"><FaHandPointRight className="text-primaryColor"></FaHandPointRight> {basic}</li>)
                        }
                    </ul>
                    <div className="p-2">
                        <button className="border-2 border-primaryColor p-2 w-full rounded-lg relative group duration-1000 overflow-hidden z-10 hover:text-white"><span className="z-10 relative">Get Package</span>
                            <div className="bg-primaryColor h-[40px] w-full absolute top-0 left-0 transition-transform transform translate-x-full group-hover:translate-x-0 z-0"></div>
                        </button>
                    </div>
                    <div className="bg-[#153C2A] w-full absolute h-[320px] -mt-44 rounded-full">
                        
                    </div>
                </div>

                <div className="bg-thirdColor ml-6 pt-8 pt-4 font-semibold flex flex-col text-white rounded-lg relative overflow-hidden">
                    <h4 className="text-4xl uppercase text-center z-10">Premium</h4>
                    <h3 className="text-4xl mt-4 text-center z-10">$15</h3>
                    <p className="text-center my-2 z-10">Per month</p>
                    <ul className="md:ml-6 md:mt-4 md:mt-12 pb-4 flex-grow">
                        {
                            Premium.map((basic, index) => <li key={index} className="flex items-center gap-2 text-primaryColor mb-2 text-white"><FaHandPointRight className="text-primaryColor"></FaHandPointRight> {basic}</li>)
                        }
                    </ul>
                    <div className="p-2">
                        <button className="border-2 border-primaryColor p-2 w-full rounded-lg relative group duration-1000 overflow-hidden z-10 hover:text-white"><span className="z-10 relative">Get Package</span>
                            <div className="bg-primaryColor h-[40px] w-full absolute top-0 left-0 transition-transform transform translate-x-full group-hover:translate-x-0 z-0"></div>
                        </button>
                    </div>
                    <div className="bg-[#2a1536] w-full absolute h-[320px] -mt-44 rounded-full">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
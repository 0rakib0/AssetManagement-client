import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom";

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div>
            <div ref={sliderRef} className="keen-slider mt-12">
                <div className="keen-slider__slide number-slide1 relative">
                    <img src="https://i.ibb.co/0qSzsdV/our-team-jpg.png" className="w-full md:h-[30rem]" alt="" />
                    <div className="absolute top-4 md:top-[30%] left-12 md:w-[400px] z-20">
                        <h2 className="text-4xl font-bold text-white">Unlock Admin Power!</h2>
                        <p className="text-white my-2 md:my-4">Lead, grow, and manage. Join as HR/Admin today and shape success together!</p>
                        <Link to='admin-register'><button className="border-2 border-SecondariColor text-white px-2 py-4 rounded-lg text-lg hover:bg-primaryColor duration-200">Join as HR/Admin</button></Link>
                    </div>
                    <div className="h-96 w-full bg-gradient-to-t from-primaryColor absolute bottom-0 left-0">

                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 relative">
                    <img src="https://i.ibb.co/NCqdMn1/61cf07f97d74a711698f4397-Asset-Tracking-Techniques-jpeg.png" className="w-full md:h-[30rem]" alt="" />
                    <div className="absolute top-4 md:top-[30%] left-12 w-[400px] z-20">
                        <h2 className="text-4xl font-bold text-white">Fuel Your Career!</h2>
                        <p className="text-white my-4">Collaborate, thrive, succeed. Join as Employee now and be part of our dynamic team!</p>
                        <Link to='employee-register'>
                            <button className="border-2 border-SecondariColor text-white px-2 py-4 rounded-lg text-lg hover:bg-primaryColor duration-200">Join as HR/Admin</button></Link>
                    </div>
                    <div className="h-96 w-full bg-gradient-to-t from-primaryColor absolute bottom-0 left-0">

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;
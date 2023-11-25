
const AboutUs = () => {
    return (
        <div>
            <h1 className="text-4xl uppercase my-12 text-center border-b-2 border-primaryColor mx-auto pb-4 w-[200px] font-bold">About Us</h1>
            <div className="md:flex gap-12">
                <div className="w-6/12">
                    <img src="https://t4.ftcdn.net/jpg/02/33/02/17/360_F_233021773_y3xNl08YxoiDcmXIlKILXqmCm4oIpqMd.jpg" className="rounded-lg" alt="" />
                </div>
                <div className="w-6/12">
                    <h4 className="text-3xl uppercase mb-4 font-semibold">About Pluto</h4>
                    <p className="font-semibold mb-2">Empowering Success Through Efficient Asset Management</p>
                    <p className="leading-7">At Pluto, we believe in fostering organizational success through streamlined asset management. Our comprehensive system ensures that employees have the tools they need, and HR/Admins have the power to facilitate growth. With a focus on efficiency and collaboration, we empower teams to thrive. Join us in creating a workplace where assets are optimized, teams are engaged, and success is the standard. Your journey to enhanced productivity starts here.</p>
                    <p className="leading-7 mt-2">At Pluto, we believe in fostering organizational success through streamlined asset management. Our comprehensive system ensures that employees have the tools they need, and HR/Admins have the power to facilitate growth. With a focus on efficiency and collaboration, we empower teams to thrive.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
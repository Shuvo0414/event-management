import company from "../../assets/company.jpg";
import banner from "../../assets/aboutabnner.jpg";

const About = () => {
  return (
    <div>
      <img className=" w-full h-[50vh] object-fill" src={banner} alt="" />
      <div className="bg-white p-8 container mx-auto mt-5">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex-1 ">
            <h1 className="text-3xl font-semibold mb-4 ">About Our Company</h1>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              Welcome to our, your trusted partner in creating unforgettable
              wedding experiences.
            </p>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              At our, we specialize in crafting weddings that are nothing short
              of magical. Our dedicated team of experts is here to turn your
              dream wedding into a reality.
            </p>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              Our Services:
            </p>
            <ul className="list-disc list-inside text-[#6f6d72] text-base font-normal mb-6">
              <li>Venue Selection</li>
              <li>Decor and Theme Design</li>
              <li>Catering and Menu Planning</li>
              <li>Photography and Videography</li>
              <li>Entertainment and Music</li>
              <li>Wedding Planning and Coordination</li>
            </ul>
            <p className="text-[#6f6d72] text-base font-normal">
              Contact us today to begin planning your dream wedding!
            </p>
          </div>
          <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0 flex-1">
            <img
              src={company}
              alt="Our Company"
              className="w-[593px] rounded-lg shadow-lg ml-0 lg:ml-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

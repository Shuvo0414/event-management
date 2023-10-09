import company from "../../assets/company.jpg";
import banner from "../../assets/aboutabnner.jpg";
import ourvisonimg from "../../assets/ourvison.jpg";

const About = () => {
  return (
    <div>
      <img className=" w-full h-[40vh] object-fill" src={banner} alt="" />
      <div className="bg-white p-8 container mx-auto mt-5">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex-1 ">
            <h1 className="text-3xl font-bold mb-4 ">About Our Company</h1>
            <p className="text-[#6f6d72] text-base font-normal mb-1">
              Welcome to our, your trusted partner in creating unforgettable
              wedding experiences.
            </p>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              At our, we specialize in crafting weddings that are nothing short
              of magical. Our dedicated team of experts is here to turn your
              dream wedding into a reality.
            </p>
            <p className=" text-lg font-semibold mb-3">
              More About Our Company:
            </p>
            <p className="text-[#6f6d72] text-base font-normal mb-2">
              Our team consists of highly skilled and passionate professionals
              who have been creating unforgettable wedding experiences for over
              a decade. We take pride in our meticulous attention to detail and
              our commitment to providing personalized service tailored to your
              unique vision.
            </p>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              Whether you're planning an intimate gathering or a grand
              celebration, our team is dedicated to making every moment of your
              special day truly magical. From venue selection to decor design,
              catering to entertainment, we're here to ensure your wedding is a
              dream come true.
            </p>
          </div>
          <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0 flex-1">
            <img
              src={company}
              alt="Our Company"
              className="w-[593px] rounded-lg shadow-lg ml-0 lg:ml-36 "
            />
          </div>
        </div>
        {/*our goal  */}
        <div className="flex flex-col-reverse md:flex-row items-center mt-10 ">
          <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0 flex-1">
            <img
              src={ourvisonimg}
              alt="Our Company"
              className="w-[593px] rounded-lg shadow-lg "
            />
          </div>
          <div className="md:w-1/2 flex-1  lg:text-right  ">
            <h1 className="text-3xl font-bold mb-4 ">Our Goal</h1>
            <p className="text-[#6f6d72] text-base font-normal mb-6">
              At our company, our goal is to create unforgettable wedding
              experiences that exceed your expectations. With over a decade of
              expertise, our team of dedicated professionals specializes in
              crafting magical weddings.
            </p>

            <p className="  font-semibold mb-3 text-lg">Our Goal and Details</p>
            <p className="text-[#6f6d72] text-base font-normal">
              Highly skilled and passionate professionals Meticulous attention
              to detail Personalized service tailored to your unique vision
              Whether you're planning an intimate gathering or a grand
              celebration, we're committed to making every moment truly magical.
              Services include venue selection, decor design, catering,
              entertainment, and more.
            </p>
          </div>
        </div>
      </div>
      {/* team section */}
      <div
        className=" mt-4 text-white mx-auto    lg:flex lg:flex-row lg:justify-center lg:items-center   lg:w-full lg:h-[25vh]  lg:mx-auto  bg-[#c13338]  
        "
      >
        <div className="lg:mx-auto">
          <h1 className=" text-center font-bold text-3xl lg:text-6xl">1,557</h1>
          <p className="text-base lg:text-xl font-medium text-center mt-2">
            Event Mange
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className=" text-3xl text-center font-bold lg:text-6xl">234</h1>
          <p className="lg:text-xl text-base font-medium text-center mt-2">
            Expert Team
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className=" text-center text-3xl font-bold lg:text-6xl">16</h1>
          <p className="lg:text-xl text-base font-medium text-center mt-2">
            Satisfied Clients
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className=" text-center text-3xl font-bold lg:text-6xl">25</h1>
          <p className="lg:text-xl text-base font-medium text-center mt-2">
            Awards Winning
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

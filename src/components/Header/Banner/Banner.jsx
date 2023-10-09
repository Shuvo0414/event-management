import bannerBg from "../../../assets/ banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="hero h-[70vh]">
        <img className=" hero h-[70vh] object-cover" src={bannerBg} alt="" />
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div
            className=""
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="mb-5 text-5xl font-bold">
              Create Your Wedding Moments
            </h1>
            <p className="mt-5  text-lg">Find The Best Wedding Vendors</p>
            <input
              className=" mt-6 w-[230px] md:w-[370px] px-2 md:px-4 py-2 md:py-4  border border-[#DEDEDE] text-[#0B0B0B66]"
              type="text"
              placeholder="Search here...."
            />
            <button className=" py-2 px-3 md:py-4 md:px-7 bg-[#FF444A]  text-white ml-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

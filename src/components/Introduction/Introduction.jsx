import { FaBeer, FaClone, FaEye, FaSearch } from "react-icons/fa";

const Introduction = () => {
  return (
    <div>
      <div className=" mt-20">
        <h1 className=" text-center text-3xl font-semibold">How it Works</h1>
        <p className=" text-center text-base font-normal text-[#6f6d72] p-5 lg:px-44">
          Unlock your wedding date with Shaadiyari, your trusted companion at
          every stage of wedding planning. From selecting the perfect venue and
          finding your dream bridal attire to choosing the right photographer
          and planning your dream honeymoon, we bring it all to your fingertips.
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4  gap-4">
          <div className=" text-center">
            <FaSearch className=" mx-auto border text-5xl font-extrabold mb-4 text-[#FF444A] p-2 "></FaSearch>
            <h1 className=" text-2xl font-normal mb-4">Search Vendor</h1>
            <p className=" text-[#6f6d72] text-xs ">
              You can be anywhere in the world, but choosing the vendor at the
              place you want to be wedded at isn't an issue with our platform.
            </p>
          </div>
          <div className=" text-center ">
            <FaClone className=" mx-auto border text-5xl font-extrabold mb-4 text-[#FF444A] p-2 "></FaClone>
            <h1 className=" text-2xl font-normal mb-4">Compare</h1>
            <p className=" text-[#6f6d72] text-xs block ">
              Exploring your options is a breeze. No matter where you are in the
              world, selecting the perfect vendor for your dream wedding
            </p>
          </div>
          <div className=" text-center">
            <FaEye className=" mx-auto border text-5xl font-extrabold mb-4 text-[#FF444A] p-2 "></FaEye>
            <h1 className=" text-2xl font-normal mb-4">Visiting & Booking</h1>
            <p className=" text-[#6f6d72] text-xs ">
              Regardless of your location, our platform makes it effortless to
              choose and book the ideal vendor for your dream wedding
              destination.
            </p>
          </div>
          <div className=" text-center">
            <FaBeer className=" mx-auto border text-5xl font-extrabold mb-4 text-[#FF444A] p-2 "></FaBeer>
            <h1 className=" text-2xl font-normal mb-4">
              Celebrate Wedding Day
            </h1>
            <p className=" text-[#6f6d72] text-xs ">
              Your dream wedding is just a click away. Wherever you are, our
              platform ensures that finding the right vendor for your dream
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

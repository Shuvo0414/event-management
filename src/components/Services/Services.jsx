import ServiceCard from "./ServiceCard";
import PropTypes from "prop-types";

const Services = ({ services }) => {
  return (
    <div className=" mt-24">
      <h1 className=" text-center text-3xl font-semibold">
        Our Wedding Services
      </h1>
      <p className=" text-center text-base font-normal text-[#6f6d72] p-5 lg:px-44">
        Explore our range of expert wedding services designed to make your
        special day truly unforgettable. From venue selection to decor, <br />
        catering, and more, we're here to bring your wedding dreams to life
      </p>
      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;

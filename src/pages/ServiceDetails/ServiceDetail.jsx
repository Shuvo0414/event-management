import PropTypes from "prop-types";

const ServiceDetail = ({ details }) => {
  const { name, image, detailsDescription, additionalDetails, features } =
    details;

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="w-full h-auto rounded-lg" src={image} alt={name} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <p className="text-gray-600 mb-4">{detailsDescription}</p>

          <h2 className="text-xl font-semibold mb-2">Additional Details:</h2>
          <ul className="list-disc pl-6">
            {additionalDetails.map((detail, index) => (
              <li key={index} className="mb-2">
                {detail}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Feature:</h2>
          <ul className="list-disc pl-6 mb-2">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <button className="btn mt-1 bg-[#FF444A] text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

ServiceDetail.propTypes = {
  details: PropTypes.object,
};

export default ServiceDetail;

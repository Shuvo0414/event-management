import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <>
      <div className=" card  glass mx-auto mt-6 mb-6">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{name}</h2>
          <p className=" text-sm font-normal text-[#6f6d72]">{description}</p>
          <p>${price}</p>
          <div className=" ">
            <Link to={`/serviceDetails/${id}`}>
              <button className=" rounded-md py-2 px-8 bg-[#FF444A] text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;

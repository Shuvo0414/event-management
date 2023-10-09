import apponintment from "../../assets/apponintment1.jpg";

const MakeAnApponintment = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage: `url(${apponintment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="hero-overlay"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>

      <div className="  h-[40vh] bg-opacity-60"></div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="hero-content text-center text-neutral-content"
      >
        <div className="lg:w-[880px]">
          <h1 className="mb-5 text-2xl lg:text-4xl font-bold">
            My Wedding Make An Appointment
          </h1>
          <p className="mb-5 text-base">
            We are excited to be a part of your special day. Please make an
            appointment with us for your wedding planning needs. Provident
            cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi.
          </p>
          <button className="btn bg-[#FF444A] text-white text-xs lg:text-sm">
            Make An Apponintment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAnApponintment;

import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { LiaAddressCardSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row mt-10 mb-6 mx-auto gap-6 container">
        <div className="card  bg-base-100 shadow-md flex-1">
          <figure className="px-10 pt-10 text-3xl">
            <LiaAddressCardSolid></LiaAddressCardSolid>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Address</h2>
            <p>
              The Mevic Hospital 123, 2750 <br /> Quadra Street Victoria,
              Canada.
            </p>
          </div>
        </div>
        {/* phone call */}
        <div className="card  bg-base-100 shadow-md flex-1">
          <figure className="px-10 pt-10 text-3xl">
            <FiPhoneCall className=" "></FiPhoneCall>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Call Us</h2>
            <p>
              (+321) 895-980 008 <br /> +1-485-456-0102
            </p>
          </div>
        </div>
        {/* email */}
        <div className="card  bg-base-100 shadow-md flex-1">
          <figure className="px-10 pt-10 text-3xl">
            <AiOutlineMail></AiOutlineMail>
          </figure>
          <div className="card-body items-center text-center flex-1">
            <h2 className="card-title">Email Us</h2>
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>

      <div className=" min-h-screen gap-9 md:flex  lg:flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Send us a message!
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF444A]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF444A]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF444A]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF444A] text-white py-2 rounded-lg hover:bg-[#66292b] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" w-full sm:w-2/3 md:w-1/2 lg:w-1/3 lg:flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244770.33708152068!2d-74.11976356672305!3d40.697403395764306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1621538961388!5m2!1sen!2sus"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

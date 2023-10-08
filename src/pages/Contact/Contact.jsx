const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen gap-9 lg:flex items-center justify-center">
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
      <div className=" w-full sm:w-2/3 md:w-1/2 lg:w-1/3 hidden lg:flex">
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
  );
};

export default Contact;

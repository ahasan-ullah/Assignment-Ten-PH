const Contact= () => (
  <section id="contact" className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-text">Contact Us</h2>
      <p className="text-lg mb-4">We’re here to help! Reach out to us with your queries or feedback.</p>
      <form className="mt-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg p-3 w-full mb-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg p-3 w-full mb-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded-lg p-3 w-full mb-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button className="w-full bg-first text-white py-3 rounded-lg hover:bg-blue-500 transition">
          Submit
        </button>
      </form>
    </div>
  </section>
);
export default Contact;
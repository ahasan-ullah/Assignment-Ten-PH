const About = () => (
  <section id="about" className="py-12 bg-[#1A1A1A] text-white border-b">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-center text-lg mb-8">
        At Sports Shop, we are passionate about delivering top-notch sports gear to fuel your athletic ambitions. Explore our premium products tailored for sports enthusiasts and professionals alike.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Our Vision</h3>
          <p>
            To become a global leader in sports retail by consistently delivering value, innovation, and an unmatched shopping experience for our customers.
          </p>
        </div>
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Our Commitment</h3>
          <p>
            Dedicated to enhancing your performance and passion for sports, we prioritize quality, customer service, and sustainability.
          </p>
        </div>
        <div className="p-6 bg-white text-black  rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
          <p>
            We offer a curated selection of cutting-edge products, unbeatable prices, and an easy shopping experience tailored to your needs.
          </p>
        </div>
        <div className="p-6 bg-white text-black  rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Customer Reviews</h3>
          <p>
            "Sports Shop exceeded my expectations! High-quality gear and excellent customer support." - Happy Customer
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default About;
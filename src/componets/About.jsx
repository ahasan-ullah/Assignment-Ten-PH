import image1 from "../assets/vision.jpg";
import image2 from "../assets/why-choose-us.jpg";
const About = () => (
  <section id="about" className="py-12 text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-text mb-6">About Us</h2>
      <p className="text-center text-lg mb-8">
        At Sports Shop, we are passionate about delivering top-notch sports gear
        to fuel your athletic ambitions. Explore our premium products tailored
        for sports enthusiasts and professionals alike.
      </p>
      <div className="grid grid-cols-1 gap-8">
        <div className="p-6 bg-white text-black rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="font-bold text-xl mb-4">Our Vision</h3>
            <p>
              To become a global leader in sports retail by consistently
              delivering value, innovation, and an unmatched shopping experience
              for our customers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="p-6 bg-white text-black  rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 hidden md:flex">
            <img src={image2} alt="" />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
            <p>
              We offer a curated selection of cutting-edge products, unbeatable
              prices, and an easy shopping experience tailored to your needs.
            </p>
          </div>
          <div className="md:w-1/2 md:hidden flex">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;

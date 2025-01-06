import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="md:mt-16">
      <Carousel>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;

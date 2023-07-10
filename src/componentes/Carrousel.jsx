
import Carousel from "react-bootstrap/Carousel";
import Slider1 from '../../src/assets/img/img-slider1.png';
import Slider2 from '../../src/assets/img/img-slider2.webp';
import Slider3 from '../../src/assets/img/img-slider3.webp';
import Slider4 from '../../src/assets/img/img-slider4.webp';
import Slider5 from '../../src/assets/img/img-slider5.webp';
import Slider6 from '../../src/assets/img/img-slider6.webp';
import Slider7 from '../../src/assets/img/img-slider7.webp';

function Slider() {
  return (
    <Carousel className="mb-3 p-0">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Slider5 }
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Slider6}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Slider7}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );

}

export default Slider;

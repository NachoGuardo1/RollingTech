import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel className="mb-3 p-0">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcMa-r0jittJloG9atXJ2GdmfHkOxun3c37S314Bq2vNOpy_64HsW-3QUtwFxzGF-g0A&usqp=CAU"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcMa-r0jittJloG9atXJ2GdmfHkOxun3c37S314Bq2vNOpy_64HsW-3QUtwFxzGF-g0A&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcMa-r0jittJloG9atXJ2GdmfHkOxun3c37S314Bq2vNOpy_64HsW-3QUtwFxzGF-g0A&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

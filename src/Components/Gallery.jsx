import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media4.giphy.com/media/O7R0gvg184jVC/giphy.gif?cid=790b76112b8e8783bcc5f28b683492cfb56aa67a3e473d62&rid=giphy.gif&ct=g"
          alt="Pikachu" 
        />
        <Carousel.Caption className='my-3'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media1.giphy.com/media/siIQrQ0wIpJBaXu1EK/giphy.gif?cid=790b76112259b5b86e3bfed55440fac86b2a5340030db183&rid=giphy.gif&ct=g"
          alt="charizard" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media1.giphy.com/media/5AwAM6i20bSdq/giphy.gif?cid=790b7611d6c8fdf9151de834a47dcba40e63bab924f8cbe9&rid=giphy.gif&ct=g"
          alt="solarbeam" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;
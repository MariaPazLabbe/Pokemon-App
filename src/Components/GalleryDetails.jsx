import Carousel from 'react-bootstrap/Carousel';

function GalleryDetails() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media4.giphy.com/media/2HEAHnj8FOmL6/giphy.gif?cid=790b7611b48c09c0d39ddc86389e81605ee10d6e1c166f53&rid=giphy.gif&ct=g"
          alt="Pikachu" 
        />
        <Carousel.Caption className='my-3'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media0.giphy.com/media/mcJohbfGPATW8/giphy.gif?cid=790b7611d760642e40c75a0beea4f04ec8ba255363ea48c1&rid=giphy.gif&ct=g"
          alt="charizard" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media0.giphy.com/media/8UGGp7rQvfhe63HrFq/giphy.gif?cid=790b761117755b1b41a99ea8a58fdd05afeed480a156259c&rid=giphy.gif&ct=g"
          alt="solarbeam" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GalleryDetails;
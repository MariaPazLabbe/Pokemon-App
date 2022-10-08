import Carousel from 'react-bootstrap/Carousel';

function GallerySearch() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media4.giphy.com/media/WRMUcksbxdWziK0T08/giphy.gif?cid=790b7611bd664fc87e64c2054fa16e42b5e5ffe9cd759901&rid=giphy.gif&ct=g"
          alt="Pikachu" 
        />
        <Carousel.Caption className='my-3'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media1.giphy.com/media/ePVaotrqY3uwtXvYF7/giphy.gif?cid=790b7611fb8b33e846302311ccfe300fdf206ea175af232b&rid=giphy.gif&ct=g"
          alt="charizard" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media4.giphy.com/media/AJLfIg9vphXVFfu29h/giphy.gif?cid=790b76110fc0ecbaaf4017863133793c6adae1325c4afe46&rid=giphy.gif&ct=g"
          alt="solarbeam" 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GallerySearch;
import { h, Fragment } from 'preact';
import Carousel from './Carousel';

const translations = {
  en: {
    title: 'Our Love Story',
    details: (
      <>
        This story took place awhile back in the middle of a very cold winter. The streets were
        completely covered in white snow flakes, you could not see lot of colours at all.
      </>
    ),
  },
  vn: {
    title: 'Chuyện tình của chúng tôi',
    details: (
      <>
        Câu chuyện này diễn ra một lúc giữa mùa đông rất lạnh. Các đường phố được bao phủ hoàn toàn
        trong những bông tuyết trắng, bạn không thể thấy nhiều màu sắc.
      </>
    ),
  },
};

const images = [
  {
    name: 'london.jpg',
    alt: 'London Tower Bridge',
  },
  {
    name: 'cake.jpg',
    alt: 'Eating birthday cake',
  },
  {
    name: 'egypt.jpg',
    alt: 'Our visit to Egypt',
  },
  {
    name: 'hiking.jpg',
    alt: 'Hiking together',
  },
  {
    name: 'nightmarket.jpg',
    alt: 'Visiting the Night Market in Vancouver',
  },
  {
    name: 'owl.jpg',
    alt: "Enjoying a 'Hootie Hoo' together",
  },
  {
    name: 'stpattys.jpg',
    alt: "St. Patrick's Day celebrations",
  },
  {
    name: 'sunglasses.jpg',
    alt: 'Just having fun',
  },
];

const About = ({ lang = 'en' }) => (
  <div className="content columns">
    <div className="column">
      <Carousel className="carousel-about" intervalMs={6000}>
        {images.map(img => (
          <img
            key={img.name}
            className="carousel-img"
            src={`https://mikeandsophie.s3.us-west-1.amazonaws.com/${img.name}`}
            alt={img.alt}
          />
        ))}
      </Carousel>
      <h1 className="tac">{translations[lang || 'en'].title}</h1>
      {translations[lang || 'en'].details}
    </div>
  </div>
);

export default About;

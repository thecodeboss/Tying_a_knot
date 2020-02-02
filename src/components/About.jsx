import { h, Fragment } from 'preact';
import Carousel from './Carousel';

const translations = {
  en: {
    title: 'Our Love Story',
    details: (
      <>
        This story took place awhile back in the middle of a very cold winter. The streets were
        completely covered in white snowflakes, and two travellers were braving the cold to return
        to school after the holidays. A boy in shorts, wielding a Starbucks coffee and his luggage,
        crossed a road to his bus stop, with his future love following right behind him. The other
        traveller, a girl appropriately dressed in a thick winter coat, approached the boy wondering
        why he was in shorts. Had he just returned from a tropical vacation?
        <br />
        <br />
        The boy of course was Michael, and the girl Sophie. Little did they know their chance
        meeting at the bus stop that day was the start of a seven year journey to this day, when
        their love would culminate in a beautiful marriage.
        <br />
        <br />
        For years they both travelled many miles, living in Toronto, Vancouver, Seattle, San
        Francisco, and even Melbourne, Australia. They visited Hawaii, Las Vegas, Japan, and most
        recently the mediterranean.
        <br />
        <br />
        Now they've made Oakland, California their new home, where they soak up the sunlight and
        relax in their solar-powered dream house.
        <br />
        <br />
        From Sophie and Michael, we hope you'll come to the wedding to enjoy our special day and
        relive the story of our love, helping us to preserve it in history forever.
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

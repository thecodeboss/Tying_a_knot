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

const About = ({ lang = 'en' }) => (
  <div className="content columns">
    <div className="column">
      <Carousel className="carousel-about" intervalMs={6000}>
        <img
          className="carousel-img"
          src="https://picsum.photos/1024/480/?image=52"
          alt="Stock image 1"
        />
        <img
          className="carousel-img"
          src="https://picsum.photos/1024/480/?image=54"
          alt="Stock image 2"
        />
        <img
          className="carousel-img"
          src="https://picsum.photos/1024/480/?image=58"
          alt="Stock image 3"
        />
      </Carousel>
      <h1 className="tac">{translations[lang || 'en'].title}</h1>
      {translations[lang || 'en'].details}
    </div>
  </div>
);

export default About;

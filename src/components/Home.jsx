import { h, Fragment } from 'preact';

const translations = {
  en: {
    date: 'July 10th 2020 @ 5:00 pm',
    info: 'Info',
    infoDetails: (
      <>
        We are going to have our wedding ceremony by the ocean next to a nice venue called HK East
        Ocean Seafood Restaurant in Emeryville California which is 8 miles from San Francisco. The
        address is <b>3199 Powell St, Emeryville, CA 94608, US</b>. Delicious food and alcohol such
        as lobster, wine and pink gin will be served, and beer is on tap.
      </>
    ),
    preparation: 'Preparation',
    preparationDetails: (
      <>
        <b>Dress code</b>: cocktail attire but light. <br />
        <b>Venue</b>: Please procceed to the park next to the venue first for the ceremony and be
        back at 7:00 pm for the reception.
        <br />
        <b>Accomodation</b>: Airbnb or hotel.
      </>
    ),
  },
  vn: {
    date: 'Ngày 10 tháng 7 năm 2020 @ 5:00 chiều',
    info: 'Thông tin',
    infoDetails: (
      <>
        Chúng ta sẽ có lễ cưới của chúng tôi bởi các đại dương bên cạnh một địa điểm đẹp gọi Seafood
        Restaurant Dương HK Đông ở Emeryville California là 8 dặm từ San Francisco. Địa chỉ là{' '}
        <b>3199 Powell St, Emeryville, CA 94608, Hoa Kỳ</b>. Thức ăn ngon và rượu như tôm hùm, rượu
        vang và rượu gin hồng sẽ được phục vụ, và bia là trên vòi.
      </>
    ),
    preparation: 'Sự chuẩn bị',
    preparationDetails: (
      <>
        <b>Trang phục</b>: trang phục cocktail nhưng nhẹ nhàng.
        <br />
        <b>Địa điểm</b>: Vui lòng đến công viên bên cạnh địa điểm đầu tiên cho buổi lễ và trở lại
        lúc 7:00 tối để tiếp nhận.
        <br />
        <b>Chỗ ở</b>: Airbnb hoặc hotel.
      </>
    ),
  },
};

const Home = ({ lang }) => (
  <div className="content columns">
    <div className="mr">
      <h2>MICHAEL & SOPHIE</h2>
      <h2>{translations[lang || 'en'].date}</h2>
      <h2>Emeryville</h2>
      <h2 className="subtitle">
        <u>{translations[lang || 'en'].info}</u>
      </h2>
      {translations[lang || 'en'].infoDetails}
      <h2 className="subtitle">
        <u>{translations[lang || 'en'].preparation}</u>
      </h2>
      {translations[lang || 'en'].preparationDetails}
    </div>
    <div className="portrait">
      <img
        src="https://mikeandsophie.s3.us-west-1.amazonaws.com/wedding.jpg"
        alt="All dressed up"
      />
    </div>
  </div>
);

export default Home;

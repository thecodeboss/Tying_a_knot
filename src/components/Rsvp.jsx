import { h, Fragment } from 'preact';

const translations = {
  en: {
    title: 'Contact us to RSVP',
    details: (
      <>
        We'd love to have you at our wedding! Just send us a message through any means you like to
        let us know you're coming.
      </>
    ),
  },
  vn: {
    title: 'Liên lạc với chúng tôi để RSVP',
    details: (
      <>
        Chúng tôi muốn có bạn trong đám cưới của chúng tôi! Chỉ cần gửi cho chúng tôi một tin nhắn
        thông qua bất kỳ phương tiện nào bạn muốn cho chúng tôi biết bạn sẽ đến.
      </>
    ),
  },
};

const Rsvp = ({ lang = 'en' }) => (
  <div className="content columns">
    <div className="column">
      <h1 className="tac">{translations[lang || 'en'].title}</h1>
      {translations[lang || 'en'].details}
    </div>
  </div>
);

export default Rsvp;

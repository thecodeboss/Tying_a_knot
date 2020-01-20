import { h, Fragment } from 'preact';

const translations = {
  en: {
    title: 'Gift Registry',
    details: <>We will be setting up a gift registry in the near future, so check back soon!</>,
  },
  vn: {
    title: 'Sổ đăng ký quà tặng',
    details: (
      <>
        Chúng tôi sẽ thiết lập sổ đăng ký quà tặng trong tương lai gần, vì vậy hãy kiểm tra lại sớm!
      </>
    ),
  },
};

const Registry = ({ lang }) => (
  <div className="content columns">
    <div className="column">
      <h1 className="tac">{translations[lang].title}</h1>
      {translations[lang].details}
    </div>
  </div>
);

export default Registry;

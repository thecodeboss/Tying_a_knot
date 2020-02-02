import { h, Fragment } from 'preact';

const translations = {
  en: {
    title: 'Gift Registry',
    details: (
      <>
        <p>
          If you would like to purchase gifts for our special day, we have set up a Gift Registry
          with lots of things that we would love. We recently moved into our new home together, and
          so many of the things on the registry are from Home Depot, IKEA, Walmart and Amazon. Of
          course, these are recommendations only, as we will cherish any and all gifts we are given.
        </p>
        <p>Click the button below to visit our registry on myregistry.com.</p>
        <a
          className="button registry"
          target="_blank"
          href="https://www.myregistry.com/wedding-registry/sophie-ngo-and-michael-oliver-oakland-ca/2268729"
        >
          Go to the registry
        </a>
      </>
    ),
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

const Registry = ({ lang = 'en' }) => (
  <div className="content columns">
    <div className="column">
      <h1 className="tac">{translations[lang || 'en'].title}</h1>
      {translations[lang || 'en'].details}
    </div>
  </div>
);

export default Registry;

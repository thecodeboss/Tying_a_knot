import { h, Fragment } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import { createHashHistory } from 'history';

import About from './About';
import Home from './Home';
import Registry from './Registry';
import Rsvp from './Rsvp';

const App = () => {
  return (
    <>
      <div className="title">Tying The Knot</div>
      <nav className="navi">
        <div className="vertical-links">
          <Link activeClassName="active" href="/">
            Home
          </Link>
          <Link activeClassName="active" href="/vn">
            Chính
          </Link>
        </div>
        <div className="vertical-links">
          <Link activeClassName="active" href="/en/about">
            Love Story
          </Link>
          <Link activeClassName="active" href="/vn/about">
            Chuyện
          </Link>
        </div>
        <div className="vertical-links">
          <Link activeClassName="active" href="/en/rsvp">
            RSVP
          </Link>
          <Link activeClassName="active" href="/vn/rsvp">
            Trả-Lời
          </Link>
        </div>
        <div className="vertical-links">
          <Link activeClassName="active" href="/en/registry">
            Registry
          </Link>
          <Link activeClassName="active" href="/vn/registry">
            Tình-Nguyện
          </Link>
        </div>
      </nav>
      <Router history={createHashHistory()}>
        <Home path="/:lang?" />
        <About path="/:lang/about" />
        <Rsvp path="/:lang/rsvp" />
        <Registry path="/:lang/registry" />
      </Router>
      <footer className="page-footer">
        © 2020 Copyright:
        <Link href="/"> Michael and Sophie</Link>
      </footer>
    </>
  );
};

export default App;

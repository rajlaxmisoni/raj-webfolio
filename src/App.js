import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { styled } from '@mui/material/styles';
import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { Skills } from "./components";
import { Contacts } from "./components";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(
    "%c3D ANIMATION ARTIST PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/rajlaxmisoni/raj-webfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c'
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contacts" exact component={Contacts} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;

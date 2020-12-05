import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/esp";
import localeEnMessages from "./locales/eng";

let linkEsp = "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json";
let linkEng = "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json";

let link = window.navigator.language === "es-ES" ? linkEsp: linkEng

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={"en-US"} messages={window.navigator.language === "es-ES" ? localeEsMessages: localeEnMessages}>
    <App link={link}/>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

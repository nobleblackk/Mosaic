import React from "react";
import { render } from "react-dom";

import todo from "./todo";
import toread from "./toread";

import Card from "./Cards";

import Tabs from "./Tabs";

require("./styles.css");

function App() {
  // Rendering TODO List
  const todoRender = todo.map((TODO) => {
    return (
      <div onClick={() => console.log(TODO.id + " Completed")}>
        <Card title={TODO.title} content={TODO.content} time={TODO.time} />
      </div>
    );
  });

  // Rendering TOREAD List
  const toreadRender = toread.map((TOREAD) => {
    return <Card title1={TOREAD.title} imgLocation={TOREAD.imgLocation}></Card>;
  });
  return (
    <div style={{ background: "grey" }}>
      <h1 style={{ textAlign: "center" }}>ACTION ITEMS</h1>
      <Tabs>
        <div label="TODO">
          <div style={{ textAlign: "center" }}>{todoRender}</div>
        </div>

        <div label="TOREAD">
          <div style={{ textAlign: "center" }}>{toreadRender}</div>
        </div>
      </Tabs>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

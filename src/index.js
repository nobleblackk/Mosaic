import React from "react";
import { render } from "react-dom";

import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
// import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import "./styles1.css";

import todo from "./todo";
import toread from "./toread";

import Card from "./Cards";

import Tabs from "./Tabs";

require("./styles.css");

function App() {
  // Rendering TODO List
  const todoRender = todo.map((TODO) => {
    return (
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <SwipeableListItem
          swipeLeft={{
            content: <div>Completed</div>,
            action: () => console.info("swipe action triggered"),
          }}
          swipeRight={{
            content: <div>Completed</div>,
            action: () => console.info("swipe action triggered"),
          }}
          onSwipeProgress={(progress) =>
            console.info(`Swipe progress: ${progress}%`)
          }
        >
          <div
            className="swipe"
            onClick={() => console.log(TODO.id + " Completed")}
          >
            <Card title={TODO.title} content={TODO.content} time={TODO.time} />
          </div>
        </SwipeableListItem>
        <div style={{ height: "20px", color: "red" }}></div>
      </div>
    );
  });

  // Rendering TOREAD List
  const toreadRender = toread.map((TOREAD) => {
    return <Card title1={TOREAD.title} imgLocation={TOREAD.imgLocation}></Card>;
  });
  return (
    <div className="header">
      <h1 style={{ textAlign: "center", padding: "2%" }}>ACTION ITEMS</h1>
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

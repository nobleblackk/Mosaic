import React from "react";
import { render } from "react-dom";

import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "./swiper.css";

import todo from "./todo";
import toread from "./toread";

import Card from "./Cards";

import Tabs from "./Tabs";

require("./styles.css");

function App() {
  // Rendering TO-DO List
  const todoRender = todo.map((TODO) => {
    return (
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <SwipeableListItem
          swipeLeft={{
            content: (
              <div style={{ marginRight: "10%", fontFamily: "Tahoma" }}>
                COMPLETED
              </div>
            ),
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

  // Rendering TO-READ List
  const toreadRender = toread.map((TOREAD) => {
    return (
      <Card
        title1={TOREAD.title}
        imgLocation={TOREAD.imgLocation}
        id={TOREAD.id}
      ></Card>
    );
  });
  return (
    <div className="header">
      <h1
        style={{ textAlign: "center", padding: "2%", fontFamily: "Monsterate" }}
      >
        ACTION ITEMS
      </h1>
      <Tabs>
        <div label="TO DO">
          <div style={{ textAlign: "center" }}>{todoRender}</div>
        </div>
        <div label="TO READ">
          <div style={{ textAlign: "center" }}>{toreadRender}</div>
        </div>
      </Tabs>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);

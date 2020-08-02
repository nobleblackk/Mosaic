import React from "react";
// import ReactDOM from "react-dom";
function Card(props) {
  return (
    <>
      <div className="card card-body  mb-6" style={{ alignItems: "center" }}>
        <div style={{ background: "blue" }} className="row">
          <div className="cards">
            <div
              className="card"
              style={{ alignItems: "center", borderRadius: "10px" }}
            >
              {props.imgLocation ? (
                <img
                  style={{ width: "300px", borderRadius: "10px" }}
                  src={props.imgLocation}
                  alt="myPic"
                  className="card_img"
                />
              ) : (
                ""
              )}
              <div>
                <h3>{props.title}</h3>
                {props.title1 ? (
                  <button
                    style={{ width: "50vh" }}
                    type="button"
                    class="btn btn-default"
                  >
                    <span className="glyphicon glyphicon-menu-right">
                      {props.title1}
                    </span>
                  </button>
                ) : (
                  ""
                )}
                <span>{props.content}</span>
                <h5 style={{ color: "blue" }}>{props.time}</h5>

                <a href={props.time} target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

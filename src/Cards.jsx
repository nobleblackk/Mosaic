import React from "react";
// import ReactDOM from "react-dom";
function Card(props) {
  return (
    <>
      <div className=" card-body  mb-6" style={{ alignItems: "center" }}>
        <div
          className="card"
          style={{
            alignItems: "center",
            borderRadius: "10px",
            border: "none",
            background: "white",
          }}
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
            <h5>{props.title}</h5>
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
            <h6 style={{ color: "blue", paddingTop: "5px" }}>{props.time}</h6>

            <a href={props.time} target="_blank"></a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

import React from "react";

export default function Avatar(props) {
  let width = "60px";
  let height = "60px";
  let br = "0px";

  switch (props.size) {
    case "xl":
      width = "200px";
      height = "200px";
      break;
    case "l":
      width = "120px";
      height = "120px";
      break;
    case "m":
      width = "60px";
      height = "60px";
      break;
    case "s":
      width = "30px";
      height = "30px";
      break;

    default:
      width = "60px";
      height = "60px";
      break;
  }

  switch (props.type) {
    case "circle":
      br = "50%";
      break;
    case "rounded":
      br = "8px";
      break;
    case "square":
      br = "0%";
      break;
    default:
      br = "0%";
      break;
  }

  return (
    <div>
      <img
        src={props.src}
        alt="avatar"
        width={width}
        height={width}
        style={{ borderRadius: br, height: height, width: width }}
      />
    </div>
  );
}

import "./Avatar.scss";
import React from "react";
import ProfileIcon from "../../assets/svg/static/unknown-icon.svg";

export default function Avatar({ img, size, active = false }) {
  return (
    <figure
      className={`avatar-wrapper ${active ? "-active" : ""}`}
      style={{ width: size, height: size }}
    >
      {" "}
      <img src={img || ProfileIcon} alt="user profile" />
    </figure>
  );
}

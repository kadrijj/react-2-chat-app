import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  console.log(Contact);
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  online: PropTypes.bool
};

console.log(Contact.propTypes);

export default Contact;

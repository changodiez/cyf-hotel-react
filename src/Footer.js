import React from "react";

const Footer = props => {
  return (
    <div>
      <footer className="footer">
        <ul>
          {props.footerInfo.map((footerInfo, index) => (
            <li key={index}>{footerInfo}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

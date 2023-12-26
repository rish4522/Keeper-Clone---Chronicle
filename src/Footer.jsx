import React from "react";

function Footer() {
    var year = new Date().getFullYear();
    return <div className="main-footer">
        <p>Copyright ⓒ {year}</p>
    </div>
}

export default Footer;
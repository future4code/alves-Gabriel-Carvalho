import react, { useState, useEffect } from "react";

function Header(props) {
  return (
    <div>
      <h1>AstroMatch</h1>
      {props.mudaBotao()}
    </div>
  );
}

export default Header;

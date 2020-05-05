import React from "react";

function PrimeHeader(props) {
  return (
    <header className="page-header">
      <h1 className="page-title">{props.title}</h1>
    </header>
  );
}

export default PrimeHeader;

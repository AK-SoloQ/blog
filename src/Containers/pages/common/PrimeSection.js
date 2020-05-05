import React from "react";

function PrimeSection({ section }) {
  console.log("this is the props ", section);
  const keys = Object.keys(section);

  return <div>{renderContent(keys, section)}</div>;
}

function renderContent(keys, section) {
  let contents = [];
  keys.map((key) => {
    contents.push(renderCoreItem(key, section[key]));
  });
  return contents;
}

function renderCoreItem(key, data) {
  switch (key.slice(0, key.indexOf("_"))) {
    case "title":
      return <h2>{data} </h2>;
    case "list":
      return renderList(key, data);
    default:
      break;
  }
}

function renderList(key, data) {
  return (
    <ul>
      {data.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default PrimeSection;

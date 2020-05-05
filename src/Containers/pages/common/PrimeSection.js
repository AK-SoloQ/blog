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
    case "bigTitle":
      return <h1>{data}</h1>;
    case "title":
      return <h3>{data} </h3>;
    case "list":
      return renderList(key, data);
    case "block":
      return <blockquote>{data}</blockquote>;
    case "par":
      return <p>{data}</p>;
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

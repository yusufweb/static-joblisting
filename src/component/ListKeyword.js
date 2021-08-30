import React from "react";
import "./ListKeyword.css";

function ListKeyword({keyword, handleRemoveKeyword}) {
  return (
    <div>
      <p>{keyword}</p>
      <button className="close" onClick={() => handleRemoveKeyword(keyword)}>X</button>
    </div>
  );
}

export default ListKeyword;

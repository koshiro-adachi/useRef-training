import React, { useState } from "react";
import { useAutoResize } from "./hooks/useAutoResize";

export const Main = () => {
  const textStyles = {
    boxSizing: "border-box",
    resize: "none",
    width: "250px",
    height: "50px",
    fontSize: "15px"
  };
  const [itemList, setItemList] = useState([]);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, value]);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //textareaの高さを動的に変えるref
  const textareaRef = useAutoResize(value);
  return (
    <div>
      <div>
        {itemList.length === 0 ? (
          <h3>No Items</h3>
        ) : (
          <ul>
            {itemList.map((item, index) => (
              <li key={`${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          style={textStyles}
        />
        <br />
        <button>送信する</button>
      </form>
    </div>
  );
};

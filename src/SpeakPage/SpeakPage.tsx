import React, { useState, useEffect } from "react";
import "./SpeakPage.css";

import quotes from "../Data/AllAlong";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(items);
  } else {
  }
  return [];
};

const SpeakPage = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomItem = Math.floor(Math.random() * quotes.length);
    const newItem = {
      id: new Date().getTime().toString(),
      title: quotes[randomItem],
    };
    setItems([newItem, ...items]);
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="speakpage">
      <section className="section-center">
        <form className="grocery-form" onSubmit={submitHandler}>
          <h3 className="lies">LIES YOU TELL YOURSELF</h3>
          <div className="form-control">
            <input
              className="help"
              type="text"
              placeholder="TELL ME HERE"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Speak
            </button>
          </div>
        </form>
        {items.length > 0 && (
          <div className="grocery-container">
            <div className="grocery-list">
              {items.map((item: any) => {
                const { id, title } = item;
                return (
                  <article key={id} className="grocery-item">
                    <p className="title">{title}</p>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SpeakPage;

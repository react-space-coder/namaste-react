import { useState } from "react";

export const Prac = () => {

  const arr = ["anusha", "deshpande", "nale", "sony", "interview"];

  const [searchItem, setSearchitem] = useState("");

  const handleThrotling = (fn, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      fn(...args);
    };
  };

  const handleButtonClik = () => {
    console.log("Button Clicked");
  };
  const onResize = () => {
    console.log("Window resized:", window.innerWidth, window.innerHeight);
  };
  const throttledResize = handleThrotling(onResize, 1000); // throttle for 1s
  window.addEventListener("resize", throttledResize);
  //   const butonClik = handleThrotling(handleButtonClik, 5000);

  const handleDebounce = (fun, delay) => {
    let time = null;
    return function (...args) {
      clearTimeout(time);
      time = setTimeout(() => fun(...args), delay);
    };
  };
  const handleDebouncing = (value) => {
    console.log("first");
    setSearchitem(value);
  };

  const debounceSearch = handleDebounce(handleDebouncing, 1000);

  const filteredText = arr.filter((name) =>
    name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="bg-gray-50 p-4">
      <input
        type="text"
        onChange={(e) => debounceSearch(e.target.value)}
        className="border p-2"
        placeholder="Type to search..."
      />
      {/* <button onClick={butonClik}>Click me</button> */}
      <ul>
        {searchItem &&
          filteredText.map((name, index) => (
            <li key={index} className="text-black">
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

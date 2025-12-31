import React from "react";
import axios from "axios";

const AxioDemo = () => {
  axios
    .get("https://dummyjson.com/producvts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  return <div></div>;
};

export default AxioDemo;

import tagMaker from "../../models/tagMaker.js";

const bodyProps = {
  style: "width:100vw; height:100vh",
};

Object.assign(document.body, bodyProps);

const containerProps = {
  id: "container",
  style:
    "width:100%; height:100%; display:flex; flexDirection:column; justifyContent:center; alignItems:center; backgroundColor:red",
};

tagMaker("div", document.body, containerProps);

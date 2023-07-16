const tagMaker = (tag, parent, props = null) => {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (typeof props === "object") {
    Object.assign(element, props);
  }
  return element;
};

export default tagMaker;

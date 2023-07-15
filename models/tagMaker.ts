export const tagMaker = (tag: string, parent: Node, props: object | null = null) => {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (typeof props === "object") {
    Object.assign(element, props);
  }
  return element;
};

// 클래스 방식으로도 만들기
// class TagMaker{

// }

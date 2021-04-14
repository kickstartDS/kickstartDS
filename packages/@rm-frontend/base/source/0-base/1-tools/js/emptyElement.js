// simple and fast function to remove all children from a HTML element

export default (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

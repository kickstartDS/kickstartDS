export default function classToggle(element, toggleclass) {
  const classlist = element.classList;
  return classlist.contains(toggleclass)
    ? classlist.remove(toggleclass)
    : classlist.add(toggleclass);
}

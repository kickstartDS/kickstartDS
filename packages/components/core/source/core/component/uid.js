let currentId = 0;
export function uid() {
  // eslint-disable-next-line no-plusplus
  return `${Date.now().toString(36)}${currentId++}`;
}

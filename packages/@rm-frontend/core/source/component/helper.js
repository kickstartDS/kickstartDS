export function findComponentClass(input) {
  // input is either a class or a function returning a promise (that resolves to a class)
  if (!input) return null;
  if (input.isComponent) return input;
  return input().then((c) => c.default || c);
}

export function executeHooks(element, hooks) {
  hooks.forEach((hook) => {
    hook(element);
  });
}

let currentId = 0;
export function uid() {
  // eslint-disable-next-line no-plusplus
  return `${Date.now().toString(36)}${currentId++}`;
}

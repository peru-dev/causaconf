//
// Render component into given DOM Node
//
export default (component, node) => {
  const child = component({});
  if (child) {
    Object.assign(node, { innerHTML: '' });
    node.appendChild(child);
  }
};

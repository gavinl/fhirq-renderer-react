

export const findItem = (linkId, root) => {
  if (Array.isArray(root)) {
    for (let i = 0; i < root.length; i++) {
      if (root[i].linkId === linkId) {
        return root[i];
      }
      if (root[i].item) {
        const result = findItem(linkId, root[i].item);
        if (result) return result;
      }
    }
    return null;
  }
};


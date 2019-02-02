import { getFhirValue } from './extensions';


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

export const isEnabled = (item, root) => {
  if (!item) return false;
  if (Array.isArray(item.enableWhen)) {
    const enabled = item.enableWhen.every(condition => {
      const item = findItem(condition.question, root);
      const result = item && (getFhirValue(item) === getFhirValue(condition));
      return result;
    });
    return enabled;
  }
}


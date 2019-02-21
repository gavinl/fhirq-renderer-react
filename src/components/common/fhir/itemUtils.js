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
    console.group(`Evaluating enableWhen for ${item.linkId}`);
    const enabled = item.enableWhen.every(condition => {
      console.group("condition:", condition);
      const item = findItem(condition.question, root);
      console.log("item:", item);
      const result = !!(item && item.answer && (getFhirValue(item.answer) === getFhirValue(condition)));
      console.log(`result: ${result}`);
      console.groupEnd();
      return result;
    });
    console.log(`isEnabled: ${enabled}`);
    console.groupEnd();
    return enabled;
  }
  return false;
};


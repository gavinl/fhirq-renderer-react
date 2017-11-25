

export const findInlineOptions = (question, contained = []) => {
  let options = [];
  if (question.options) {
    const reference = question.options.reference;
    const valueSet = contained.find(item => `#${item.id}` === reference);
    if (valueSet) {
      if (valueSet.concept) { // external reference to DSTU2...
        // TODO: Should throw error
        options = valueSet.concept; // easy enough to handle... for now
      }
      else {
        valueSet.compose.include.forEach(system => {
          const codeSystem = contained.find(vs => vs.url === system.system);
          options = options.concat(codeSystem.concept);
        });
      }
    }
  }
  else if (question.option) {
    options = question.option;
  }
};

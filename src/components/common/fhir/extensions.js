
/**
 * Find an extension array
 * @param {Array} extension extension object array
 * @param {string} url extension url
 * @returns the requested extension, or an empty object
 */
export const findExtension = (extension, url) => {
  return (Array.isArray(extension) && extension.find(ext => ext.url === url)) || {};
};

/**
 * Determine if a reference is absolute or relative
 * @param {string} reference
 */
export const isExternal = reference => /^http[s]?:\/\//.test(reference);

export const resolveOptions = (reference, resources) => {
  let options = [];
  if (reference.startsWith("#")) {
    const valueSet = resources.find(vs => `#${vs.id}` === reference);
    if (valueSet) {
      const codeSystems = valueSet.compose.include.map(i => i.system);
      codeSystems.forEach(system => {
        const codeSystem = resources.find(cs => cs.url === system);
        if (codeSystem && Array.isArray(codeSystem.concept)) {
          options = options.concat(codeSystem.concept);
        }
      });
    }
    return options;
  }

  debugger;

  return options;
};

export const convertOptionToCoding = questionOption => {
  return questionOption.map(opt => {
    if (opt.hasOwnProperty("valueCoding")) return opt.valueCoding; // STU3 this is the only possible option.
  }) || [];
};

export const getFhirValue = obj => {
  if (!obj) return "";
  if (obj.hasOwnProperty("valueDate")) return obj.valueDate;
  if (obj.hasOwnProperty("valueInteger")) return obj.valueInteger;
  if (obj.hasOwnProperty("valueTime")) return obj.valueTime;
  if (obj.hasOwnProperty("valueString")) return obj.valueString;

  return "";
};

export const getInitialValue = obj => {
  if (!(typeof (obj) === "object")) throw "Expecting an object";
  if (obj.hasOwnProperty("initialBoolean")) return obj.initialBoolean;
  if (obj.hasOwnProperty("initialDecimal")) return obj.initialDecimal;
  if (obj.hasOwnProperty("initialInteger")) return obj.initialInteger;
  if (obj.hasOwnProperty("initialDate")) return obj.initialDate;
  if (obj.hasOwnProperty("initialDateTime")) return obj.initialDateTime;
  if (obj.hasOwnProperty("initialTime")) return obj.initialTime;
  if (obj.hasOwnProperty("initialString")) return obj.initialString;
  if (obj.hasOwnProperty("initialUri")) return obj.initialUri;
  if (obj.hasOwnProperty("initialAttachment")) return obj.initialAttachment;
  if (obj.hasOwnProperty("initialCoding")) return obj.initialCoding;
  if (obj.hasOwnProperty("initialQuantity")) return obj.initialQuantity;
  if (obj.hasOwnProperty("initialReference")) return obj.initialReference;

  return undefined;
};

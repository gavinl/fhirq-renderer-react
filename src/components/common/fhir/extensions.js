
/**
 * Find an extension array
 * @param {Array} extension extension object array
 * @param {string} url extension url
 * @returns the requested extension, or an empty object
 */
export const findExtension = (extension, url) => {
  return (Array.isArray(extension) && extension.find(ext => ext.url === url)) || {};
};

const externalServerRegex = /^http[s]?:\/\//;

/**
 * Determine if a reference is absolute or relative
 * @param {string} reference
 */
export const isExternal = reference => {
  if (reference) {
    return externalServerRegex.test(reference);
  }

  throw `invalid reference "${reference}"`;
};


export const resolveOptions = (reference, resources) => {
  // if (reference.startsWith("#")) {
  //   const valueSet = resources.find(vs => `#${vs.id}` === reference);
  // }
  console.log(resources);
  return [];
};

export const convertOptionToCoding = questionOption => {
  return questionOption.map(opt => {
    if (opt.hasOwnProperty("valueCoding")) return opt.valueCoding; // STU3 this is the only possible option. Possible for below in R4
    if (opt.hasOwnProperty("valueInteger")) return { code: `${opt.valueInteger}`, display: `${opt.valueInteger}` };
    if (opt.hasOwnProperty("valueDate")) return { code: `${opt.valueDate}`, display: `${opt.valueDate}` };
    if (opt.hasOwnProperty("valueTime")) return { code: `${opt.valueTime}`, display: `${opt.valueTime}` };
    if (opt.hasOwnProperty("valueString")) return { code: `${opt.valueString}`, display: `${opt.valueString}` };
  });
};

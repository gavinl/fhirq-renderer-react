
/**
 * Find an extension array
 * @param {Array} extension extension object array
 * @param {string} url extension url
 * @returns the requested extension, or an empty object
 */
export const findExtension = (extension, url) => {
  return (Array.isArray(extension) && extension.find(ext => ext.url === url)) || {};
};

const externalServerRegex = /^http[s]*:\/\//;

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

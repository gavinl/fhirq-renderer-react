
/**
 * Find an extension from an array
 * @param {Array} extension extension object array
 * @param {string} url extension url
 * @returns the requested extension, or an empty object
 */
export const findExtension = (extension, url) => {
  return (Array.isArray(extension) && extension.find(ext => ext.url === url)) || {};
};

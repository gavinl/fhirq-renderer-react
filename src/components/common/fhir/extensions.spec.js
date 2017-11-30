import * as sut from './extensions';

describe("Extensions", () => {
  describe("isExternal detects references correctly", () => {
    it("returns true for absolute url", () => {
      const actual = sut.isExternal("http://test/");
      expect(actual).toEqual(true);
    });

    it("returns true for absolute SSL url", () => {
      const actual = sut.isExternal("https://test/");
      expect(actual).toEqual(true);
    });

    it("returns false for relative url", () => {
      const actual = sut.isExternal("ValueSet/abc123");
      expect(actual).toEqual(false);
    });
  });

  describe("resolveOptions", () => {
    it("can find options from resources", () => {
      const contained = validContained();
      const actual = sut.resolveOptions("#e00440a9-0195-4f84-ada2-0fd8e81dacad", contained);
      expect(actual).toBeDefined();
      expect(actual.length).toEqual(3);
    });

  });
});


const validContained = () => {
  return [{ "resourceType": "CodeSystem", "id": "cs-e00440a9-0195-4f84-ada2-0fd8e81dacad", "url": "873dc647-912b-4ae4-837f-3808fa44171f", "status": "active", "content": "fragment", "concept": [{ "code": "Y", "display": "Can" }, { "code": "M", "display": "With modifications" }, { "code": "N", "display": "Cannot" }] }, { "resourceType": "ValueSet", "id": "e00440a9-0195-4f84-ada2-0fd8e81dacad", "name": "Physical Function", "status": "active", "compose": { "include": [{ "system": "873dc647-912b-4ae4-837f-3808fa44171f" }] } }, { "resourceType": "CodeSystem", "id": "cs-baf364f6-d775-4bfe-8b92-974ccb433dcb", "url": "04efb7f2-16e6-4501-9896-3e8353372713", "status": "active", "content": "fragment", "concept": [{ "code": "N", "display": "Not affected" }, { "code": "P", "display": "Partially affected" }, { "code": "Y", "display": "Affected" }] }, { "resourceType": "ValueSet", "id": "baf364f6-d775-4bfe-8b92-974ccb433dcb", "name": "Mental Health Function", "status": "active", "compose": { "include": [{ "system": "04efb7f2-16e6-4501-9896-3e8353372713" }] } }];
};

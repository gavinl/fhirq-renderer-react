import * as sut from './extensions';

describe("Extensions", () => {
  describe("isExternal detects references correctly", () => {
    it("returns true for absolute url", () => {
      const actual = sut.isExternal("http://test/");
      expect(actual).toEqual(true);
    });

    it("returns false for relative url", () => {
      const actual = sut.isExternal("#abc123");
      expect(actual).toEqual(false);
    });

    it("returns false for falsy", () => {
      const actual = sut.isExternal(null);
      expect(actual).toEqual(false);
    });
  });
});

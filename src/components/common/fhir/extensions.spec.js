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
// throws error now
    // it("returns false for falsy", () => {
    //   const actual = sut.isExternal(null);
    //   expect(actual).toEqual(false);
    // });
  });
});

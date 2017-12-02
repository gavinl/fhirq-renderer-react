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

    it("returns false for falsy url", () => {
      expect(sut.isExternal(null)).toEqual(false);
      expect(sut.isExternal(undefined)).toEqual(false);
    });
  });

  describe("resolveOptions", () => {
    const resources = [

    ];

    describe("when reference starts with #", () => {
      it("discovers valueSet", () => {
        const actual = sut.resolveOptions("hello", resources);
        expect(actual).toBeTruthy();
        expect(actual.length).toEqual(1);
      });
    });
  });
});

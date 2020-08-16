import * as tmdbUtils from "./tmdb";

const mockBaseURL = "images";
jest.mock("../config", () => ({ tmdbImageBaseUrl: "images" }));

describe("tmdb utils", () => {
  it("gets tmdb image url", () => {
    const mockImageWidth = 150;
    const mockImageRelativeURL = "/image.png";
    const expected = `${mockBaseURL}/w${mockImageWidth}${mockImageRelativeURL}`;
    expect(
      tmdbUtils.getTMDBImageURL(mockImageRelativeURL, mockImageWidth)
    ).toEqual(expected);
  });
});

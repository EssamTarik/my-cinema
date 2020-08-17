import { tmdbImageBaseUrl } from "../config";

export const getTMDBImageURL = (
  imageRelativeURL: string,
  imageWidth: number
) => {
  return `${tmdbImageBaseUrl}/w${imageWidth}${imageRelativeURL}`;
};

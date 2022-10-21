import { ThumbnailType } from 'types/CharacterType';

export const getImageURL = (thumbnail: ThumbnailType): string =>
  `${thumbnail.path}.${thumbnail.extension}`;

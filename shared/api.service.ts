import { PhotoItem } from './types';

export const getOriginalImage = async (photoId: string): Promise<PhotoItem> => {
  const data = await fetch(`/api/photo/${photoId}`);
  const photoItem: PhotoItem = await data.json();

  return photoItem;
};

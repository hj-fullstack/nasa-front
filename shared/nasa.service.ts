import fetch from 'node-fetch';
import qs from 'querystring';
import { NASA_API_KEY } from './constant';
import {
  PhotoItem,
  PhotoThumbItem,
  NASAApiSearchResponse,
  NASAApiAssetDetailResponse,
} from './types';

const nasaImageApiEndPoint = 'https://images-api.nasa.gov';
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getFeaturedImages = async (): Promise<PhotoThumbItem[]> => {
  const query = qs.encode({
    q: 'rover',
    media_type: 'image',
  });

  const resp1 = await fetch(`${nasaImageApiEndPoint}/search?${query}`, {
    headers: defaultHeaders,
  });
  const data: NASAApiSearchResponse =
    (await resp1.json()) as NASAApiSearchResponse;

  const images: PhotoThumbItem[] = data.collection.items.map((item) => {
    const [firstItem] = item.data;
    const [firstLink] = item.links;

    return {
      nasaId: firstItem.nasa_id,
      title: firstItem.title,
      href: firstLink.href,
      description: firstItem.description,
    };
  });

  return images;
};

export const getPhotoDetail = async (photoId: string): Promise<PhotoItem> => {
  if (!photoId) {
    throw Error('invalid asset id');
  }
  const resp = await fetch(
    `${nasaImageApiEndPoint}/asset/${photoId}?api_key=${NASA_API_KEY}`,
    {
      headers: defaultHeaders,
    }
  );

  const data: NASAApiAssetDetailResponse =
    (await resp.json()) as NASAApiAssetDetailResponse;

  const validImageFormat = /\.(gif|jpe?g|png|webp|bmp)$/i;

  const [firstItem] = data.collection.items.filter((item) =>
    validImageFormat.test(item.href)
  );

  return {
    nasaId: photoId,
    orgHref: firstItem.href,
  };
};

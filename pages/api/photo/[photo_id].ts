import type { NextApiRequest, NextApiResponse } from 'next';
import { PhotoItem } from '@/shared/types';
import { getPhotoDetail } from '@/shared/nasa.service';

type ErrorMessage = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PhotoItem | ErrorMessage>
) {
  const { query } = req;
  switch (req.method) {
    case 'GET':
      try {
        const { photo_id: photoId } = query;
        const data = await getPhotoDetail(photoId as string);
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ message: 'Failed to fetch assetId' });
      }
      break;
    default:
      res.status(404).json({ message: 'Invalid route' });
  }
}

import { useQuery } from 'react-query';

import { getOriginalImage } from '@/shared/api.service';

const usePhoto = (photoId: string) =>
  useQuery(['photos', photoId], async () => {
    const data = await getOriginalImage(photoId);
    return data;
  });

export default usePhoto;

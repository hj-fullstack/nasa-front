import { useContext } from 'react';
import UploadContext from '../contexts/upload.context';

export const useUploadContext = () => useContext(UploadContext);

export const useIsUploadEnabled = () => {
  const { images } = useUploadContext();
  return images.length < 5;
};

export default useUploadContext;

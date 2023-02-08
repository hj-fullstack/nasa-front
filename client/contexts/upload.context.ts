import { createContext } from 'react';
import { UploadedPhoto } from '@/shared/types';

interface UploadContextProps {
  images: UploadedPhoto[];
  addToList: (photo: UploadedPhoto) => void;
  clearList: () => void;
}

const uploadContext = createContext<UploadContextProps>({
  images: [],
  addToList: (photo: UploadedPhoto) => {},
  clearList: () => {},
});

export default uploadContext;

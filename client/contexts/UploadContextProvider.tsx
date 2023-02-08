import { ReactNode, useState } from 'react';
import UploadContext from './upload.context';
import { UploadedPhoto } from '@/shared/types';

interface UploadContextProviderProps {
  children?: ReactNode;
}

export const UploadContextProvider = ({
  children,
}: UploadContextProviderProps) => {
  const [images, setImages] = useState<UploadedPhoto[]>([]);

  const addToList = (photo: UploadedPhoto) => {
    setImages([...images, photo]);
  };
  const clearList = () => {
    setImages([]);
  };

  const value = {
    images,
    addToList,
    clearList,
  };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};

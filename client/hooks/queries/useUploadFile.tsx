import { useMutation } from 'react-query';
import { UploadedPhoto } from '@/shared/types';

const useUploadFile = () =>
  useMutation(
    (file: File) =>
      new Promise<UploadedPhoto>((resolve) =>
        setTimeout(() => resolve({ name: file.name }), 1000)
      )
  );

export default useUploadFile;

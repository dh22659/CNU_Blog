import { updatePostById } from '../api';
import { TAG } from '../api/types.ts';
import { useMutation } from '@tanstack/react-query';

const useUpdatePostById = () => {
  const mutation = async ({ postId, title, contents, tag }: { postId: string; title: string; contents: string; tag: TAG }) => {
    await updatePostById(postId, title, contents, tag);
  };

  return useMutation({
    mutationKey: ['createPost'],
    mutationFn: mutation,
  });
};

export default useUpdatePostById;

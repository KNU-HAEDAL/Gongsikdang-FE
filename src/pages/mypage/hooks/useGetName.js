import { getNameApi, nameApiPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

const getNameQueryKey = [nameApiPath];

export const useGetName = () => {
  return useQuery({
    queryKey: getNameQueryKey,
    queryFn: getNameApi,
  });
};

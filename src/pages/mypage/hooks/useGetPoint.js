import { getPointApi, pointApiPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

const getPointQueryKey = [pointApiPath];

export const useGetPoint = () => {
  return useQuery({
    queryKey: getPointQueryKey,
    queryFn: getPointApi,
  });
};

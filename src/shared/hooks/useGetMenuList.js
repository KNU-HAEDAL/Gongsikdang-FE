import { menuListAPI, menuListPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

const getMenuListQueryKey = (corner) => [menuListPath(corner)];

export const useGetMenuList = (corner) => {
  return useQuery({
    queryKey: getMenuListQueryKey(corner),
    queryFn: () => menuListAPI(corner),
  });
};

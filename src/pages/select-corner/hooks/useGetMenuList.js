import { menuListAPI, menuListPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

export const getMenuListQueryKey = [menuListPath];

export const useGetMenuList = () => {
  return useQuery({
    queryKey: getMenuListQueryKey,
    queryFn: menuListAPI,
  });
};

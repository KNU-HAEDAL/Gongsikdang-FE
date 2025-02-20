import { fetchInstance } from '@/shared';

export const menuListPath = '/api/menu';

export const menuListAPI = async () => {
  const response = await fetchInstance.get(menuListPath);
  return response;
};

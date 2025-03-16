import { fetchInstance } from '@/shared';

export const menuListPath = (corner) => `/api/menu/info/${corner}`;

export const menuListAPI = async (corner) => {
  const response = await fetchInstance.get(menuListPath(corner));
  return response.data;
};

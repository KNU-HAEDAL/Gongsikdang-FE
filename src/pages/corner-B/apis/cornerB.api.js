import { fetchInstance } from '@/shared';

export const cornerBListPath = '/api/menu/info/B';

export const cornerBListAPI = async () => {
  const response = await fetchInstance.get(cornerBListPath);
  return response;
};

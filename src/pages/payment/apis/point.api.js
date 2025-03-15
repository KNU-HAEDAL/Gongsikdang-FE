import { fetchInstance } from '@/shared';

export const pointApiPath = '/api/point';

export const pointAPI = async () => {
  const response = await fetchInstance.get(pointApiPath);
  return response.data;
};

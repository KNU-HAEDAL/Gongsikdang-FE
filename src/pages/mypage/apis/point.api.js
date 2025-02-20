import { fetchInstance } from '@/shared';

export const pointApiPath = '/api/point';

export const getPointApi = async () => {
  const response = await fetchInstance.get(pointApiPath);

  return response;
};

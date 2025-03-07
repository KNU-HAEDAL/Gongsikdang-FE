import { fetchInstance } from '@/shared';

export const nameApiPath = '/user/name';

export const getNameApi = async () => {
  const response = await fetchInstance.get(nameApiPath);
  return response.data;
};

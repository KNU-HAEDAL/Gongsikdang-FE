import { fetchInstance } from '@/shared';

export const cornerAListPath = '/api/menu/info/A';

export const cornerAListAPI = async () => {
  const response = await fetchInstance.get(cornerAListPath);
  return response;
};

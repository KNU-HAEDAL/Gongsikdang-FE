import { fetchInstance } from '@/shared';

export const cornerDListPath = '/api/menu/info/D';

export const cornerDListAPI = async () => {
  const response = await fetchInstance.get(cornerDListPath);
  return response;
};

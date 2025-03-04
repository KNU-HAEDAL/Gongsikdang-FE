import { fetchInstance } from '@/shared';

export const cornerCListPath = '/api/menu/info/C';

export const cornerCListAPI = async () => {
  const response = await fetchInstance.get(cornerCListPath);
  return response;
};

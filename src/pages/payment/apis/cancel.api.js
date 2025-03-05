import { fetchInstance } from '@/shared';

export const cancelApiPath = '/purchases/cancel';

export const getPointApi = async () => {
  const response = await fetchInstance.get(cancelApiPath);

  return response;
};

import { fetchInstance } from '@/shared';

export const purchaseApiPath = 'api/purchases';

export const getPointApi = async () => {
  const response = await fetchInstance.get(purchaseApiPath);

  return response;
};

import { fetchInstance } from '@/shared';

export const purchaseApiPath = '/api/purchases';

export const getPurchasesList = async () => {
  const response = await fetchInstance.get(purchaseApiPath);
  return response.data;
};

import { getPurchasesList, purchaseApiPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

const purchaseListQueryKey = [purchaseApiPath];

export const useGetPurchaseList = () => {
  return useQuery({
    queryKey: purchaseListQueryKey,
    queryFn: getPurchasesList,
  });
};

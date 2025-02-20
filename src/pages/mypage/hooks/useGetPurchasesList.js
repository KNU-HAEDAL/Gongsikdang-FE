import { getPurchasesList, pointApiPath } from '../apis';
import { useQuery } from '@tanstack/react-query';

const purchaseListQueryKey = [pointApiPath];

export const useGetPurchaseList = () => {
  return useQuery({
    queryKey: purchaseListQueryKey,
    queryFn: getPurchasesList,
  });
};

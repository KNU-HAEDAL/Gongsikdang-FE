import { fetchInstance } from '@/shared';

export const purchasesApiPath = '/api/purchases';

export const purchaseAPI = async ({
  impUid,
  merchantUid,
  date,
  totalAmount,
  paymentMethod,
  pgProvider,
  item,
  status
}, token) => {
  const response = await fetchInstance.post(
    purchasesApiPath,
    { impUid,
      merchantUid,
      date,
      totalAmount,
      paymentMethod,
      pgProvider,
      item,
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};


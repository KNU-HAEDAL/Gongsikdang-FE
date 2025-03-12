import { fetchInstance } from '@/shared';

export const reduceStockPath = '/api/menu/reduce';

export const reduceStockAPI = async (cartItems, token) => {
  const response = await fetchInstance.post(
    reduceStockPath,
    cartItems.map(item => ({
      foodId: item.foodId,
      foodName: item.foodName,
      quantity: item.quantity,
    })),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};
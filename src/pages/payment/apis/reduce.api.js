import { fetchInstance } from '@/shared';

export const reduceStockAPI = async (cartItems) => {
  try {
    const response = await fetchInstance.post(
      '/api/menu/reduce',
      cartItems.map((item) => ({
        foodId: item.foodId,
        foodName: item.foodName,
        quantity: item.quantity,
      }))
    );
    return response.data;
  } catch (error) {
    console.error(
      '재고 감소 요청 실패:',
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || '재고 감소 요청에 실패했습니다.'
    );
  }
};

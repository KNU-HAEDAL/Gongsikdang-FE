import { fetchInstance } from '@/shared';

export const purchaseAPI = async (purchaseData) => {
  try {
    const response = await fetchInstance.post('/api/purchases', purchaseData);
    return response.data;
  } catch (error) {
    console.error('구매 요청 실패:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || '구매 요청에 실패했습니다.'
    );
  }
};

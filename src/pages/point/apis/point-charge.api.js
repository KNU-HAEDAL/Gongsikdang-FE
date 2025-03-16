import { fetchInstance } from '@/shared';

export const chargePointAPI = async (chargeData) => {
  try {
    const formattedData = {
      impUid: chargeData.impUid,
      money: chargeData.money,
    };

    const response = await fetchInstance.post(
      '/api/point/charge',
      formattedData
    );
    return response.data;
  } catch (error) {
    console.error('Error during point charge:', error.response?.data || error);
    throw new Error(
      error.response?.data?.message || '포인트 충전에 실패했습니다.'
    );
  }
};

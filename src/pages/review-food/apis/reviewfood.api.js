import { fetchInstance } from '@/shared';

export const reviewFoodListPath = '/api/review/read/1?sort=desc';

export const reviewFoodListAPI = async () => {
  try {
    const response = await fetchInstance.get(reviewFoodListPath);
    return response.data.map((review) => ({
      foodname: review.foodName,
      id: review.reviewId,
      user: review.userId,
      foodId: review.foodId,
      text: review.reviewContent,
      rating: review.grade,
    }));
  } catch (error) {
    console.error('리뷰 데이터 불러오기 오류:', error);
    return [];
  }
};

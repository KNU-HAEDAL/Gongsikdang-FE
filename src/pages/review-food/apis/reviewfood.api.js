import { fetchInstance } from '@/shared';

export const reviewFoodListAPI = async (foodId) => {
  try {
    const response = await fetchInstance.get(
      `/api/review/read/${foodId}?sort=desc`
    );

    return response.data.map((review) => ({
      foodName: review.foodName,
      id: review.reviewId,
      user: review.userId,
      foodId: review.foodId,
      text: review.reviewContent,
      rating: review.grade,
    }));
  } catch (error) {
    return [];
  }
};

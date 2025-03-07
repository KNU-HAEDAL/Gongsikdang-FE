import { fetchInstance } from '@/shared';

export const loginAPI = async ({ id, password }) => {
  const response = await fetchInstance.post('/user/login', {
    id,
    password,
  });
  return response;
};

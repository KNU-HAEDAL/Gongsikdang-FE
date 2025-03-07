import { fetchInstance } from '@/shared';

export const registerApi = async ({ id, password, name }) => {
  const response = await fetchInstance.post('/user/register', {
    id,
    password,
    name,
  });
  return response.data;
};

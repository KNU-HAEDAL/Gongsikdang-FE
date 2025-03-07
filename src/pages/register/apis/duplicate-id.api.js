import { fetchInstance } from '@/shared/instance/Instance';

export const duplicateIdApi = async ({ id }) => {
  const response = await fetchInstance.post('/user/checkDuplicateId', { id });
  return response.data;
};

import {API_URL} from '../constants';

const baseUrl = `${API_URL}/orders`;

async function GetAllFromAuthenticatedUser(token: string, _page: number) {
  return fetch(`${baseUrl}/`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}

export const OrderService = {
  GetAllFromAuthenticatedUser,
};

import {API_URL} from '../constants';

const baseUrl = `${API_URL}`;

async function GetAllProducts(token: string) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetch(`${baseUrl}/products`, options);
}

async function GetAllGuisos(_token: string) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await fetch(`${baseUrl}/guisos`, options);
}

export const ProductServices = {
  GetAllProducts,
  GetAllGuisos,
};

import {API_URL} from '../constants';

const baseUrl = `${API_URL}/guisos`;

async function GetAllGuisos() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await fetch(`${baseUrl}`, options);
}

async function GetById(id: string) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await fetch(`${baseUrl}/${id}`, options);
}

export const GuisoService = {
  GetAllGuisos,
  GetById,
};

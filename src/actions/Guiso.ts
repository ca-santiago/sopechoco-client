import {Dispatch} from 'react';
import {GuisoService} from '../services/guiso';
import {Guiso, GuisoReducerAction, GuisoReducerActionType} from '../types';

function GetGuisos(token: string, ids: string[]) {
  return async (dispatch: Dispatch<GuisoReducerAction>) => {
    ids.forEach(async id => {
      const res = await GetGuisoById(id);
      if (res === null) {
        return;
      }
      dispatch({
        type: GuisoReducerActionType.ADD_GUISOS,
        data: res,
      });
    });
  }; // End of dispatch function
}

async function GetGuisoById(id: string): Promise<Guiso | null> {
  const res = await GuisoService.GetById(id);
  if (res.status === 200) {
    return (await res.json()) as Guiso;
  }

  return null;
}

export const GuisoActions = {
  GetGuisos,
};

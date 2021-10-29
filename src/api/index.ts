import { IGetSearchIdResponse, IGetTicketsResponse } from './types';

export const searchIdURL = 'https://front-test.beta.aviasales.ru/search';
export const getTicketsURL = 'https://front-test.beta.aviasales.ru/tickets';

export const getSearchId = async (): Promise<IGetSearchIdResponse> => {
  try {
    const response = await fetch(searchIdURL);
    const json: IGetSearchIdResponse = await response.json();
    return json;
  } catch (error) {
    return error as IGetSearchIdResponse;
  }
};

export const getTickets = async (searchID: string): Promise<IGetTicketsResponse> => {
  try {
    const response = await fetch(`${getTicketsURL}?searchId=${searchID}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error as IGetTicketsResponse;
  }
};

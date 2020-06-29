import { queryString } from './api';
import { get } from '.';

const endpoint = 'http://gateway.marvel.com/v1/public';

export const fetchCharacter = (id) => get(`${endpoint}/characters/${id}?${queryString}`);

export const getComics = (heroId, orderBy) => get(`${endpoint}/characters/${heroId}/comics?orderBy=${orderBy}&${queryString}`);

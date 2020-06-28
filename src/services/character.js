import api, { queryString } from './api';

export const fetchCharacter = (id) => api.get(`/characters/${id}?${queryString}`);

export const getComics = (heroId, orderBy) => api.get(`/characters/${heroId}/comics?orderBy=${orderBy}&${queryString}`);

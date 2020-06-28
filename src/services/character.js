import api, { queryString } from './api';

export const fetchCharacter = (id) => api.get(`/characters/${id}?${queryString}`);

import {environment} from 'src/environments/environment.development';

export const BASE_URL = environment.API_URL;

export const PLACE_URL = BASE_URL + '/api/places';
export const PLACES_BY_SEARCH = PLACE_URL + '/search/';
export const PLACE_BY_ID_URL = PLACE_URL + '/';

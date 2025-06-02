import axios from 'axios';
import { fetchMockData } from '../utils/mockAPIUtils';

const useMockAPI = true; // Set this flag to true to use the mock API

export const fetchSports = async () => {
    if (useMockAPI) {
        return fetchMockData('fetchSports');
    }
    // ...existing code for actual API call...
};

export const fetchSportsById = async (id) => {
    if (useMockAPI) {
        return fetchMockData('fetchSportsById', { id });
    }
    // ...existing code for actual API call...
};

// ...similar changes for other API methods...

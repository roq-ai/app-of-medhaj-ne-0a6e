import axios from 'axios';
import queryString from 'query-string';
import { ContributorInterface, ContributorGetQueryInterface } from 'interfaces/contributor';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContributors = async (
  query?: ContributorGetQueryInterface,
): Promise<PaginatedInterface<ContributorInterface>> => {
  const response = await axios.get('/api/contributors', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createContributor = async (contributor: ContributorInterface) => {
  const response = await axios.post('/api/contributors', contributor);
  return response.data;
};

export const updateContributorById = async (id: string, contributor: ContributorInterface) => {
  const response = await axios.put(`/api/contributors/${id}`, contributor);
  return response.data;
};

export const getContributorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/contributors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContributorById = async (id: string) => {
  const response = await axios.delete(`/api/contributors/${id}`);
  return response.data;
};

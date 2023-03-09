import api from './AxiosApi'

export const getPokemons = async (limit = 5, offset = 0) => {
	const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

	return response.data;
};

export const getPokemonById = async (id) => {
	const response = await api.get(`/pokemon/${id}`);

	return response.data;
};

export const getPokemonByName = async (name) => {
	const response = await api.get(`/pokemon/${name}`);

	return response.data;
};

export const getPokemonTypes = async () => {
	const response = await api.get(`/type`);

	return response.data.results;
};

export const getPokemonSpaces = async (id) => {
	const response = await api.get(`/pokemon-species/${id}`);

	return response.data;
};
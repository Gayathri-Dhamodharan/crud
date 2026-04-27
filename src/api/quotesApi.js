import axios from "axios";

const API_URL = "http://localhost:5000/api/quotes"; 

export const getQuotes = () => {
  return axios.get(API_URL);
};

export const getQuoteById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addQuote = (data) => {
  return axios.post(API_URL, data);
};

export const updateQuote = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

export const deleteQuote = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

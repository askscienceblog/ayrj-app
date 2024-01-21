export const useBaseFetch = (url, options = {}) =>
  useFetch(`http://127.0.0.1:8000${url}`, options);

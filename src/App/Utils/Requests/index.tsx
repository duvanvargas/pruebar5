import API_URL from "../Constants";

// API search function
export function searchBooks(searchTerm: string) {
  const queryString = `q=${searchTerm}`;
  return fetch(`${API_URL}/volumes?${queryString}`)
    .then(r => r.json())
    .then(r => r.items ? r.items : [])
    .catch(error => {
      console.error(error);
      return [];
    });
}

export function getBook(idBook: string) {
  return fetch(`${API_URL}/volumes/${idBook}`)
    .then(r => r.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}
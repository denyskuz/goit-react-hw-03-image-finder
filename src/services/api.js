const API_KEY = '28343249-1460158105f561498120f2a7a';

export const pageSize = 12;
export const fetchImages = async ({ searchName, currentPage = 1 }) => {
  return await fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw new Error(error);
    });
};


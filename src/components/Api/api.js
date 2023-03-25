import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImage = async (inputValue, pageNr) => {
  const response = await axios.get(`/?q=${inputValue}&page=${pageNr}&key=32598741-724a4b929e0e736aaf2a0adfe&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};
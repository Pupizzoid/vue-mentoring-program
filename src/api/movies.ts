import { httpClient } from '../global/httpClient.ts';

export default {
  async getMovies() {
    return httpClient.get('https://tame-erin-pike-toga.cyclic.app/movies');
  },
};

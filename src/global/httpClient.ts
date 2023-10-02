export const httpClient = {
  get(url: string) {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res: Response) => res.json());
  },
  post(url: string, data: BodyInit) {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    }).then((res: Response) => res.json());
  },
};

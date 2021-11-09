export const fetchUrl = (url) =>
  fetch(url, {
    headers: new Headers({
      Authorization: process.env.REACT_APP_API_KEY,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

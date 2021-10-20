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

export async function getBanner() {
  const fetchData = await fetchUrl(`${process.env.REACT_APP_BASE_URL}`);
  if (fetchData !== undefined) {
    const random_image =
      fetchData.photos[Math.floor(Math.random() * fetchData.photos.length)];
    return random_image.src;
  }
  return {};
}

export async function getMedia(url) {
  const response = await fetchUrl(url);

  if (response !== undefined) {
    return response;
  }
  return [];
}

export async function getPhotos(url) {
  const response = await fetchUrl(url);

  if (response !== undefined) {
    return response['photos'];
  }
  return [];
}

export async function getVideos(url) {
  const response = await fetchUrl(url);

  if (response !== undefined) {
    return response['videos'];
  }
  return [];
}

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

export async function getBanner(url) {
  const fetchData = await fetchUrl(url);
  if (fetchData !== undefined) {
    const random_image = await fetchData.photos[
      Math.floor(Math.random() * fetchData.photos.length)
    ];
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

// (async function getData() {
//   const response = await fetchUrl(
//     url +
//       `${params ?? '?'}page=${page}&per_page=${
//         process.env.REACT_APP_PER_PAGE
//       }`
//   );

//   if (response !== undefined) {
//     setHasNextPage(response.next_page);

//     if (medias.length !== 0) {
//       setMedias([...medias, ...response[contentType]]);
//       return response;
//     }
//     setMedias(response[contentType]);
//   }
// })();

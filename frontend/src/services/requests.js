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

export function createUser(signupInfo) {
  return fetch(process.env.REACT_APP_BACKEND_URL + '/users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...signupInfo }),
  }).then((response) => {
    return response.json().then((user) => user);
  });
}

export function getToken(email, password) {
  return fetch(process.env.REACT_APP_BACKEND_URL + '/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password }),
  }).then((response) => {
    return response.json().then(({ token }) => token);
  });
}

export function getUser(token) {
  return fetch(process.env.REACT_APP_BACKEND_URL + '/users/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((response) => {
    return response.json().then((users) => users[0]);
  });
}

export function addPhoto(token, photoId) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/photos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },

    body: JSON.stringify({
      photoId,
    }),
  }).then((res) => res.ok);
}

export function removePhoto(token, photoId) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/photos/${photoId}/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.ok);
}

export function addVideo(token, videoId) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/videos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },

    body: JSON.stringify({
      videoId,
    }),
  }).then((res) => res.ok);
}

export function removeVideo(token, videoId) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.ok);
}

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

export async function getProfileMedias(urls, contentType) {
  let responses = { [contentType]: [] };
  for (let url of urls) {
    const response = await fetchUrl(url);

    if (response !== undefined) {
      responses[contentType].push(response);
    }
  }
  return responses;
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

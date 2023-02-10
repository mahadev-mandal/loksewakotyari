export const setMyLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    // return localStorage.setItem(key, value);
    return Promise.resolve().then(function () {
      return localStorage.setItem(key, value);
    });
  }
  return null
}

export const getMyLocalStorage = (key) => {
  return Promise.resolve().then(function () {
    return localStorage.getItem(key);
  });
  // return null
}
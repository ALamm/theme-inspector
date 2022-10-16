const getData = async (url) => {
  // to avoid CORS issues, I used a proxy to make sure the response headers return the correct CORS info
  // otherwise the chrome browser blocks the returned data from displaying.
  // info about CORS and the proxy is found here: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

  // Starting November 28th, 2022, free Heroku Dynos (like the proxy used below)will no longer be available.
  // You must upgrade to paid plans by this date to ensure your apps continue to run and to retain your data
  const proxyURL = `https://protected-lowlands-94378.herokuapp.com/${url}`;
  try {
    console.log("proxyURL", proxyURL);
    const response = await fetch(proxyURL);
    const data = await response.json();
    if (data) return data;
  } catch (error) {
    console.error("Error from Fetch:", error);
    return error;
  }
};

export default getData;

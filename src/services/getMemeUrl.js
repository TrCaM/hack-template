const MEME_TYPES = ['dank', 'moderate', 'light', 'furry'];
const memeType = MEME_TYPES[Math.floor(Math.random() * MEME_TYPES.length)];

const getImagePromise = async function() {
  const axios = require('axios').default;
  const url = 'https://meme-api.glitch.me/' + memeType;
  try {
    const response = await axios.get(url);
    return response.data.meme;
  } catch (error) {
    return error;
  }
};

const memeUrl = async () => {
  const acceptedType = ['png', 'jpg', 'gif'];
  let fileType = link => link.split('.')[2];
  let url = await getImagePromise(memeType);

  while (!acceptedType.includes(fileType(url))) {
    url = await getImagePromise(memeType);
  }
  return url;
};

const memeList = async () => {
  const promises = [];
  for (let i = 0; i < 100; i++) {
    promises.push(memeUrl());
  }
  return Promise.all(promises);
};

export default memeList;

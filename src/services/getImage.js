const MEME_TYPES = ['dank', 'moderate', 'light', 'furry'];
const memeType = MEME_TYPES[Math.floor(Math.random() * MEME_TYPES.length)];

const getImagePromise = async function() {
  //   const request = new XMLHttpRequest();
  const axios = require('axios').default;
  const url = 'https://meme-api.glitch.me/' + memeType;
  try {
    const response = await axios.get(url);
    // console.log(response);
    return response['data']['meme'];
  } catch (error) {
    // console.error(error);
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

export default memeUrl;

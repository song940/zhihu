import https from 'https';

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

const get = url => 
  new Promise(resolve => https.get(url, resolve));

class Zhihu {
  top_search() {
    return Promise
      .resolve()
      .then(() =>  get('https://www.zhihu.com/api/v4/search/top_search'))
      .then(readStream)
      .then(JSON.parse)
  }
  trending() {
    return Promise
      .resolve()
      .then(() =>  get(`https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total`))
      .then(readStream)
      .then(JSON.parse)
  }
}

export default Zhihu;
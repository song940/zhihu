import Zhihu from '../index.js'

const zhihu = new Zhihu();

(async () => {
  const list = await zhihu.trending();
  console.log(list);
})();
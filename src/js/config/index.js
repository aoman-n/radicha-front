import development from './development';
import production from './production';

console.log(`config/${process.env.NODE_ENV}.js was loaded`);

const env =
  typeof process.env.NODE_ENV === 'undefined'
    ? 'development'
    : process.env.NODE_ENV;

const envConf = require(`./${env}.js`).default;

export default envConf;
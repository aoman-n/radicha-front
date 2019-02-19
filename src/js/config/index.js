console.log(`config/${process.env.NODE_ENV}.js was loaded`);

const env =
  typeof process.env.NODE_ENV === 'undefined'
    ? 'development'
    : process.env.NODE_ENV;

const envConf = require(`./${env}.js`).default;

console.log(envConf);
console.log(process.env.NODE_API_URL)

export default envConf;
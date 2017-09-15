import storeProd from './configureStore.prod';
import storeDev from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = storeProd;
} else {
  module.exports = storeDev;
}

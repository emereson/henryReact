import { configureStore } from '@reduxjs/toolkit';
import translation from './slices/translation';

export default configureStore({
  reducer: {
    translation,
  },
});

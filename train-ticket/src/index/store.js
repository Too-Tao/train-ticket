import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
      from: '北京',
      to: '上海',
      isCitySelectorVisible: false,
      currentSelectingLeftCity: false,
      cityData: null,
      isLoadingCityData: false,
      isDateSelectorVisible: false,
      departDate: Date.now(),
      highSpeed: false,
  },
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

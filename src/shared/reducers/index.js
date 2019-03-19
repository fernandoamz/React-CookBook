// depencences
import { combineReducers } from 'redux';

// Shared reducers
import device from './deviceReducer';

// Components reducers
import coins from '../../reducers/coinsReducer';

const rootReducer = combineReducers({
  coins,
  device
});

export default rootReducer;

import { combineReducers } from "redux";
import LineDataReducer from "./LineDataReducer";
import BarDataReducer from './BarDataReducer';
import TableDataReducer from './TableDataReducer';


const RootReducer = combineReducers({
  LineData : LineDataReducer,
  BarData : BarDataReducer,
  TableData : TableDataReducer,
});
 
export default RootReducer;
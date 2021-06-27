import * as actionType from "../constants/index";
import { ALL_ASSIGNMENTS } from "../constants";
import { addClass } from "../actions/index";

const assignmentReducer = (state = [], action) => {
  
   console.log(action.type);
   
  switch (action.type) {
    case ALL_ASSIGNMENTS:
    { return [action.payload.data];
    }  
    default:
    {  console.log("Invalid Action Type On assignment Reducer");
      
      
      return state;
  }
}
};

export default assignmentReducer;



import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import clientKitchen from "./clientKitchen.reducer";
import clientWipeDust from "./clientWipeDust.reducer";
import clientOtherRoom from "./clientOtherRoom.reducer";
import jobidReducer from "./jobid.reducer";
import chat from "./chat.reducer";
import clientBathroomReducer from "./clientBathroom.reducer";
import formList from "./formList.reducer";

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  clientKitchen, // will have an id and username if someone is logged in
  clientOtherRoom,
  chat,
  jobidReducer,
  clientWipeDust,
  clientBathroomReducer,
  formList,
});

export default rootReducer;

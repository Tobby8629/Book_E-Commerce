import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user/UserSlice";

type RootState = {
  users: {
    status: boolean;
    error: string[];
  };
};


const store = configureStore({
    reducer: {
      users: UserSlice,
    }
})

export default store
export type { RootState };
import { createSlice } from "@reduxjs/toolkit";

export interface infoType {
  userInfo: any;
  address: string | null;
  role: string;
  userName: string;
  userPk: number;
}

interface InitialStateType {
  userInfo: infoType | null;
}

const initialState: InitialStateType = {
  userInfo: null
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  }
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { getInfo } = user.actions;
export default user.reducer;
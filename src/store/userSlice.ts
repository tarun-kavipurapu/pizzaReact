// reducers.ts
import { createSlice,nanoid,PayloadAction } from "@reduxjs/toolkit";
 // Import your specific reducer

interface usernameState{
  username:string
}

const initialState:usernameState={
 username:'',   
}

export const userSlice = createSlice({
  name:'name',
  initialState,
  reducers:{
    setUserName:(state,action:PayloadAction<string>)=>{
      state.username=action.payload;
    }
  }
   })
   
   export const {setUserName}=userSlice.actions; // Export actions


export default userSlice.reducer;

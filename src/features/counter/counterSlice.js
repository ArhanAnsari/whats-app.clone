
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
name:null,
}

const counterSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
  generateName:(state,action)=>{
    state.name=action.payload.actualName;
    console.log(state.name);
  }
  }
});
export const generatedName=state=>state.userName.name;
export const {generateName} = counterSlice.actions
export default counterSlice.reducer




















// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   ToDoList:[]
// }

// const counterSlice = createSlice({
//   name: "ToDo_List",
//   initialState,
//   reducers: {
//   generartedList:(state,action)=>{
//     console.log(action)
//     state.ToDoList= [...state.ToDoList, action.payload.item]
//   }
//   }
// });
// export const generartedList_intialState = state => state.ToDo_List.ToDoList;

// export const { generartedList } = counterSlice.actions
// export default counterSlice.reducer
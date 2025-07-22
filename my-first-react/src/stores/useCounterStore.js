
import {create} from 'zustand';

const initialstate = {count:0}
const useCounterStore = create((set)=>({
  ...initialstate,
   increment: ()=> set((state) => ({count: state.count + 1})),
   decrement: ()=> set((state) => ({count: state.count - 1})),
}));




export default useCounterStore;

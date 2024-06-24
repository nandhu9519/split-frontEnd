// import {CONSTANTS} from '../actions';

// const intitalState = [];

// const listReducer = (state = intitalState, action)=>{

//         switch (action.type){
//         case CONSTANTS.GET_LIST_DATA:
//             return [...action.payload]

//         case CONSTANTS.ADD_LISTS:
//             const newList ={
//                 id: state.length,
//                 title:action.payload,
//                 cards:[],
//             }
//             return [...state, newList]; 

//         case CONSTANTS.ADD_CARD:
//             const newCard = {
//                 text: action.payload.text,
//                 id: action.payload.tempId
//             }

//             const newState = state.map(list =>{
//                 if(list._id === action.payload.listId){
//                     return {
//                         ...list,
//                         cards:[...list.cards,newCard]
//                     } 
//                 }else{
//                     return list;
//                 }
//             })
//             return newState;
            
//         case CONSTANTS.EDIT_CARD:
//             const newEditCard = {
//                 id: action.payload.cardId,
//                 text: action.payload.text   
//             }
//             const newEditState = state.map(list =>{
//                 if(list._id === action.payload.listId){
//                     let existing = [...list.cards]
//                     const index = existing.findIndex(element => element.id === action.payload.cardId);
//                     existing[index] = newEditCard
//                     return {
//                         ...list,
//                         cards:[...existing]
//                     } 
//                 }else{
//                     return list; 
//                 }
//             })
//             return newEditState

//         case CONSTANTS.EDIT_LIST_TITLE:
            
//             let updateState = [...state]
//             const newEditListTitle = state.map(list =>{ 
//                 if(list._id === action.payload.listId){
//                     let existing = list

//                     existing.title = action.payload.title

//                     updateState[action.payload.listTempId] = existing
//                     return updateState   
//                 }
//             })

//             return newEditListTitle[action.payload.listTempId]

//         case CONSTANTS.DRAG_HAPPENED:
//             const { droppableIdEnd,
//                 droppableIdStart,
//                 droppableIndexStart,
//                 droppableIndexEnd} = action.payload;
//             const nwState = [...state];
//             if(droppableIdStart === droppableIdEnd){
//                 const list = state.find(list=> droppableIdStart === list._id)
//                 const card = list.cards.splice(droppableIndexStart,1)
//                 list.cards.splice(droppableIndexEnd, 0 ,...card)               
//             } 
//             if(droppableIdStart !== droppableIdEnd){
//                 const listStart = state.find(list => droppableIdStart === list._id)
//                 const card = listStart.cards.splice(droppableIndexStart,1)
//                 const listEnd = state.find(list => droppableIdEnd === list._id)
//                 listEnd.cards.splice(droppableIndexEnd,0,...card)
//             }
//             return nwState
            
//         case CONSTANTS.DELETE_CARD:
//             const newDeleteState = state.map(list=>{
//                 if(list._id === action.payload.listId){
//                     let existing = [...list.cards]
//                     const index = existing.findIndex(element => element.id === action.payload.cardId);
//                     existing.splice(index,1)
//                     return {
//                         ...list,cards:[...existing]
//                     }   
//                 }else{
//                     return list
//                 }
//             })
//             return newDeleteState
//         case CONSTANTS.SET_DATE:
            
            
//         default:
//             return state;
//     }

// };

// export default listReducer;
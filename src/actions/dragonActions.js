export const ADD_MEMBER = 'ADD_MEMBER'

export function addMember(memberName) {
   // //Can do this, but better to do the other way below with the object in the reducer instead
   // return ({
   //    type: ADD_MEMBER,
   //    payload: {
   //       name: memberName,
   //       dragonStatus: false
   //    }
   // })
   return ({
      type: ADD_MEMBER,
      payload: memberName
   })
}
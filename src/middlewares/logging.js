// ES 5
// export function logging(store) {
//     return function (next){
//         return function (action){
//             console.log('pepepepe')
//             return next(action)
//         }
//     }
// }


// ES6
export const logging = store => next => action => {
    console.log( `Done: ${action.type}`)
    return next(action)
}
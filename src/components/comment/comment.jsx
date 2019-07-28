// import Taro from '@tarojs/taro'
// const foodKey = 'taro_meituan'

// export function getFood (food){
//   let store = Taro.getStorageSync(foodKey)
//   if(store&&store[food.id]){
//       return store[food.id].value
//   }else{
//       return 0;
//   }
// }

// export function setFood (food,value,callback){
//    if(food){
//       let store = Taro.getStorageSync(foodKey) 
//       if(store[food.id]){
//          store[food.id] = {value:value,...food}
//       }
//       Taro.setStorageSync(foodKey,store)
//       callback&&callback()
//    }
   
// }
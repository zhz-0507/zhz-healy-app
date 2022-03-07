
 export const  getLocation  = function(){
  if (navigator.geolocation){
    let options = {
      enableHighAccuracy : true, 
      maximumAge : 30000, 
      timeout :12000
    }
    navigator.geolocation.getCurrentPosition(options);
  }else{
    console.log('当前环境不支持')
  }
  
}

// getPosSuccess(pos){
//   console.log(`纬度:${pos.coords.latitude}  经度:${pos.coords.longitude}`)
// },
// getPosError(err){
//   console.log(err)
// }
  


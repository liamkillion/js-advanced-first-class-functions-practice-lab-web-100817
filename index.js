// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(ele){
    console.log(ele['name'])
  })
}

function logDriversByHometown(array,location){
  array.forEach(function(ele){
    if (ele['hometown']===location){
      console.log(ele['name'])
    }
  })
}

function driversByRevenue(array){
  newarray =  array.sort(function(a,b){
  if (a['revenue']>b['revenue']){
    return 1
  }
  })
  return newarray
}

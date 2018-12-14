var totalComb = 0
var total = 0
var num = 0;
var arr = [1, 2, 3, 4, 5, 6]
var newarr
var com
var i

function func1(n) {
  num = n
  for(i = 0; i < arr.length; i++) {
    com = [ ]
    com.push(arr[i])
    total = arr[i]
    var newarr = arr.slice(i + 1)
    func2(newarr)
  }
}

function func2(array) {
/*
  while (array.length > 1) {
    var total = arg
    var comb = [].push(arg);
    for (let i = 0; i < array.length; i++) {
      total += array[i]
      comb.push(array[i])
      if (total >= n) break;
    }
    if (total == n) console.log(comb)
    array = array.slice(1)
  }
}
*/


  //console.log(i, total, array)
  /*
  if ((total + array[0]) < num) {
    com.push(array[0])
    total += array[0]
  }
  */
  if ((total + array[0]) <= num / 2) {
    com.push(array[0])
    total += array[0]
  }
  if (total + array[0] == num) {
    com.push(array[0])
    console.log(com, array.length)
    totalComb++
    if (array.length > 1) {
      total = arr[i]
      com = [arr[i]]
      // console.log(com, array.length)
      // array = array.slice(1)
      // func2(array)
    }
  }
  if (total + array[0] > num || array.length <= 1) {
    //console.log(array.length)
    return
  }

  array = array.slice(1)
  func2(array)
}

func1(8)
console.log(totalComb)

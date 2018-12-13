var totalComb = 0
var total = 0
var num = 0;
var arr = [1, 2, 3, 4, 5]
var com
var i

function func1(n) {
  num = n
  var counter = arr.length
  for(i = 0; i < counter; i++) {
    com = []
    total = 0
    func2(arr)
    arr.shift()

  }
}

function func2(array) {
  //console.log(array)
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
      console.log(com, array.length)
      array = array.slice(1)
      func2(array)
    }
  }
  if (total >= num || array.length <= 1) {
    console.log(array.length)
    return
  }
  array = array.slice(1)
  func2(array)
}

func1(6)
console.log(totalComb)

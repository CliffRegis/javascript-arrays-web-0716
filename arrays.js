var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, ele){
			var copyarr = arr
			copyarr.unshift(ele)
			return copyarr
}

function addElementToEndOfArray(arr, ele){
			var copyarr = arr
			copyarr.push(ele)
			return copyarr
}

function destructivelyAddElementToBeginningOfArray (arr, ele){
	arr.unshift(ele)
	return arr

}
function destructivelyAddElementToEndOfArray (array, element){
	array.push(element)
	return array
}

function accessElementInArray(arr, ind){
 var bob = arr[ind]
 return bob
}

function destructivelyRemoveElementFromBeginningOfArray (arr){
	arr.shift(ele)
	return arr

}

function removeElementFromBeginningOfArray (arr){
	var coco = arr.slice(1)
	return coco

}


function removeElementFromEndOfArray (arr){
	 var coco = arr.slice(0, arr.length-1)
	return coco

}
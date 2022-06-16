function compareArrays(arr1, arr2) {   //Сравнить массивы
  let result = true;
  if (arr1.length<arr2.length)
   l=arr2.length 
   else 
   l=arr1.length;
  for(var i=0;i<l;i++)
     if(arr1[i]!==arr2[i]) {
      result = false;
     }     
  return result; // boolean
}

function advancedFilter(arr) {        //Фильтрация и преобразование массива
  let resultArr = [];
  let arr1 = arr.filter(elem => elem % 3 == 0);
  let arr2 = arr1.filter(elem => elem > 0);
  resultArr = arr2.map(x => x * 10);
 
  return resultArr; // array
}

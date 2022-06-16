function solveEquation(a, b, c){
  let arr = [];                           //Результатом функции должен быть **массив**, Если дискриминант меньше нуля, то корней нет (пустой массив)
  
  let D = (b*b) - (4*a*c);               //Вычислите дискриминант по формуле `b^2-4*a*c`

  if(D == 0){                             //Если дискриминант равен нулю, то корень один.
      arr.push(-b/(2*a));
  }
  else if(D > 0){                        //Если дискриминант больше нуля, то существует 2 решения уравнения.
      arr.push((-b + Math.sqrt(D) )/(2*a));
      arr.push((-b - Math.sqrt(D) )/(2*a));
  }
  return arr;
}
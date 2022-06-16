const result = promiseFunction();
console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
function successCallback() {
    console.log(`Промис работает верно!`);
  }
const result2 = result.then(successCallback);
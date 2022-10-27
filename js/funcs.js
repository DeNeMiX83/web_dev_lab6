function pow(){
    let x, n, result;

    x = document.getElementById("number1_1").value;
    x = parseInt(x);
    n = document.getElementById("number1_2").value;
    n = parseInt(n);

    result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }

    document.getElementById("result1").innerHTML = result
}

function gcd(){
    let x, y, result;

    x = document.getElementById("number2_1").value;
    x = parseInt(x);
    y = document.getElementById("number2_2").value;
    y = parseInt(y);

    while (x != y){
        if (x > y){
            x = x - y;
        }
        else {
            y = y - x;
        }

    }
    result = x;

    document.getElementById("result2").innerHTML = result
}

function minDigit(){
    let x, result;
  
    x = document.getElementById("number3").value;
    
    let min = 9;
    let arr = new Array();
    arr = x.split('');
    
    for(let i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) < min){
            min = arr[i];
        }
    }
    result = min;
    
    document.getElementById("result3").innerHTML = result
}

function pluralizeRecords(){
    let x, result;
  
    x = document.getElementById("number4").value;
    x = parseInt(x);
    
    if (x % 10 == 1 && x % 100 != 11){
      result = "В результате выполнения запроса была найдена " + x + " запись";
    }
    else if (x % 10 == 0 || x % 10 == 5 || x % 10 == 6 || x % 10 == 7 || x % 10 == 8 || x % 10 == 9 || x % 100 == 11 || x % 100 == 12 || x % 100 == 13 || x % 100 == 14){
      result = "В результате выполнения запроса было найдено " + x + " записей";
    }
    else if ((x % 10 == 2 || x % 10 == 3 || x % 10 == 4) && (x % 100 != 12 || x % 100 != 13 ||x % 100 != 14)){
      result = "В результате выполнения запроса были найдены " + x + " записи";
    }
    
  
    document.getElementById("result4").innerHTML = result
}
  
function fibo(){
    let n, result;

    n = document.getElementById("number5").value;
    n = parseInt(n);
    
    fib1 = fib2 = 1
    i = 0
    if (n === 1 || n === 2){
        result = 1;
    }else{
        while(i < n - 2){
            result = fib1 + fib2;
            fib1 = fib2;
            fib2 = result;
            i = i + 1;
    }}
    

    document.getElementById("result5").innerHTML = result
}
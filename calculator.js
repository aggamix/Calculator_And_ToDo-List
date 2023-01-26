let a = ''; // 1-е число
let b = ''; // 2-е число
let sign = ''; // знак для вычисления
let finish = false;

// для проверки нажатия кнопок
const nums = ['0','1','2','3','4','5','6','7','8','9','.'];
const arrSign = ['-','+','X','/'];

// мой экран калькулятора
const out = document.querySelector('.calc-screen p');

// очищаю все
document.querySelector('.ac').onclick = clearAll;

function clearAll(){
    a = '';
    b = '';
    sign = '';
    out.textContent = 0;
}

//работаем с event(объект события)
document.querySelector('.buttons').onclick = (event) => {
    // нажата НЕ кнопка
    if(!event.target.classList.contains('btn')) return;

    // нажата кнопка 'ac'
    if(event.target.classList.contains('ac')) return;

    // очищаю значения на экране
    out.textContent = '';

    // получаю значение из нажатой кнопки (2,-,% и т.д.)
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или "."
    if (nums.includes(key)){
        if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        return; 
    }

    // считаю проценты
    if (key === '%'){
        a = a / 100;
        out.textContent = a;
    }

    // если нажата кнопка с знаком "+, -, /, *"
    if (arrSign.includes(key)){
        sign = key;
        out.textContent = sign;
        return;
    }

    // нажата кнопка "="
    if (key === '='){
        if (b === '') b = a;     
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0'){
                    out.textContent = "Ошибка";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
};
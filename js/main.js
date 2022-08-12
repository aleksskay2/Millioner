// (function mainMusic(){
//     let mainSound = new Audio('Music.mp3')
//     mainSound.autoplay = true;
//     mainSound.play();
// })();

let soundMain = new Audio('Music.mp3');
let soundAnswerAccept = new Audio('Ответ принять.mp3')
let contentQuestion = document.querySelector('.content-question')
let countQuestion = 0;
let fiftyFifty = false;
let gameNew = document.querySelector('#game-new')

let money = [1000, 2000, 3000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000]
// document.addEventListener('click', () => {
//     soundMain.play();
// })


let questions = [
    {
        question:'Какая страна самая большая в мире ?',
        first: 'Китай',
        second: 'Россия ',
        third: 'США',
        forth: 'Канада',
        right: 'Россия'
    },
    {
        question:'Сколько падежей в русском языке?',
        first: 5,
        second: 4,
        third: 3,
        forth: 6,
        right: 6
    },
    {
        question:'Кто написал повесть "Два гусара"?',
        first: 'Лермонтов',
        second: 'Толстой ',
        third: 'Тургенев',
        forth: 'Пушкин',
        right: 'Толстой'
    },
    {
        question:'Как звучит имя Резерфорда?',
        first: 'Эрнест',
        second: 'Альберт',
        third: 'Карл',
        forth: 'Джон',
        right: 'Эрнест'
    },
    {
        question:'Самый маленький океан?',
        first: 'Тихий',
        second: 'Северный Ледовитый',
        third: 'Индийский',
        forth: 'Атлантический',
        right: 'Северный Ледовитый'
    },
    {
        question:'Что вставить вместо пропуска «в_юга»?',
        first: 'и',
        second: 'у',
        third: 'ь',
        forth: 'ъ',
        right: 'ь'
    },
    {
        question:'Как называется прямая, ограниченная точками?',
        first: 'Луч',
        second: 'Отрезок',
        third: 'Биссектриса',
        forth: 'Плоскость',
        right: 'Отрезок'
    },
    {
        question:'Каким животным было Серебряное копытце?',
        first: 'Олень',
        second: 'Лось',
        third: 'Антилопа',
        forth: 'Козел',
        right: 'Козел'
    },
    {
        question:'Если смешать краску красного и синего цвета, получится…',
        first: 'Зеленый',
        second: 'Желтый',
        third: 'Фиолетовый',
        forth: 'Черный',
        right: 'Фиолетовый'
    },
    {
        question:'У древних греков — Афина, а у древних римлян — …',
        first: 'Юнона',
        second: 'Минерва',
        third: 'Диана',
        forth: 'Венера',
        right: 'Минерва'
    }
];



// тут начинается
let numberQuestion = 0;
function showQuestion(countQuestion){
    // console.log(numberQuestion <= money.length)
    
    showAnswers()
    if (numberQuestion < money.length-1) {
        let questionRect = document.getElementById('questionRect');
        questionRect.innerText = questions[countQuestion].question;
        let first = document.getElementById('first');
        first.innerText = questions[countQuestion].first;
        
        let second = document.getElementById('second');
        second.innerText =  questions[countQuestion].second;
        
        let third = document.getElementById('third');
        third.innerText = questions[countQuestion].third;
        
        let forth = document.getElementById('forth');
        forth.innerText = questions[countQuestion].forth;
        numberQuestion++;
    }
    
    
    else {
        alert('Игра окончена! Вы стали МИЛЛИОНЕРОМ!!!' );
        hideAll();
        let gameWinnder = document.querySelector('#game-winner');
        gameWinnder.style.display = 'block';
        
       

        return
    }
    
}

showQuestion(countQuestion);

let variants = document.querySelectorAll('.variant');
let blocks = document.querySelectorAll('.rect__question');

// Для звуков
function sounds() {
    soundAnswerAccept.play();
   
}


function hideBlocks(){
    soundAnswerAccept.pause();

    for(let item of blocks) {
        item.classList.toggle('hide')
        
    }
    
    showSumma();
}


let blockSumma = document.createElement('div')
// показать сумму
function showSumma() {
   if (numberQuestion < money.length) {
        blockSumma.innerText = money[countQuestion];
        blockSumma.className = 'summa';
        contentQuestion.append(blockSumma)
   }
   else 
   {
        for(let item of blocks) {
            item.classList.add('hide')
        }
        // blockSumma.innerText = 'Игра завершена. Поздравляю, Вы стали миллионером!!!'
        // blockSumma.className = 'summa';
        // contentQuestion.append(blockSumma)
   }

}


function deleteGreen(){
    for(let item of variants){
         item.style.backgroundColor = 'rgb(38, 40, 155)'
    }
}




// показать все ответы, которые могут быть спрятаны подсказкой 50 на 50
function showAnswers()
{
    if (first.style.visibility === 'hidden')
    first.style.visibility = 'visible';
    
    if  (second.style.visibility === 'hidden')
    second.style.visibility = 'visible';

    if (third.style.visibility === 'hidden')
    third.style.visibility = 'visible';

    if (forth.style.visibility  === 'hidden')
    forth.style.visibility = 'visible';
    
}

function hideAnswers()
{
    // if (first.style.visibility  === 'visible')
    first.style.visibility = 'hidden';

    // if (second.style.visibility  === 'visible')
    second.style.visibility = 'hidden';

    // if (third.style.visibility  === 'visible')
    third.style.visibility = 'hidden';

    // if (forth.style.visibility  === 'visible')
    forth.style.visibility = 'hidden';
}




// на следущий шаг, нажимаем на кнопку суммы
blockSumma.addEventListener('click', ()=> {
   
    console.log('n - '+ money.length )
    if (numberQuestion < money.length) {
        
        blockSumma.classList.add('hide');
        for(let item of blocks) {
            item.classList.toggle('hide')
            hideAnswers();
        }
        deleteGreen();
        if (numberQuestion <= money.length)
        showQuestion(countQuestion);
        else  {
            hideBlocks()
        }
        
        
    }
    else
    alert('Игра завершена.')
    
    
})


let rigthAnswer ;
// переход на следущий ответ.
function nextAnswer(selVariant){
   
    let right = false;
    for(let item of questions){
        
        // определение правильного ответа
        if (item.right.toString() === selVariant)
        {
            rigthAnswer = selVariant;
            right = true;
            countQuestion++;
            setTimeout(() => {
                hideBlocks();
                hideAnswers();
                
            }, 5000);   
            
        }
       
       
       
    }
   
    return right
}


function isOrange()
{
    const notOr = false;
    for(let item of variants)
    if (item.style.backgroundColor === 'orange')
    {
         notOr = true;
    }
    
    return notOr;
}




// скрыть вопрос и варианты
function hideAll() {
    let varAndQuestion = document.querySelectorAll('.rect__question');
    for(let item of varAndQuestion)
    {
        item.style.display = 'none'
    }
    
}




// принимает ответ

for(let item of variants){
    item.addEventListener('click', () => {
        
        if (!isOrange())
        item.style.backgroundColor = 'orange'
        // console.log(item.textContent);
        sounds();
       
        let right = nextAnswer(item.lastElementChild.innerText);
        if (right === true) 
        {
            setTimeout(() => {
                if (right)
                item.style.backgroundColor = 'green'
    
                setTimeout(() => {
                    
                }, 3500);
    
            }, 3000);
        }
        else 
        {
            // Неверный ответ
            item.style.backgroundColor = 'orange'
            setTimeout(() => {
                hideAll();
                let gameOver = document.querySelector('#gameOver');
                gameOver.style.display = "block"
              
                gameNew.style.display = 'block'
                soundAnswerAccept.pause();
            }, 3000);
            
            
        }
              
    })
}

gameNew.addEventListener('click',()=>{
    window.location.reload();
})

// Органзицация работы подсказки 50 на 50.
// -------------------------------------------------------------------------------------------

// получение случайного числа
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// получение двух случайных чисел
function twoRandomNumbers(){
    a = getRandomInRange(1, 4);
    let b = getRandomInRange(1, 4)
    while (a === b && b != undefined) {
       b = getRandomInRange(1, 4)
        
    }
    return  [a, b]

}


// Подсказка 50 на 50
let procent = document.getElementById('procent');
procent.addEventListener('click', () => {
    if (fiftyFifty === false) {
        let first = document.getElementById('first')
        let second = document.getElementById('second')
        let third = document.getElementById('third')
        let forth = document.getElementById('forth')
    
        let twoNumbers = twoRandomNumbers()

        let nubmersId = {
            first: 1,
            second: 2,
            third: 3,
            forth: 4
        }

        let numberRight ;
        let blockQuestion = document.querySelectorAll('.block__question');
        for(let item of blockQuestion)
        {
            if (questions[countQuestion].right.toString() === item.innerText.toString())
            {
                numberRight = nubmersId[item.id];
                break;
            }
            
        }
        // console.log(twoNumbers[0])
        // console.log(twoNumbers[1])
    
        // при подсказке 50 на 50 не уберить верный вариант.
        while 
            (
        ((questions[countQuestion].right.toString() === first.innerText && twoNumbers[0] === numberRight) &&
        (questions[countQuestion].right.toString() === first.innerText &&  twoNumbers[1] === numberRight)) ||

        ((questions[countQuestion].right.toString() === second.innerText && twoNumbers[0] === numberRight) || 
        (questions[countQuestion].right.toString() === second.innerText &&  twoNumbers[1] === numberRight)) ||

        ((questions[countQuestion].right.toString() === third.innerText && twoNumbers[0] === numberRight) ||
        (questions[countQuestion].right.toString() === third.innerText &&  twoNumbers[1] === numberRight)) ||

         ((questions[countQuestion].right.toString() === forth.innerText && twoNumbers[0] === numberRight) || 
         (questions[countQuestion].right.toString() === forth.innerText &&  twoNumbers[1] === numberRight)) 
        ) 
        {
            
            twoNumbers = twoRandomNumbers();
            
        }
        
       
     

        let random = {
            a:twoNumbers[0],
            b:twoNumbers[1]
        }
      

        // скрываем два ответа
        switch (twoNumbers[0]) {
            case 1: {
                first.style.visibility = 'hidden';
                break;
            }
            case 2: {
                second.style.visibility = 'hidden';
                break;
            }
            case 3: {
                third.style.visibility = 'hidden';
                break;
            }
            case 4: {
                forth.style.visibility = 'hidden';
                break;
            }
        }
    
        switch (twoNumbers[1]) {
            case 1: {
                first.style.visibility = 'hidden';
                break;
            }
            case 2: {
                second.style.visibility = 'hidden';
                break;
            }
            case 3: {
                third.style.visibility = 'hidden';
                break;
            }
            case 4: {
                forth.style.visibility = 'hidden';
                break;
            }
        }
        fiftyFifty = true;    // была использована подсказка 50 на 50
    }
   
})

// кнопка burger-menu
// ------------------------------------------------- -------------------------------------------------
let burgerMenu = document.querySelector('.burger-menu')
burgerMenu.addEventListener('click', () => {
    let hint = document.querySelector('.hint')
    if ( hint.style.display === 'block' )
    hint.style.display = 'none';
    else {
        hint.style.display = 'block'
    }
    hint.style.position = 'absolute';
    hint.style.top = '70px'
    hint.style.right = '10px'
    
})



// Создание подсказки "звонок другу"
// ------------------------------------------------------------------------------------------------------------------------------------
function answerFriend () {
    
}
let phone = document.getElementById('phone');
phone.addEventListener('click', () =>{
    let soundFriend = new Audio('zvonok_drugu .mp3')
    soundFriend.play();
    let callAnswer = ['Я думаю, что правильный ответ A', 
    'Я думаю, что правильный ответ B', 
    'Я думаю, что правильный ответ C', 
    'Я думаю, что правильный ответ D' ]
    let call = document.querySelector('.call')
    call.style.display = 'block'
    let number = getRandomInRange(0, 3)
    callText.textContent = callAnswer[number];   
    setTimeout(() => {
        call.style.display = 'none'
        soundFriend.pause();
    }, 20000); 
})


// Создание подсказки "помощь залу"
// ------------------------------------------------------------------------------------------------------------------------------------
let holl = document.querySelector('#holl');
holl.addEventListener('click', () =>{
    let paths = ['img/hints/HelpHolldiffirent.JPG', 'img/hints/helpHollPicture2.JPG', 
'img/hints/helpHollPictureA.JPG'];
    let randomImg = getRandomInRange(0, 2);
    let helpHoll = document.querySelector('.help-holl');
    let hollId = document.querySelector('#holl-id');
    console.log(paths[randomImg])
    let soundHelpHoll = new Audio('pomosch_zala.mp3');
    soundHelpHoll.play();
    hollId.src = paths[randomImg]
    helpHoll.style.display = 'block';
    setTimeout(() => {
        hollId.style.display = 'none';
        soundHelpHoll.pause();
    }, 30000)

    
})


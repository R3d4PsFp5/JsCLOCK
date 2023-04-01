let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),

    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes')
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30
        
        secondArrow.style = `transform: rotate(${seconds}deg)`
        minuteArrow.style = `transform: rotate(${minutes}deg)`
        hourArrow.style = `transform: rotate(${hours}deg)`
    
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        setTimeout(() => clock(), 1000)
}

clock()


// Рекурсия это когда функция вызывает саму себя
// setTimeout() - позволяет выполнять действия с задержкой




// let i = 0;

// function rek() {
//     if(i < 100) {
//         console.log(i);
//         i++
//        setTimeout(() => rek(),1000)
//     }
   
// }
// rek()


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        removeActive()
        link.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


// Секундомер

    let secSecond = document.querySelector('.stopwatch__seconds'),
        secMinute = document.querySelector('.stopwatch__minutes'),
        secHour = document.querySelector('.stopwatch__hours'),

        startBTN = document.querySelector('.stopwatch__btn')

        point = document.querySelector('.tabsLink__span')

   
        
    let mas = ['active','active_clear']
    let stateBTN = 0;
    let statSetTime = 0;
        point.style.display = 'none'

    
    
    startBTN.addEventListener('click',() => {
        removeClaBTN()
        stateBTN == 2 ? stateBTN = 0 : stateBTN++
        switch(stateBTN) {
            case 1: startBTN.classList.add('active')
            break
            case 2: startBTN.classList.add('active_clear')
            break
        }
        if (startBTN.classList.contains('active')){
            startBTN.innerHTML = 'stop'
            statSetTime = 1
            TS()
            point.style.display = 'flex'
            point.style.background = 'white'
        }else if(startBTN.classList.contains('active_clear')){
            startBTN.innerHTML = 'clear'
            statSetTime = 0
            point.style.display = 'flex'
            point.style.background = 'red'
        }else{
            startBTN.innerHTML = 'start'
            statSetTime = 0
            point.style.display = 'none'
            clearAllsec()
        }
    })



    
    function TS(){
        secSecond.innerHTML++
            if(secSecond.innerHTML == 60){
                secMinute.innerHTML++
                secSecond.innerHTML = 0
            }else if(secMinute.innerHTML == 60){
                secHour.innerHTML++
                secMinute.innerHTML = 0
            }
        statSetTime == 1 ? setTimeout(() => {TS()}, 10) : ''
    }

    function removeClaBTN() {mas.forEach((el) => startBTN.classList.remove(el))}

    function clearAllsec() {
        secSecond.innerHTML = 0
        secMinute.innerHTML = 0
        secHour.innerHTML = 0
    }

    
    









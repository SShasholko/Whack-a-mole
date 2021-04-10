let button = document.getElementsByTagName('button')
let score = document.getElementById('score')
let timeLeft = document.getElementById('time-left')
let square = document.querySelectorAll('.square')
let grid = document.querySelector('.grid')
let scoreGame = 0
let timeLeftGame = 60


button[0].addEventListener('click', function () {

    button[0].classList.add('none')
    button[1].classList.remove('none')

    score.innerHTML = scoreGame
    timeLeft.innerHTML = timeLeftGame


    //Randomly select the square in which the mole will appear
    let numberSquare = 10;
    let oldNumberSquare = 10;

    function RandomNumberSquare() {
        numberSquare = Math.ceil((Math.random() * 9))
        if (numberSquare == oldNumberSquare) RandomNumberSquare()
        else oldNumberSquare = numberSquare
        return numberSquare
    }


    //Generation of time during which the mole will be visible
    function RandomTimeVisibleMole() {
        return (Math.round(Math.random() * (1200 - 900) + 900))
    }


    //The appearance of a mole in a random square
    let sq = 1

    function visibleMole() {
        // if (fin == 0) {
        document.getElementById(sq).classList.remove('mole')
        sq = RandomNumberSquare();
        document.getElementById(sq).classList.add('mole')
        setTimeout(visibleMole, RandomTimeVisibleMole())
        // }
    }



    //Tracking a click on a mole
    let moleSquare = 0;
    grid.addEventListener('click', function (event) {
        if (event.target != moleSquare) {
            if (event.target.classList.contains('mole')) {
                moleSquare = event.target;
                scoreGame++
                score.innerHTML = scoreGame
            }
        }
    })



    //Timer
    function timerFunction() {
        if (timeLeftGame > 0) {
            timeLeftGame--
            timeLeft.innerHTML = timeLeftGame
        } else {
            window.location.reload()
            return alert(`The game is over. Your score is ${scoreGame} moles`)
        }
    }
    setInterval(timerFunction, 1000)

    visibleMole()
})

button[1].addEventListener('click', function () {
    window.location.reload()
    return alert(`The game is over. Your score is ${scoreGame} moles`)
})
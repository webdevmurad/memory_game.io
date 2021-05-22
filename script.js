document.addEventListener('DOMContentLoaded', () => {

    const cardEasy = [
        {
            name: 'angular',
            img: 'images/easy/angular.png'
        },
        {
            name: 'ember',
            img: 'images/easy/ember.png'
        },
        {
            name: 'jquery',
            img: 'images/easy/jquery.png'
        },
        {
            name: 'react',
            img: 'images/easy/react.png'
        },
        {
            name: 'svelte',
            img: 'images/easy/svelte.png'
        },
        {
            name: 'vue',
            img: 'images/easy/vue.png'
        },
        {
            name: 'angular',
            img: 'images/easy/angular.png'
        },
        {
            name: 'ember',
            img: 'images/easy/ember.png'
        },
        {
            name: 'jquery',
            img: 'images/easy/jquery.png'
        },
        {
            name: 'react',
            img: 'images/easy/react.png'
        },
        {
            name: 'svelte',
            img: 'images/easy/svelte.png'
        },
        {
            name: 'vue',
            img: 'images/easy/vue.png'
        }
    ];
    
    const cardMedium = [
        {
            name: 'angular',
            img: 'images/medium/angular.png'
        },
        {
            name: 'ember',
            img: 'images/medium/ember.png'
        },
        {
            name: 'jquery',
            img: 'images/medium/jquery.png'
        },
        {
            name: 'react',
            img: 'images/medium/react.png'
        },
        {
            name: 'svelte',
            img: 'images/medium/svelte.png'
        },
        {
            name: 'vue',
            img: 'images/medium/vue.png'
        },
        {
            name: 'gulp',
            img: 'images/medium/gulp.png'
        },
        {
            name: 'material',
            img: 'images/medium/material.png'
        },
        {
            name: 'webpack',
            img: 'images/medium/webpack.png'
        },
        {
            name: 'sass',
            img: 'images/medium/sass.png'
        },
        {
            name: 'angular',
            img: 'images/medium/angular.png'
        },
        {
            name: 'ember',
            img: 'images/medium/ember.png'
        },
        {
            name: 'jquery',
            img: 'images/medium/jquery.png'
        },
        {
            name: 'react',
            img: 'images/medium/react.png'
        },
        {
            name: 'svelte',
            img: 'images/medium/svelte.png'
        },
        {
            name: 'vue',
            img: 'images/medium/vue.png'
        },
        {
            name: 'gulp',
            img: 'images/medium/gulp.png'
        },
        {
            name: 'material',
            img: 'images/medium/material.png'
        },
        {
            name: 'webpack',
            img: 'images/medium/webpack.png'
        },
        {
            name: 'sass',
            img: 'images/medium/sass.png'
        }
    ];
    
    const cardHard = [
        {
            name: 'c#',
            img: 'images/hard/c#.png'
        },
        {
            name: 'c++',
            img: 'images/hard/c++.png'
        },
        {
            name: 'dart',
            img: 'images/hard/dart.png'
        },
        {
            name: 'go',
            img: 'images/hard/go.png'
        },
        {
            name: 'haskell',
            img: 'images/hard/haskell.png'
        },
        {
            name: 'java',
            img: 'images/hard/java.png'
        },
        {
            name: 'javascript',
            img: 'images/hard/javascript.png'
        },
        {
            name: 'kotlin',
            img: 'images/hard/kotlin.png'
        },
        {
            name: 'mysql',
            img: 'images/hard/mysql.png'
        },
        {
            name: 'net',
            img: 'images/hard/net.png'
        },
        {
            name: 'node',
            img: 'images/hard/node.png'
        },
        {
            name: 'php',
            img: 'images/hard/php.png'
        },
        {
            name: 'python',
            img: 'images/hard/python.png'
        },
        {
            name: 'ruby',
            img: 'images/hard/ruby.png'
        },
        {
            name: 'swift',
            img: 'images/hard/swift.png'
        },
        {
            name: 'c#',
            img: 'images/hard/c#.png'
        },
        {
            name: 'c++',
            img: 'images/hard/c++.png'
        },
        {
            name: 'dart',
            img: 'images/hard/dart.png'
        },
        {
            name: 'go',
            img: 'images/hard/go.png'
        },
        {
            name: 'haskell',
            img: 'images/hard/haskell.png'
        },
        {
            name: 'java',
            img: 'images/hard/java.png'
        },
        {
            name: 'javascript',
            img: 'images/hard/javascript.png'
        },
        {
            name: 'kotlin',
            img: 'images/hard/kotlin.png'
        },
        {
            name: 'mysql',
            img: 'images/hard/mysql.png'
        },
        {
            name: 'net',
            img: 'images/hard/net.png'
        },
        {
            name: 'node',
            img: 'images/hard/node.png'
        },
        {
            name: 'php',
            img: 'images/hard/php.png'
        },
        {
            name: 'python',
            img: 'images/hard/python.png'
        },
        {
            name: 'ruby',
            img: 'images/hard/ruby.png'
        },
        {
            name: 'swift',
            img: 'images/hard/swift.png'
        },
    ];

    cardEasy.sort(() => 0.5 - Math.random())
    cardMedium.sort(() => 0.5 - Math.random())
    cardHard.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.game-images'),
        btnStartGame = document.querySelector('.game-button'),
        gameMenu = document.querySelector('.game-menu'),
        gameContent = document.querySelector('.game-content'),
        gameNew = document.querySelector('.game-new'),
        resultDisplay = document.querySelector('#result'),
        closeModalBtn = document.querySelector('.modal__close'),
        modalWindow = document.querySelector('#myModal'),
        saveCountBtn = document.querySelector('.modal__button'),
        namePerson = document.querySelector('.modal__input'),
        recordTable = document.querySelector('.game-record__table');
    
    let hasFlippedCard = false,
        firstCard = null, 
        secondCard = null,
        cardLevel = null,
        lockBoard = false,
        cardsWon = [],
        easyRecords = [],
        mediumRecords = [],
        hardRecords = [],
        staticArray = null,
        localName = null;

    btnStartGame.onclick = () => {
        const levelGame = document.querySelector('#standard-select');
        cardLevel = null;
        localName = null;
        cardsWon = [];
        resultDisplay.innerHTML = "0";
        switch(levelGame.value) {
            case 'easy':
                localName = 'easy'
                createBoard(cardEasy, levelGame.value, easyRecords, localName);
                cardLevel = cardEasy;
                break
            case 'medium': 
                localName = 'medium'
                createBoard(cardMedium, levelGame.value, mediumRecords, localName);
                cardLevel = cardMedium;
                break
            case 'hard': 
                localName = 'hard'
                createBoard(cardHard, levelGame.value, hardRecords, localName);
                cardLevel = cardHard;
                break
        }
    }

    function createBoard(cardArray, levelGame, array, localName) {
        gameMenu.style.display = 'none';
        gameContent.style.display = 'flex';

        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('data-name', cardArray[i].name);
            card.addEventListener('click', flipCard);
            grid.classList.add(levelGame);
            grid.appendChild(card);
            staticArray = array;
            
        }
        indicateRecords(localName)
    }

    // Переворачиваем карточку
    function flipCard() {
        if(lockBoard) return;
        if(this === firstCard) return;

        let cardId = this.getAttribute('data-id');
        this.classList.add('flip');

        if(!hasFlippedCard) {
            hasFlippedCard = true;
            this.setAttribute('src', cardLevel[cardId].img);
            firstCard = this;

            return;
        }

        hasFlippedCard = false;
        this.setAttribute('src', cardLevel[cardId].img);
        secondCard = this;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;

        isMatch ? disableCards() : unFlipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        cardsWon.push(firstCard, secondCard);
        resultDisplay.innerHTML = Number(resultDisplay.innerHTML) + 1;
        checkingOpenCards();
    }

    function unFlipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard.setAttribute('src', 'images/blank.png');
            secondCard.setAttribute('src', 'images/blank.png');
            
            resetBoard();
        }, 1000)
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    gameNew.onclick = () => {
        gameMenu.style.display = 'flex';
        gameContent.style.display = 'none';
        grid.innerHTML = '';
        grid.classList.remove('easy');
        grid.classList.remove('medium');
        grid.classList.remove('hard');
        hasFlippedCard = false,
        firstCard = null, 
        secondCard = null,
        cardLevel = null,
        lockBoard = false;
    }

    function checkingOpenCards() {
        if(cardsWon.length === cardLevel.length) {
            modalWindow.style.display = 'flex';
        }
    }

    closeModalBtn.onclick = () => {
        modalWindow.style.display = 'none';
    }

    saveCountBtn.onclick = () => {
        if(namePerson.value === '') {
            namePerson.classList.add('error');
        } else {
            namePerson.classList.remove('error');
            staticArray.push({name: namePerson.value, value: Number(resultDisplay.innerHTML)})
            console.log(staticArray);
            namePerson.value === '';
        }
        localStorage.setItem(localName, JSON.stringify(staticArray))
    }

    function indicateRecords(localName) {
        recordTable.innerHTML = '';
        if(localStorage.getItem(localName)) {
            JSON.parse(localStorage.getItem(localName)).map(record => {
                recordTable.innerHTML += convertToHtml(record);
            })
        } else {
            recordTable.innerHTML = `<div class="game-record">
                <p>Нет рекордов</p>
            </div>`;
        }
    }

    function convertToHtml(record) {
        return `<div class="game-record">
            <p>${record.name}</p>
            <p>${record.value}</p>
        </div>`
    }
    
})

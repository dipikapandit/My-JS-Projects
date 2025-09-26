let scores = JSON.parse(localStorage.getItem('scores')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      let isAutoPlaying = false;
      let intervalId;

      function autoplay() {

        if (!isAutoPlaying) {
          intervalId = setInterval(function() {
          const playerMove = pickCompMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }

      function playGame(playerMove) {
        const computerMove = pickCompMove();

        if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie';
          } else if (computerMove ==='Paper') {
            result = 'You Lost';
          } else {
            result = 'You Won';
          } 
        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You Won';
          } else if (computerMove ==='Paper') {
            result = 'Tie';
          } else {
            result = 'You Lost';
          }
        } else {
            if (computerMove === 'Rock') {
              result = 'You Lost';
            } else if (computerMove ==='Paper') {
              result = 'You Won';
            } else {
              result = 'Tie';
            }
        }

        if (result === 'You Won') {
          scores.wins++ ;
        } else if (result === 'You Lost') {
          scores.losses++ ;
        } else if (result === 'Tie') {
          scores.ties++ ;
        }

        localStorage.setItem('scores', JSON.stringify(scores));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove.toLowerCase()}.png">
      <img src="images/${computerMove.toLowerCase()}.png">
      Computer`;
      }

      function updateScoreElement() {
         document.querySelector('.js-score')
            .innerHTML = `Wins: ${scores.wins} Loses: ${scores.losses} Ties: ${scores.ties}`;
      }

      function pickCompMove() {
        const ranNum = Math.random();
        let computerMove = '';

        if (ranNum>= 0 && ranNum < 1/3) {
          computerMove = 'Rock';
        } else if (ranNum >= 1/3 && ranNum < 2/3) {
          computerMove = 'Paper';
        } else {
          computerMove = 'Scissor';
        }          
        return computerMove;      
      }

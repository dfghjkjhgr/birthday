import './style.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const $ = document.querySelector.bind(document);
$('#big-button').addEventListener('click', function() {
  let sign = $('#sign');
	switch (getRandomInt(3)) {
		case 2:
			if (sign.innerText !== 'Yay!'){
				sign.innerText = 'Yay!';
			} else {
				sign.innerText = 'Woohoo!';
			}
		case 1:
			setInterval(function() {
				$('body').style.backgroundColor = `hsl(${getRandomInt(256)}, 100%, 30%)`
			}, 1000);
		case 0:
			document.title = 'Yay!!!!!!';
	}
	
})

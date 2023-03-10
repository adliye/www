// Get document element
const textDisplay = document.querySelector('#text-display');
const inputField = document.querySelector('#input-field');

// Initialize typing mode variables
let typingMode = 'wordcount';
let wordCount;
let timeCount;

// Initialize dynamic variables
let randomWords = [];
let wordList = [];
let currentWord = 0;
let correctKeys = 0;
let correctWords = 0;
let wrongWords = 0;
let startDate = 0;
let timer;
let timerActive = false;
let punctuation = false;


	if($('#typing-area').length>0){
		setCookie('language', 'turkish', 90);
		setLanguage('turkish');
		// Get cookies
		getCookie('theme') === '' ? setTheme('light') : setTheme(getCookie('theme'));
		getCookie('language') === '' ? setLanguage('english') : setLanguage(getCookie('language'));
		getCookie('wordCount') === '' ? setWordCount(90) : setWordCount(getCookie('wordCount'));
		getCookie('timeCount') === '' ? setTimeCount(60) : setTimeCount(getCookie('timeCount'));
		getCookie('typingMode') === '' ? setTypingMode('time') : setTypingMode(getCookie('typingMode'));
		getCookie('punctuation') === '' ? setPunctuation('false') : setPunctuation(getCookie('punctuation'));
		
	}


// Find a list of words and display it to textDisplay
function setText(e) {
  e = e || window.event;
  var keepWordList = e && e.shiftKey;

  // Reset
  if (!keepWordList) {
    wordList = [];
  }
  currentWord = 0;
  correctKeys = 0;
  correctWords = 0; 
  wrongWords = 0;  
  inputField.value = '';
  timerActive = false;
  clearTimeout(timer);
  textDisplay.style.display = 'block';
  inputField.className = 'form-control';

  switch (typingMode) {
    case 'wordcount':
      textDisplay.style.height = 'auto';
      textDisplay.innerHTML = '';
      if (!keepWordList) {
        wordList = [];
        while (wordList.length < wordCount) {
          const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
          if (wordList[wordList.length - 1] !== randomWord || wordList[wordList.length - 1] === undefined || getCookie('language') === 'dots') {
            wordList.push(randomWord);
          }
        }
      }
      break;

    case 'time':
      textDisplay.style.height = '1.6rem';
      //document.querySelector(`#tc-${timeCount}`).innerHTML = timeCount;
      textDisplay.innerHTML = '';
      if (!keepWordList) {
        wordList = [];
        for (i = 0; i < 500; i++) {
          let n = Math.floor(Math.random() * randomWords.length);
          wordList.push(randomWords[n]);
        }
      }
  }

  if (punctuation) addPunctuations();
  showText();
  inputField.focus();
}

function addPunctuations() {
  if (wordList[0] !== undefined) {
    // Capitalize first word
    wordList[0] = wordList[0][0].toUpperCase() + wordList[0].slice(1);

    // Add comma, fullstop, question mark, exclamation mark, semicolon. Capitalize the next word
    for (i = 0; i < wordList.length; i++) {
      const ran = Math.random();
      if (i < wordList.length - 1) {
        if (ran < 0.03) {
          wordList[i] += ',';
        } else if (ran < 0.05) {
          wordList[i] += '.';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.06) {
          wordList[i] += '?';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.07) {
          wordList[i] += '!';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.08) {
          wordList[i] += ';';
        }
      }
    }
    wordList[wordList.length - 1] += '.';

    // Add quotation marks
  }
}

// Display text to textDisplay
function showText() {
  wordList.forEach(word => {
    let span = document.createElement('span');
    span.innerHTML = word + ' ';
    textDisplay.appendChild(span);
  });
  textDisplay.firstChild.classList.add('text-');
}

// Key is pressed in input field

if($('#typing-area').length>0){
	inputField.addEventListener('keydown', e => {
	  // Add wrong class to input field
	  switch (typingMode) {
		case 'wordcount':
		  if (currentWord < wordList.length) inputFieldClass();
		case 'time':
		  if (timerActive) inputFieldClass();
	  }
	  function inputFieldClass() {
		if (e.key >= 'a' && e.key <= 'z' || (e.key === `'` || e.key === ',' || e.key === '.' || e.key === ';' || e.key === '??' || e.key === '??' || e.key === '??'|| e.key === '??' || e.key === '??' || e.key === '??' || e.key === '??')) {
			
		  let inputWordSlice = inputField.value + e.key;
		  let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
		  inputField.className = inputWordSlice === currentWordSlice ?   'form-control border-success' : 'form-control';
		  if (inputWordSlice === currentWordSlice) { 
			document.getElementById("input-field").style.boxShadow = "rgb(8 122 27 / 25%) 0px 0px 0px 0.25rem";
		  } else { 
			document.getElementById("input-field").style.boxShadow = "rgb(171 13 13 / 20%) 0px 0px 0px 0.25rem";
		  }
		  
		} else if (e.key === 'Backspace') {
		  let inputWordSlice = e.ctrlKey ? '' : inputField.value.slice(0, inputField.value.length - 1);
		  let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
		  inputField.className = inputWordSlice === currentWordSlice ? 'form-control border-success' : 'form-control';
		  document.getElementById("input-field").style.boxShadow = "0 0 0 0.25rem rgba(32 107 196 / 25%)";
		  
		} else if (e.key === ' ' ||  e.code == "Space" ||  e.keyCode == 32) {
		  inputField.className = 'form-control';
		  document.getElementById("input-field").style.boxShadow = "";
		}
	  }

	  // If it is the first character entered
	  if (currentWord === 0 && inputField.value === '') {
		switch (typingMode) {
		  case 'wordcount':
			startDate = Date.now();
			break;

		  case 'time':
			if (!timerActive) {
			  startTimer(timeCount);
			  timerActive = true;
			}
			function startTimer(time) {
				
				document.querySelector(`#timer`).className = 'progress-bar progress-bar-striped bg-success';
				
			  if (time > 0) {
				//document.querySelector(`#tc-${timeCount}`).innerHTML = time;
				document.querySelector(`#timer`).style = 'width: ' + ((time / timeCount) * 100) + '%' ;
				if ((time / timeCount * 100) < 50) { 
					document.querySelector(`#timer`).className = 'progress-bar progress-bar-striped bg-warning';
				}
				
				if ((time / timeCount * 100) < 25) { 
					document.querySelector(`#timer`).className = 'progress-bar progress-bar-striped bg-danger';
				}
				
				//document.querySelector(`#timer`).innerHTML = time;
				timer = setTimeout(() => {
				  time--;
				  startTimer(time);
				}, 1000);
			  } else {
				timerActive = false;
				document.querySelector(`#timer`).style = 'width: 100%' ;
				document.querySelector(`#timer`).className = 'progress-bar progress-bar-striped';
				textDisplay.style.display = 'none';
				inputField.className = 'form-control';
				
				//document.querySelector(`#tc-${timeCount}`).innerHTML = timeCount;
				showResult();
			  }
			}
		}
	  }

	  // If it is the space key check the word and add correct/wrong class
	  if (e.key === ' ') {
		e.preventDefault();

		if (inputField.value !== '') {
		  // Scroll down text when reach new line
		  if (typingMode === 'time') {
			const currentWordPosition = textDisplay.childNodes[currentWord].getBoundingClientRect();
			const nextWordPosition = textDisplay.childNodes[currentWord + 1].getBoundingClientRect();
			if (currentWordPosition.top < nextWordPosition.top) {
			  for (i = 0; i < currentWord + 1; i++) textDisplay.childNodes[i].style.display = 'none';
			}
		  }

		  // If it is not the last word increment currentWord,
		  if (currentWord < wordList.length - 1) {
			if (inputField.value === wordList[currentWord]) {
			  textDisplay.childNodes[currentWord].classList.add('text-green');
			  correctKeys += wordList[currentWord].length + 1;
			  correctWords++;
			} else {
			  textDisplay.childNodes[currentWord].classList.add('text-red');
			  wrongWords++;
			}
			//textDisplay.childNodes[currentWord + 1].classList.add('text');
		  } else if (currentWord === wordList.length - 1) {
			textDisplay.childNodes[currentWord].classList.add('text-red');
			showResult();
		  }

		  inputField.value = '';
		  currentWord++;
		}

		// Else if it is the last word and input word is correct show the result
	  } else if (currentWord === wordList.length - 1) {
		if (inputField.value + e.key === wordList[currentWord]) {
		  textDisplay.childNodes[currentWord].classList.add('text-green');
		  correctKeys += wordList[currentWord].length;
		  correctWords++;
		  currentWord++;
		  showResult();
		}
	  }
	});
		
		
}

// Calculate and display result
function showResult() {
  let words, minute, acc;
  switch (typingMode) {
    case 'wordcount':
      words = correctKeys / 5;
      minute = (Date.now() - startDate) / 1000 / 60;
      let totalKeys = -1;
      wordList.forEach(e => (totalKeys += e.length + 1));
      acc = Math.floor((correctKeys / totalKeys) * 100);
      break;

    case 'time':
      words = correctKeys / 5;
      minute = timeCount / 60;
      let sumKeys = -1;
      for (i = 0; i < currentWord; i++) {
        sumKeys += wordList[i].length + 1;
      }
      acc = acc = Math.min(Math.floor((correctKeys / sumKeys) * 100), 100);
  }
  let wpm = Math.floor(words / minute);
	document.querySelector('#right-wing').innerHTML = `Dakika Ba???? Kelime: ${wpm} / Toplam Harf: ${acc}`;
	$('#score').html(correctWords);
	$('#isim').html(getCookie['isim']);
	if (minute == 3) { 
		$("#modal-team").modal('show');
	}
	
}

/*
// Command actions
document.addEventListener('keydown', e => {
  // Modifiers Windows: [Alt], Mac: [Cmd + Ctrl]
  if (e.altKey || (e.metaKey && e.ctrlKey)) {
    // [mod + t] => Change the theme
    if (e.key === 't') {
      setTheme(inputField.value);
    }
    // [mod + l] => Change the language
    if (e.key === 'l') {
      setLanguage(inputField.value);
    }

    // [mod + m] => Change the typing mode
    if (e.key === 'm') {
      setTypingMode(inputField.value);
    }

    // [mod + p] => Change punctuation active
    if (e.key === 'p') {
      setPunctuation(inputField.value);
    }
  } else if (!document.querySelector('#theme-center').classList.contains('hidden')) {
    if (e.key === 'Escape'){
      hideThemeCenter();
      inputField.focus();
    }
  } else if (e.key === 'Escape') {
    setText(e);
  }
});
*/

function setTheme(_theme) {
  const theme = _theme.toLowerCase();
  fetch(`themes/${theme}.css`)
    .then(response => {
      if (response.status === 200) {
        response
          .text()
          .then(css => {
            setCookie('theme', theme, 90);
            //document.querySelector('#theme').setAttribute('href', `themes/${theme}.css`);
            setText();
          })
          .catch(err => console.error(err));
      } else {
        console.log(`theme ${theme} is undefine`);
      }
    })
    .catch(err => console.error(err));
}

function setLanguage(_lang) {
  const lang = _lang.toLowerCase();
  fetch('./dist/texts/random.json')
    .then(response => response.json())
    .then(json => {
      if (typeof json[lang] !== 'undefined') {
        randomWords = json[lang];
        setCookie('language', lang, 90);

        if (lang === "arabic") {
            textDisplay.style.direction = "rtl"
            inputField.style.direction = "rtl"
        } else {
            textDisplay.style.direction = "ltr"
            inputField.style.direction = "ltr"
        }

        setText();
      } else {
        console.error(`language ${lang} is undefine`);
      }
    })
    .catch(err => console.error(err));
}

function setTypingMode(_mode) {
  const mode = _mode.toLowerCase();
  switch (mode) {
    case 'wordcount':
      typingMode = mode;
      setCookie('typingMode', mode, 90);
      document.querySelector('#word-count').style.display = 'inline';
      document.querySelector('#time-count').style.display = 'none';
      setText();
      break;
    case 'time':
      typingMode = mode;
      setCookie('typingMode', mode, 90);
      document.querySelector('#word-count').style.display = 'none';
      document.querySelector('#time-count').style.display = 'inline';
      setText();
      break;
    default:
      console.error(`mode ${mode} is undefine`);
  }
}

function setPunctuation(_punc) {
  const punc = _punc.toLowerCase();
  if (punc === 'true') {
    punctuation = true;
    setCookie('punctuation', true, 90);
    setText();
  } else if (punc === 'false') {
    punctuation = false;
    setCookie('punctuation', false, 90);
    setText();
  }
}

function setWordCount(wc) { // bura
  setCookie('wordCount', wc, 90);
  wordCount = wc;
  //document.querySelectorAll('#word-c > li').forEach(e => (e.className = 'list-group-item'));
  document.querySelectorAll('#word-c > li').forEach(e => {
    e.classList.remove('active');
  });
  document.querySelector(`#wc-${wordCount}`).className = 'list-group-item active';
  document.querySelector(`#wc-${wordCount}`).name = 'gokhan';
  setText();
}

function setTimeCount(tc) {
  setCookie('timeCount', tc, 60);
  timeCount = tc;
  document.querySelectorAll('#word-t > li').forEach(e => {
    e.classList.remove('active');
  });
  document.querySelector(`#tc-${timeCount}`).className = 'list-group-item active';
  setText();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}



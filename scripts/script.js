inputCalc = document.querySelector('.account')
resultCalc = document.querySelector('.result')

function input(i) {
	inputCalc.value = inputCalc.value + i
}

function result() {
	e = eval(inputCalc.value)
	
	if (e == undefined) {
		resultCalc.value = '0'
		inputCalc.value = '0'
	}
	else if (e == Infinity || e == -Infinity) { 
		resultCalc.value = '0'
		inputCalc.value = 'Dividing by zero is not allowed'
	} else {
		console.log(e)
		resultCalc.value = e
		inputCalc.value = e
	}
}

function backspace() {
	inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}

function reset() {
	inputCalc.value = ''
	resultCalc.value = ''
}
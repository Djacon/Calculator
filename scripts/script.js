inputCalc = document.querySelector('.account')
resultCalc = document.querySelector('.result')

num1 = ''
num2 = ''
value_of = ''
is_new = false

function input(i) {
	inputCalc.value += i
}

function backspace() {
	inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}

function reset() {
	inputCalc.value = ''
	resultCalc.value = ''
	value_of = ''
	num1 = ''
	num2 = ''
}

function percent() {
	answer = inputCalc.value / 100
	inputCalc.value = answer
	resultCalc.value = answer
}

function save_it(value) {
	if (num1 == '')
		num1 = Number(inputCalc.value)
	inputCalc.value = ''
	value_of = value
	is_new = true
}

function result() {
	ans = ''
	if (is_new || num2 == ''){
		num2 = Number(inputCalc.value)
		is_new = false
	}

	if (value_of == '+')
		ans = num1 + num2
	else if (value_of == '-')
		ans = num1 - num2
	else if (value_of == '*')
		ans = num1 * num2
	else if (value_of == '/')
		if (num2 == 0)
			ans = 'Ты тут самый умный штоли?'
		else
			ans = num1 / num2
	else if (num2 == 0)
		ans = ''
	else
		ans = num2

	inputCalc.value = ans
	resultCalc.value = ans
	num1 = ans
}

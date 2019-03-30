const oddChecker = (num) => {
	if( (num % 2) === 0) {
		return	'the number is even'
	}else{
		return 'the number is odd'
	}
}

console.log(oddChecker(13))
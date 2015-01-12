
var fibo = (function () {
	var cont = {};
	function fun(n) {
		var val;
		if (cont.hasOwnProperty(n)) {
			val = cont[n];
		}
		else {
			if (n === 0 || n === 1) {
			val = n;
			}
			else {
			val = fun(n - 1) + fun(n - 2);
			}
			cont[n] = val;
		}
		return val;
	}
	return fun;
	}());
	
this.console.log(fibo(5));

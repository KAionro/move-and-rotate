define(["Rote"],function(Rote){

	//ps  避免变量环境污染
	var divArr = document.querySelectorAll('.clickRoteDiv'),
		self = this,
		view = {};
	view.name = 'rotate';
	view.rotate = Rote;
	view.rotate.judgeElement(divArr,10);
})
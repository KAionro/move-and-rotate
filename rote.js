define("Rote",["matrix","Move"],function(matrix,Move){
	var ret = {};
	/**
	 * @function
	 * @name        judgeElement
	 * @description 判断是否为一个元素还是多个元素
	 * @Author      zhanglianga@ctrip.com
	 * @memberof    [memberof]
	 * @inner       [inner]
	 * @version     [version]
	 * @DateTime    2017-02-10
	 * @param       {string or Array}              ele  要旋转的元素
	 * @param       {number or string}              step 角度
	 * @return      {[type]}                   [description]
	 */
	ret.judgeElement = function (ele,step){
		var self = this;
		this.step = Number(step);
		if(typeof ele === 'string'){
			ele.addEventListener("mousedown",function(e){
				var val = e.currentTarget;
				self.setTimer(val,e);
			});
			document.addEventListener("mouseup",self.elementMouseUp.bind(self));
		}else{
			ele = Array.prototype.slice.call(ele);
			var num = 0;
			ele.forEach(function(val,index,arr){
				val.addEventListener("mousedown",function(e){
					var val = e.currentTarget;
					self.setTimer(val,e);
				});
				document.addEventListener("mouseup",self.elementMouseUp.bind(self));
			})
		}
	};

	ret.elementMouseDown = function(){
		var rote = this.getStyle('transform');
		/matrix\((.+)\)/ig.exec(rote);
		rote = RegExp.$1;
		rote = rote.split(',');
		this.rote = matrix.getmatrix(rote);
		matrix.gotoRote.call(this);
	};

	//鼠标抬起后运行的函数
	ret.elementMouseUp = function(){
		var self = this;
		if(self.onOff){
			self.onOff = false;
			Move.mousestop.call(self);
		}
		// clearInterval(self.timer);
	};
	//获取相应style属性的值
	ret.getStyle = function(attr){
		var self = this;
		if(window.getComputedStyle){
			return window.getComputedStyle(self.ele)[attr];
		} else {
			return this.ele.currentstyle(attr);
		}
	};
	//鼠标点击后运行的函数；
	ret.setTimer = function(val,e){
		var self = this;
		self.ele = val;
		self.onOff = true;
		clearInterval(this.timer);
		Move.mousemove.call(self);
		self.elementMouseDown();
		// self.timer = setInterval(self.elementMouseDown.bind(self),50)
	}

	var fun = function(){}
	fun.prototype = ret;
	return new fun();
})
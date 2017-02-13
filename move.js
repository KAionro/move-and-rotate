define('Move',["Rote"],function(Rote){
	var ret = {};
	//移动位置
	ret.drag = function(){
		this.ele.style.left = this.X + 'px';
		this.ele.style.top = this.Y + 'px';
	}

	//计算
	ret.count = function(e){
		if(this.onOff){
			// this.divWidth = e.offsetX;
			// this.divHeight = e.offsetY;
			this.divWidth = parseFloat(this.getStyle('width'))/2;
			this.divHeight = parseFloat(this.getStyle("height"))/2;

			this.X = e.clientX - this.divWidth;
			this.Y = e.clientY - this.divHeight;

			ret.drag.call(this);
		}
	}
	// 添加事件监听
	ret.mousemove = function(){
		var self = this;
		var onOff = this.getStyle('position');
		onOff == 'static' ? alert('你的div未设置position,该div不会移动') : '';
		this.ele.addEventListener('mousemove',ret.count.bind(self));
	}
	//移除事件监听
	ret.mousestop = function(){
		var self = this;
		this.ele.removeEventListener('mousemove',ret.count.bind(self));
	}
	return ret;
})
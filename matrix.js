define("matrix",[],function(){

//ps  底下这个算法是摘的别人的，我修改了一些；

	/* 
    * 解析matrix矩阵，0°-360°，返回旋转角度 
    * 当a=b||-a=b,0<=deg<=180 
    * 当-a+b=180,180<=deg<=270 
    * 当a+b=180,270<=deg<=360 
    * 
    * 当0<=deg<=180,deg=d; 
    * 当180<deg<=270,deg=180+c; 
    * 当270<deg<=360,deg=360-(c||d); 
    * */
    var ret = {};
    ret.getmatrix = function([a,b,c,d,e,f]){  
    	var arr = Array.prototype.slice.call(arguments[0]),
    		aa=Math.round(180*Math.asin(arr[0])/ Math.PI),
    		bb=Math.round(180*Math.acos(arr[1])/ Math.PI),
    		cc=Math.round(180*Math.asin(arr[2])/ Math.PI),
    		dd=Math.round(180*Math.acos(arr[3])/ Math.PI);  
        var deg=0;  
        if(aa==bb||-aa==bb){  
            deg=dd;  
        }else if(-aa+bb==180){  
            deg=180+cc;  
        }else if(aa+bb==180){  
            deg=360-cc||360-dd;  
        }  
        return deg>=360?0:deg;
    };

    //转动
    ret.gotoRote = function(){
    	this.ele.style.transform = 'rotate(' + (this.rote+this.step)%360 + 'deg)';
    }

    return ret;
})
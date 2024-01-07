function btnclick(_this, num){
    _this.classList.add("btn-custom");
    var res = document.getElementById("calc");
    res.value += num;
}

function btnafterclick(_this){
    _this.classList.add("afterclick");
}

function getResult(_this, val){
    _this.classList.add("btn-custom");
    var res = document.getElementById("calc");
    res.value = eval(res.value);

    if(val == "%"){
        getResult(_this);
    }
    else if(val=="sin"){
        res.value = Math.sin(res.value);
    }
    else if(val=="cos"){
        res.value = Math.cos(res.value);
    }
    else if(val=="tan"){
        res.value = Math.tan(res.value);
    }
    else if(val=="ln"){
        res.value = Math.log(res.value);
    }
    else if(val=="√"){
        res.value = Math.sqrt(res.value);
    }
    else if(val=="^"){
        res.value = Math.exp(res.value);
    }
    else if(val == "x2"){
        res.value = eval(res.value*res.value);
    }
}

function clearValue(_this){
    var res = document.getElementById("calc");
    res.value = "";
    _this.classList.add("btn-custom");
}

function del(_this) {
    _this.classList.add("btn-custom");
    var res = document.getElementById("calc");
    res.value = res.value.slice(0,-1);
}

function scientific(_this,val){
    _this.classList.add("btn-custom");
    var res = document.getElementById("calc");
    
    if(val=="π"){
        res.value = Math.PI;
    }
    else if(val == "%"){
        getResult(_this);
    }
    else if(val=="sin"){
        res.value = Math.sin(res.value);
    }
    else if(val=="cos"){
        res.value = Math.cos(res.value);
    }
    else if(val=="tan"){
        res.value = Math.tan(res.value);
    }
    else if(val=="ln"){
       res.value = Math.log(res.value);
    }
    else if(val=="√"){
        res.value = Math.sqrt(res.value);
    }
    else if(val=="!"){
        
    }
    else if(val == "x2"){
        res.value = eval(res.value*res.value);
    }
    else if(val == "e"){
        res.value = Math.exp(res.value);
    }
}

function factorial(_this){
    var i;
    _this.classList.add("btn-custom");
    var res = document.getElementById("calc");
    var v = res.value;
    console.log(res.value);
    for(i=(v-1); i>=1; i--){
        v=v*i;
    }
    res.value= v;
}


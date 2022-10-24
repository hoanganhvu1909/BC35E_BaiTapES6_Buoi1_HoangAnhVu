tinhTB = (param) => {
    let tb = 0;
    switch(param.length){
        case 3: {
            tb = ((param[0] + param[1] + param[2]) / 3).toFixed(2); 
            document.querySelector('#tbKhoi1').innerHTML = tb;
        }; break;
        case 4: {
            tb = ((param[0] + param[1] + param[2] + param[3]) / 4).toFixed(2); 
            document.querySelector('#tbKhoi2').innerHTML = tb;
        }; break;
    }
}

document.querySelector('#btnKhoi1').onclick=function(){
    let arrInput = document.querySelectorAll('#khoi1 input');
    var arrDiem = [];
    for (let input of arrInput){
        let {id, value} = input;
        diem = Number(value);
        arrDiem.push(diem)
    }
    console.log(arrDiem);
    tinhTB(arrDiem)
}

document.querySelector('#btnKhoi2').onclick=function(){
    let arrInput = document.querySelectorAll('#khoi2 input');
    var arrDiem = [];
    for (let input of arrInput){
        let {id, value} = input;
        diem = Number(value);
        arrDiem.push(diem)
    }
    console.log(arrDiem);
    tinhTB(arrDiem)
}

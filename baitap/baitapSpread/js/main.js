let text = document.querySelector('.heading').textContent;
let textHover = [...text];
document.querySelector('.heading').innerHTML='';
for(let kiTu in textHover){
    // console.log(textCre[char]);
        document.querySelector('.heading').innerHTML += `
        <span>${textHover[kiTu]}</span>`;  
}
let string="";
let data=document.querySelectorAll('.number');
console.log(data);
Array.from(data).forEach((elt)=>{
    elt.addEventListener('click',(event)=>{
        // console.log(elt.innerHTML);
        if(elt.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(elt.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(elt.innerHTML=='X'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else{
        string=string+elt.innerHTML;
        console.log(string);
        console.log(document.getElementsByTagName('input'));
        document.querySelector('input').value=string;}
    })
})
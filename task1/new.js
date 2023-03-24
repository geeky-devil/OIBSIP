const ele=document.getElementById('op')
const cur=document.getElementById('str')
let s=''
let ops=['*','+','-','/']
function fun1(x){
    if(s[s.length-1]==x){
        alert('invalid expression')
        console.log(typeof(eval(x)));
        if (s[s.length-1]==x){ console.log(s[s.length-1]);}
        else {s=s+x;}
    }
    {cur.innerText=ele.innerText;}
    if(x=="AC") {s="0"; ele.innerText=s; cur.innerText=s} 
    else {
        s=s+x;
        cur.innerText=s;
        ele.innerText=eval(s);    
    }
}
function fun2(){cur.innerText=ele.innerText; ele.innerText=0;}
function del(){s=s.substring(0,s.length-1); cur.innerText=s;}
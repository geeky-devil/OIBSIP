
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var li=document.getElementById('t_list');
var ip_box=document.getElementById('l');
var page=document.getElementById('body')


var divs=[];

li.addEventListener('click',function(e){
    const tar=e.target;
    if(tar.matches('button')){
        li.removeChild(tar.parentNode);
    }
})
ip_box.addEventListener('click',function(e){
    if(e.target.matches('button')){
        var desc=document.getElementById("desc");
        var title=document.getElementById("title");
        if(title.value==null || title.value=="") alert("no title");
        else{
            var cur_tit=document.getElementById("cur_title");
            var cur_d=document.getElementById("cur_desc");
            var d=document.getElementById("date");
            var dt=new Date();
            cur_tit.innerText=title.value;
            cur_d.innerText=desc.value;
            d.innerText= dt.getDate() +" "+days[dt.getUTCDay()]+" "+dt.getFullYear();
            title.value=null;
            desc.value=null;
            var dem=document.getElementById('op').cloneNode(true);
            dem.id="t";
            dem.hidden=false;
            dem.childNodes[1].id="n_title";
            dem.childNodes[5].id="n_date";
            dem.childNodes[3].id="n_desc";
            li.appendChild(dem);
        }
    }
})   

function save(){
    localStorage.setItem('html',li.innerHTML);
    
}

function get(){
    li.innerHTML=localStorage.getItem('html');
    console.log(divs)
    title.value=null;
    desc.value=null;
    cur_tit="";
    cur_d='';

}

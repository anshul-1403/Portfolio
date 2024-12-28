document.addEventListener('DOMContentLoaded',(event)=>{
    let text=["Anshul","a Full Stack Developer","a Coder"];
    let count=0;
    let index=0;
    let current='';
    let letter='';
    (function type(){
        if(count==text.length)
        {
            count=0;
        }
        current=text[count];
        letter=current.slice(0,++index);
        const h1=document.querySelector('.home .left h1');
        h1.textContent=letter;
        if(letter.length==current.length)
        {
            count++;
            index=0;
            setTimeout(type,2000);
        }
        else
        {
            setTimeout(type,90);
        }
    }())
})

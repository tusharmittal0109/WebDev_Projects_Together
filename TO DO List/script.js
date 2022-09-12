
function AddTask(value){
    const li=document.createElement("li");
    li.classList.add("notDone");
    li.textContent=value;
    const ul=document.querySelector('ul');
    console.log(23);
    ul.append(li);    
}
//const EntryValue=document.querySelector("input");
//let text=EntryValue.value;
const buttons=document.querySelectorAll(".two");
buttons.forEach(element=>{
    //add a EL here
    element.addEventListener("click",function(e){
        if(e.target.textContent==="Add"){
            const EntryValue=document.querySelector("input");
            let text=EntryValue.value;
            if(text==""){
                console.log("no text");
            }else{
                AddTask(text);
                DoneOnes();
                EntryValue.value=null;
                
            }
        }else{
            Remove();
        
        }
    })
})
function Remove(){
    const all=document.querySelectorAll("li");
    console.log(all);
    all.forEach(e=>{
        let test=e.getAttribute('class');
        if(test.includes('done')){
            e.remove();
            return true;
        }
        
    })
}
function DoneOnes(){
    const all=document.querySelectorAll("li");
    console.log(all);
    all.forEach(o=>{
        o.addEventListener("click",(e)=>{
            const select=e.target;
            if(select.tagName=="LI"){
                select.style.textDecoration="line-through";
                select.classList.add("done")
            
            }
        })
    })
}


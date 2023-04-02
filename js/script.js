let ulDOM=document.querySelector('#list')
let inputDOM=document.querySelector('#task')
let liveToastDOM=document.querySelector('#liveToast')
const TASK=[]
const isEmpty=str=>!str.trim().length;
const taskCompleteSymbol=`<span aria-hidden="true">&#10004;</span>`


ulDOM.addEventListener('click',function(e){
    let clickedItem=e.target
    var index=Array.prototype.indexOf.call(ulDOM.children,clickedItem)
    taskComplete(index)
})


function newElement(){
    let inputContent=inputDOM.value
    if(!isEmpty(inputContent)){
        addItem(inputContent)
        $('#liveToastsuc').toast('show')
    }else{
        $('#liveToast').toast('show')
    }
}


const addItem=(task)=>{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${task}  
    <button type="button" onclick=removeElement(this) class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
        </button>
    `
    ulDOM.append(liDOM)
    TASK.push(task)
    localStorage.setItem('gorevler',JSON.stringify(TASK))

    
}
function removeElement(element){
    let li=element.parentNode
    let ul=li.parentNode
    let index=Array.from(ul.children).indexOf(li);
    TASK.splice(index,1)
    ul.removeChild(li)    
}

function taskComplete(index){
    let isClicked=false
    let li=ulDOM.getElementsByTagName('li')[index]
   
    li.addEventListener('click',function(){
            let spanDom=document.createElement('span')
                spanDom.style.float="left"
                li.style.textDecoration="line-through"
                li.style.backgroundColor="#24647F"
                li.style.color="white"
                spanDom.style.color="white"
                spanDom.innerHTML="&#10003;"
                li.append(spanDom)
    })
}







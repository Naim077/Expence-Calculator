const btn=document.querySelector("#btn");
const input=document.querySelector("#input");
const span=document.querySelector(".cost");
const table=document.querySelector('table');
let arr=JSON.parse(localStorage.getItem("lists")) || [];
const initialtotal=arr.reduce(sum,0);
span.textContent=initialtotal;

arr.forEach((element,index) => {
    const tr=document.createElement('tr');
    const tdprice=document.createElement('td');
    const tditem=document.createElement('td');
    tditem.textContent=`Item-${index+1}`
    tdprice.textContent=`${element}`;
    tr.append(tditem,tdprice);
    table.append(tr);
});

input.addEventListener('keydown',(event)=>{
    if(event.key==='Enter')
        btn.click();
})

btn.addEventListener('click',()=>{
    
    if(!input.value){
        alert("Input can't be Empty");
        input.value="";
        return;
    }
    if(isNaN(Number(input.value))){
        alert("Input must be a number");
        input.value="";
        return;
    }
    if(Number(input.value)<=0){
        alert("Amount must be greater than 0");
        input.value = "";
        return;
    }
    arr.push(Number(input.value));

   const tr=document.createElement('tr');
    const tdprice=document.createElement('td');
    const tditem=document.createElement('td');
    tditem.textContent=`Item-${arr.length}`
    tdprice.textContent=`${input.value}`;
    tr.append(tditem,tdprice);
    table.append(tr);

    let totals=arr.reduce(sum,0);

    span.textContent=totals;
    localStorage.setItem("lists",JSON.stringify(arr));
  
    input.value="";
})

function sum(total,element){
    return total+element;
}

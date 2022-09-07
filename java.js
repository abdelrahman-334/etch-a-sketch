function createGrid(){
    
    let row=prompt('enter the number of rows 1-100');
    let col=prompt('enter the number of columns 1-100');
    for(let i=0;i<row;i++)
    {
    let line=document.createElement("div");
    line.setAttribute('id',`grid`);
    for(let k=0;k<col;k++)
    {
    let grid=document.createElement("div");
    grid.style.border="solid";
    grid.style.padding="10px";
    grid.style.backgroundColor="#0DCE3A";
    grid.setAttribute('id',`block`);
    line.appendChild(grid);
    }
    document.getElementById("container").appendChild(line);
}

     let blocks=document.querySelectorAll('#block');
     blocks.forEach(block => {
        block.addEventListener('mouseover',function(){
        block.style.backgroundColor=`#${generateRandomHexa()}`;
    })
});}
let clear=document.getElementById('clear');
clear.addEventListener('click',function()
{
    let blocks=document.querySelectorAll('#block');
     blocks.forEach(block =>{
        block.style.backgroundColor="#0DCE3A";
     })
})
let start=document.getElementById('start');
let gridExist=0;

start.addEventListener('click',function(){
    if(gridExist==0)
    {
    createGrid();
    gridExist++;
    }
    else
    {
    blocks=document.querySelectorAll('#block');
    blocks.forEach(block =>{
        block.remove();
     })
     createGrid();
    }
});

function generateRandomHexa()
{
    let hexa=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let h='';   
    for(let i=0;i<6;i++)
    {
        let x = Math.floor((Math.random() * 16) + 1);
        h=h+hexa[x];
    }
    return h;
}
document.querySelector("button[name='and']").addEventListener("click",(e)=>{
    const num1 = Number(document.querySelector("input[name='num1']").value);
    const num2 = Number(document.querySelector("input[name='num2']").value);
    const result = num1 & num2 ;
    document.querySelector("input[name='num3']").value=result;
})
document.querySelector("button[name='or']").addEventListener("click",(e)=>{
    const num1 = Number(document.querySelector("input[name='num1']").value);
    const num2 = Number(document.querySelector("input[name='num2']").value);
    const result = num1 | num2 ;
    document.querySelector("input[name='num3']").value=result;
})
document.querySelector("button[name='xor']").addEventListener("click",(e)=>{
    const num1 = Number(document.querySelector("input[name='num1']").value);
    const num2 = Number(document.querySelector("input[name='num2']").value);
    const result = num1^num2 ;
    document.querySelector("input[name='num3']").value=result;
})
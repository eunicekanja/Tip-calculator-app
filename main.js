'use strict'
const buttons=document.querySelectorAll('.btn');
const geusts=document.querySelector('.geust');
const tipAmount=document.querySelector('.tip')
const totalTip=document.querySelector('.total')
const resetBtn=document.querySelector('.reset')
const forms=document.querySelector('.form')
const customBtn=document.querySelector('.customBtn')
const tipsContainer=document.querySelector('.tips')
const customContainer=document.querySelector('.customTip')

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const tips=Number(e.currentTarget.value)
        geusts.addEventListener('keypress',function(e) {
            let bill=document.querySelector('.amountNum').value;
            const geusts=document.querySelector('.geust').value;
            if(e.key==='Enter'){
                const tipPerson=(bill*tips)/geusts;
                const totalPerson=(bill/geusts)+tipPerson;
                tipAmount.innerHTML=`$${Math.ceil(tipPerson)}`
                totalTip.innerHTML=`$${Math.ceil(totalPerson)}`
            }
        })
    })
})

resetBtn.addEventListener('click',function(){
    tipAmount.innerHTML='$00.00'
    totalTip.innerHTML='$00.00'
    tipsContainer.style.display='block'
    customContainer.style.display='none'
})

const calcNew=function(){
geusts.addEventListener('keypress',function(e){
        let bill=document.querySelector('.amountNum').value;
        const customTip=document.querySelector('.tipCustom').value
        const geusts=document.querySelector('.geust').value;
        const newTip=Number(customTip)
        const newTipPerson=(newTip/geusts)
        const newTipTotal=(bill/geusts)+newTipPerson
    if(e.key==='Enter'){
        tipAmount.innerHTML=`$${Math.ceil(newTipPerson)}`
        totalTip.innerHTML=`$${Math.ceil(newTipTotal)}`
        console.log(newTipPerson,newTipTotal,geusts)
    } 
})
}
customBtn.addEventListener('click',function(){
    tipsContainer.style.display='none'
    customContainer.style.display='block'
    calcNew()
   
})

   

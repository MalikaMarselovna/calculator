const input1 = $('.number-1')
const input2 = $('.number-2')
const btnPlus = $('.number-1')
const result = $('.result')

btnPlus.on('click', function(){
    let sum = +input1.val() + +input2.val()
    result.text(sum)
})

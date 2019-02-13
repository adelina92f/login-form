let $inputs = $('input');
$(function(){
    $inputs.on('change', function(){
        let value = $(this).val();
        if(value !== ''){
$(this).addClass('focus');
        }else{
$(this).removeClass('focus')
        }
    })
})
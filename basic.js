$(document).ready(function(){
    // 3性別懷孕判斷
    $("input[name=sex]").on('click', function() { 
        var sex = $('input[name=sex]:checked').val();
        if(sex =='boy'){
            $('input[name = pregnant]').attr('disabled', true);
        }
        else if(sex=='girl'){
            $('input[name = pregnant]').removeAttr('disabled');
        }     

    // 3性別哺乳判斷
        if(sex=='boy'){
            $('input[name = nursing]').attr('disabled', true)
        }
        else if(sex=='girl'){
            $('input[name = nursing]').removeAttr('disabled');
        } 
     } );

    //  8教育程度判斷
     $("select[name=education_level]").on('click', function() { 
     var selectVal = $('[name=education_level]').val()
     if(selectVal=='education_other'){
         $('.other').removeAttr('disabled');
     }
     else{
         $('.other').attr('disabled',true);
     }
    } );

    // 9素食判斷
    $("select[name=vegetarian]").on('click', function() { 
        var selectVal = $('[name=vegetarian]').val()
        if(selectVal=='vegetarian_other'){
            $('.vegetarian_other').removeAttr('disabled');
        }
        else{
            $('.vegetarian_other').attr('disabled',true);
        }
       } );

    // 13判斷牙齒痛
    $("select[name=mouth_tooth]").on('click', function() { 
        var selectVal = $('[name=mouth_tooth]').val()
        if(selectVal=='mouth_tooth7'){
            $('.mouth_tooth7').removeAttr('disabled');
        }
        else{
            $('.mouth_tooth7').attr('disabled',true);
        }
       } );

    //    驗證
    $(function(){
        $('#form').validate({

          
        /* 常用檢測屬性
       required:必填
       noSpace:空白
       minlength:最小長度
       maxlength:最大長度
       email:信箱格式
       number:數字格式
       url:網址格式https://www.minwt.com
       */
       onkeyup: function(element, event) {
         //去除左側空白
         var value = this.elementValue(element).replace(/^\s+/g, "");
         $(element).val(value);
        },

        rules: {
          name: {
            required: true
          },
          verification_code:{
            required: true,
            minlength: 8,
            number: true
          },
          sex:{
            required: true
          },
          purchase_date:{
            required: true
          },
          weight:{
            required: true,
            range: [1, 300]
          },
          height:{
            required: true,
            range: [100, 300]
          },
          activity:{
            required: true,
          },
          education_level:{
            required: true,
          },
          vegetarian:{
            required: true,
          },
          mouth_tooth:{
            required: true,
          },

          eating_habit:{
            required: true,
          },
          tooth:{
            required: true,
          },
          oil_compare:{
            required: true,
          },
          pregnant:{
            required: true,
          },
          nursing:{
            required: true,
          },
        },



        messages: {
          name: {
            required:'必填'
          },
          verification_code: {
            required:'必填',
            minlength:'不得少於8位',
            number:'編號需為數字'
          },
          sex:{
            required: '必填'
          },
          purchase_date:{
            required: '必填'
          },
          purchase_date:{
            required: '必填',
          },
          weight:{
            required: '必填',
            range:'1公斤至300公斤之間'
          },
          height:{
            required: '必填',
            range:'100公分至300公分之間'
          },
          activity:{
            required: '必填',
          },
          education_level:{
            required: '必填',
          },
          vegetarian:{
            required: '必填',
          },
          mouth_tooth:'必填',
          eating_habit:{
            required: '必填',
          },
          tooth:{
            required: '必填',
          },
          oil_compare:{
            required: '必填',
          },

          pregnant:{
            required: '必填',
          },
          nursing:{
            required: '必填',
          },
       
        },
        submitHandler: function(form) {
          form.submit();
        }
  });

});
})
jQuery.extend(jQuery.validator.defaults,
  {
      errorPlacement: function (error, element) {
          if (element.is(':radio') || element.is(':checkbox')) {
              var eid = element.attr('name');
              $('input[name=' + eid + ']:last').next().after(error);
          }
          else {
              error.insertAfter(element);
          }
      }
  });




  //submit
  $(".btn").click(function(){
    $("form").submit();
  });  
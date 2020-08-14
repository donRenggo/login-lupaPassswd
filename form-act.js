$(document).ready(function(){

  $('#allForm-user').submit(function(){
    $('#loading-submit').show();
    var ling_sukses = $(this).attr('ling-sukses')
     $.ajax({
        type    : 'POST',
        url     : $(this).attr('action'),
        data    : $(this).serialize(),
        success : function(data){
            data = JSON.parse(data);
            if(data.err == null){
                $('#alert-update').show();
                alert("Terima Kasih\nPesan Anda sudah terkirim")
                ling(ling_sukses);
                return;
            } //success accessed atriburt class
            console.log(data.err)
            var e = data.err
            $('.err').each(function(i){
              var id = $(this).attr('id');
              $('div#'+id).text(e[id]);
            })
        }
     });
     return false;
 });
 $('#allForm').submit(function(){
    $('#loading-submit').show();
    var ling_sukses = $(this).attr('ling-sukses')
     $.ajax({
        type    : 'POST',
        url     : $(this).attr('action'),
        data    : $(this).serialize(),
        success : function(data){

            $('#loading-submit').hide("slow") // on Page Admin
            $('#alert-update').show();
                 //onPage admin
            data = JSON.parse(data);
            if(data.err == null){
              //ling(ling_sukses);
              if(ling_sukses != '' ) { ling(ling_sukses); }
              return;
            } //success accessed atriburt class
            console.log(data.err)
            var e = data.err
            $('.err').each(function(i){
              var id = $(this).attr('id');
              $('div#'+id).text(e[id]);
            })

        }
     });
     return false;
 });

})//End

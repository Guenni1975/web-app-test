$(function(){
    // Hier kommt der Zepto Code rein
    $('#btn_s1').on('click', function(){
        // window.alert('funzt');
        $('#content').load('seite1.html');
    });
    
    $('#btn_s2').on('click', function(){
        // window.alert('funzt');
        $('#content').load('seite2.html');
    });
    
    $('#btn_s3').on('click', function(){
        // window.alert('funzt');
        $('#content').load('seite3.html');
    });
    
}); 
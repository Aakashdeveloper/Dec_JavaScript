function calc(opt){
    var a  = document.getElementById('first').value;
    var b  = document.getElementById('second').value;
    var out;
    if(opt === 'add'){
        out =  parseFloat(a)+parseFloat(b);
    }else{
        out = parseFloat(a)-parseFloat(b);
    }
    document.getElementsByClassName('output')[0].innerText= out
}

 /*function add(){
                var a  = document.getElementById('first').value;
                var b  = document.getElementById('second').value;
                var out = parseFloat(a)+parseFloat(b);
                document.getElementsByClassName('output')[0].innerText= out
                
            }
            function sub(){
                var a  = document.getElementById('first').value;
                var b  = document.getElementById('second').value;
                var out = parseFloat(a)-parseFloat(b);
                document.getElementsByClassName('output')[0].innerText= out
                
            }*/
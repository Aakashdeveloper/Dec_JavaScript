function testform(){
    var a = document.getElementById('fname').value;
    if(a===' '||a===''){
        document.getElementById('output').innerText="Please enter firstName"
        document.getElementById('output').style.color="red"
    }else{
        document.getElementById('output').innerText=""
    }
}
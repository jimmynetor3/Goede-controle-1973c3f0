function hoofdstad() {
    let changethis = document.getElementById('output1');
    let changethisto = document.getElementById('output2');
    let changethistoo = document.getElementById('output3');
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var antwoorden = ["parijs", "8" , "ijselmeer"];
    var include1 = antwoorden.includes(input1);
    var include2 = antwoorden.includes(input2);
    var include3 = antwoorden.includes(input3);
    console.log(include1)
    console.log(include2)
    console.log(include3)
    changethis.innerText = include1;
    changethisto.innerText = include2;
    changethistoo.innerText = include3;
}



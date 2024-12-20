function demo(){
    if(document.getElementById("us").value== 'entri elevate' && document.getElementById("pw").value== 'admin123'){
    window.location.href=("https://devishri-maker.github.io/calc-js/")
    alert("Login successful");
    }
    else{
        alert("Enter valid username and password");
        return;
    }
}
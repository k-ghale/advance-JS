
let reqURL = 'https://api.github.com/users/k-ghale';

let xrc = new XMLHttpRequest();
xrc.open('GET',reqURL);

xrc.send();

console.log(xrc.responseText)
xrc.onreadystatechange = function(){
    if(xrc.readyState === 3){
        const data = JSON.parse(this.responseText)
        console.log(data.location)
    }
    else{
        console.log("NO DATA");
    }
}

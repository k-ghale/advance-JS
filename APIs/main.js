

const requestURL = 'https://api.github.com/users/k-ghale';

const xmln = new XMLHttpRequest();


xmln.open('GET', requestURL);
xmln.onreadystatechange = function(){
    console.log(xmln.readyState)
    if(this.readyState === 4){
    const data  = JSON.parse(this.responseText)
        // console.log(this.responseText);
        console.log(data.blog)
    }
}

// console.log("Hello World")
console.log(xmln.readyState)
xmln.send();

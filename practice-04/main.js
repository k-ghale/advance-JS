
// USING FETCH AND THEN
fetch("https://api.github.com/users/k-ghale")
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
  });

//USING PROMISES and THEN
const promiseOne = new Promise(function (response, reject) {
    let isErr = false;
    if (!isErr) {
      response({ user: "Kabin", password: "1234" });
      return response.json();
    } else {
      reject("SOMETHING WENT WRONG !");
    }
});

promiseOne.then(
    (data) => {
        console.log(data.password)
    }
)

// console.log(promiseOne);

//Using XML HTTP REQUEST 
const myGitAPI = "https://api.github.com/users/k-ghale";

const xhs = new XMLHttpRequest();

xhs.open('GET',myGitAPI);
xhs.onreadystatechange = function () {
  console.log(this.readyState);
  if (this.readyState === 3) {
    const myData = JSON.parse(this.responseText);
    console.log(myData);
  }
};

xhs.send();
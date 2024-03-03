
const PromiseOne  = new Promise(function(resolve,reject){
    //Do an async task
    //DB Calls
    setTimeout(function() {
        console.log("Async Task is complete.");
        resolve()
    },
    1000)
});

PromiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is complete.");
    },1000)
    resolve()
}).then(function(){
    console.log("task 2 complete.")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: 'Kabin',email: 'kabin@example.com'})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Kabin", email: "kabin@example.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// promiseFour.then(function(user){
//     console.log(user);})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "Ghale", password: "123", email: "example@ff.com" });
    } else {
      reject("ERROR : It went wrong");
    }
  }, 1000);
});

async function consumeFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

consumeFive();

// async function consumeSix() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("ERROR: Went Wrong");
//   }
// }

// consumeSix();

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("WRONG");
//   });

fetch("https://api.github.com/users/k-ghale")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("WRONG",err);
  });

// fetch("url")
//   .then((res) => {
//     return res.json;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("SOME ERROR OCCURRED!");
//   });

const promiseNext = new Promise(function(resolve,reject){
  setTimeout(function(){
    let err = false;
    if(!err){
    resolve({username: 'Kabin' , password : '1234'});
    }
    else{
      reject("ERROR : Something went wrong !");
    }
  },1000)
})

promiseNext.then(
  (user) => {
    console.log(user)
  }
)
let table = document.querySelector(".users");

let data;

async function generateUser() {
  let res = await getUsers();
  data = await res.json();
  data.results.forEach((user) => {
    let userBlock = document.createElement("div");
    userBlock.classList.add("user");

    let img = document.createElement("img");
    img.src = user.picture.thumbnail;

    let info = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = user.name.first + " " + user.name.last;
    let countr = document.createElement("p");
    countr.innerText = user.location.city;


  });

  console.log(data.results);
}

async function getUsers() {
  return await fetch("https://randomuser.me/api/?results=10");
}

generateUser();

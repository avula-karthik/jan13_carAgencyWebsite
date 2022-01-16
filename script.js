
let localdata = JSON.parse(localStorage.getItem("Cars"))
let container = document.querySelector(".container");
let Rent = 0;
for (eachkey in localdata) {


    let Div = document.createElement("div")
    Div.className = "card"
    Div.style.width = "100%";
    Div.style.textAlign = "center"
    Div.style.borderRadius = "10px"

    Div.innerHTML = `
    <div class="card-body">
    <h5>Model : ${localdata[eachkey]['model']}</h5>
    <h5>Color : ${localdata[eachkey]['color']} <img style="width: 50px;height: 30px; background-color: ${localdata[eachkey]['color']} ;"></img> </h5>
    <h5>Rent : ${localdata[eachkey]['rent']}</h5>
    <h5>ID : ${localdata[eachkey]['id']} </h5>
    </div>
    `
    Rent+= Number(`${localdata[eachkey]['rent']}` );
    document.querySelector(".headprice").textContent = `Total Price : ${Rent} `
    container.appendChild(Div);
}   

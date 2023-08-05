let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
]



let input = document.getElementById("input")

let tr = document.getElementById("row");

arr.forEach((a) => {
    let row = document.createElement("tr");

    row.innerHTML += `
        <td>${a.brand}</td>
        <td>${a.model}</td>
        <td>${a.price}</td>
        <td>${a.camera}</td>
        <td>${a.ram}</td>
        <td>${a.rom}</td>
    `;

    tr.appendChild(row);
});


let Search = document.getElementById("Search")
Search.addEventListener("click",()=>{
    let inputval=input.value 
    
    let result = arr.filter((a)=>{
        if (a.brand.toLowerCase().includes(inputval)) {
            return true
    }else{
        return  false
    }
    
})
console.log(result)
render(result)

})



let tabel = document.getElementById("tabel");

const render = (result)=>{
    tabel.innerHTML=""
    result.forEach((selectMobile)=>{
        let row2 = document.createElement("tr");
        row2.innerHTML += `
     


        <td>${selectMobile.brand}</td>
        <td>${selectMobile.model}</td>
        <td>${selectMobile.price}</td>
        <td>${selectMobile.camera}</td>
        <td>${selectMobile.ram}</td>
        <td>${selectMobile.rom}</td>



       `
       tabel.appendChild(row2)
    })
}





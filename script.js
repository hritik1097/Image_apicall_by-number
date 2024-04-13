const number=document.querySelector(".number")
const get=document.querySelector(".get")

function displayimage(getimage){
    // document.body.innerHTML=""
    getimage.map(element=>{
    const image=document.createElement("img")
    image.classList.add("active")
    image.src=element.download_url;
    document.body.appendChild(image)
})
}

async function handleimageapi(){
    const search=number.value;
    if(search<0 || search>10){
        alert("Please enter number between 0 to 10")
    }
    else{
    const response=await fetch(`https://picsum.photos/v2/list?page=2&limit=${search}`,{
        method:"GET"
    })
    const data=await response.json()
    displayimage(data)
}

}


get.addEventListener("click",handleimageapi)
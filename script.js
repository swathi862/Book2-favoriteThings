
const container = document.querySelector("#wishlist")

document.querySelector("#saveEntry").addEventListener("click", () => {
   
    const userFavoriteThing = document.querySelector("#favThing").value
    const userLocation = document.querySelector("#location").value
    if ((userLocation !== "") && (userFavoriteThing !== "")){
        container.innerHTML += `
        <section>
            <h2> I can purchase <em>${userFavoriteThing}</em> at <strong>${userLocation}</strong>. </h2>
        </section>
    `
    }
    else{
        window.alert("Please enter in all the information to save your favorite thing to the wishlist! :)")
    }
    
    document.querySelector("#input-fields").innerHTML += ""
})
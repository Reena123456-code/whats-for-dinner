document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "cook") {
                alert("You have cooked");
            } else {
                let checkRecipe = this.getAttribute("data-type");
                     alert(`You clicked $(checkRecipe())`);
            }
        })
    }
})        

    /*  let checkRecipe() = document.querySelectorAll(".check");
        let num = document.querySelector("");

        cook.forEach((btn)=>{
            btn.addEventListener("click");
            let cook
        });

        let value = 0;

        function 

document.getElementsByClassName("pantry-container").innerHtml; */

function runPantry() {
    let runPantry = {
        aubergine: 1,
        babySpinachLeaves: 90,
        bayLeaves: 3,
        beefStock: 4,
        brandy: 35.5,
        butter: 454,
        unsaltedButter: 227,
        carrots: 5,
        cherryTomatoes: 250 * 2,
        chickenStock: 4,
        chives: 20,
        cream: 250,
        doubleCream: 250,
        driedDill: 7,
        eggs: 6,
        extraVirginOliveOil: 500,
        fishStock: 8,
        frozenPeas: 1000,
        garlic: 6,
        hakeFillets: 250 * 2,
        tomatoKetchup: 460,
        lambMince: 533,
        beefMince: 554,
        lambKidneys: 225,
        largeSkinlessChickenBreast: 3,
        lemon: 1,
        milk: 1000,
        mushrooms: 300,
        oliveOil: 1000,
        onion: 6,
        paprika: 52,
        cayennePepper: 48,
        parsley: 11,
        plainFlour: 1000,
        potatoes: 2000,
        puffPastry: 320,
        redPepper: 1,
        salmon: 260,
        salt: 750,
        seaSalt: 360,
        blackPeppercorns: 50,
        shallots: 300,
        smokedFish: 400,
        sourCream: 300,
        sprigOfThyme: 25,
        steak: 700,
        tagliatelle: 500,
        tomatoPuree: 200,
        vegetableOil: 1000,
        whiteFishFillets: 500,
        worcestershireSauce: 290,
    }
}

function cookRecipe() {
    let cook() = (runPantry - cookRecipe());
}



function checkRecipe() {}

function addShopping() {

}

function addStore() {

}
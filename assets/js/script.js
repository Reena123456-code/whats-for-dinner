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

        function*/

function runPantry() {
    document.getElementsByClassName("pantry-container").innerHTML
    alert("pantry-container");
    let runPantry = {
     }
}

function cookRecipe() {

}

function checkRecipe() {
    document.getElementsByClassName("recipe1-container").innerHTML
      let recipe1 = {
        vegetableOil: 15,
        butter: 5,
        potatoes: 4,
        carrots: 2,
        onion: 1,
        fishStock: 1,
        driedDill: 6.28,
        smlHakeFillets: 4,
        salmonFillets: 2,
        smokedFish: 400,
        cream: 250,
        milk: 100,
        chives: 4,
    }

    let recipe2 = {
        lambKidneys: 225,
        steak: 700,
        vegetableOil: 15,
        butter: 30,
        onion: 2,
        plainFlour: 30,
        bayLeaves: 2,
        sprigsOfThyme: 4,
        beefStockCube: 1,
        mushrooms: 100,
        tomatoPuree: 15,
        worcestershireSauce: 15,
        parsley: 11.52,
        salt: 0.5,
        blackPeppercorns: 0.5,
        puffPastry: 320,
    }

    let recipe3 = {
        onions: 3,
        carrots: 2,
        oliveOil: 30,
        butter: 50,
        sprigOfThyme: 1,
        mincedLambOrBeef: 500,
        tomatoPuree: 15,
        worcestershireSauce: 30,
        beefOrChickenStockCube: 1,
        frozenPeas: 250,
        potatoes: 500,
        milk: 250,
        butter: 100,
        eggYolks: 2,
    }
    
    let recipe4 = {
        filletOfBeef: 600,
        plainFlour: 30,
        paprikaOrCayennePepper: 0.5,
        mushrooms: 225,
        sourCream: 250,
        brandy: 35.5,
        shallots: 2,
        garlic: 1,
    }

    let recipe5 = {
        cherryTomatoes: 500,
        aubergine: 1,
        redPepper: 1,
        garlic: 4,
        oliveOil: 100,
        sprigsOfThyme: 4,
        whiteFishFillets: 500,
        extraVirginOliveOil: 15,
        crustyBread: 1,
        greenLeaves: 1,
    }
    let recipe6 = {
        tagliatelle: 300,
        oliveOil: 15,
        unsaltedButter: 30,
        largeSkinlessChickenBreasts: 2,
        garlic: 3,
        doubleCream: 250,
        frozenPeas: 100,
        zest1Lemon: 1,
        semiDriedCherryTomatoes: 50,
        babySpinachLeaves: 150,
        seaSalt: 0.5,
        blackPeppercorns: 0.5,
    }
      }


function addShopping() {

}

function addStore() {

}
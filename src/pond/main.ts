import { Fish } from "./Fish";
import { Population } from "./Population";
import { Pond } from "./Pond";
import { API } from "./index";

//this is a generic fish to be used to test the implementation
let testFish: Fish = {
    Name: "Test Fish",
    Prey: [],
    FoodRequired: 0.8,
    ReproductionRate: 1.25,
    DeathRate: 0.75
}

//this is a generic population made with the generic fish used to test the implementation
let testFishPop: Population = {
    Type: testFish,
    Population: 100
}

//a generic pond containing only the generic population and no fishing to test the implementation
let testPond: Pond = {
    Species: [testFishPop],
    FishingRate: 0
}

//takes a pond, returns a new pond which is the old pond after the API functions have been run on it
let runTimeStep = (pond: Pond): Pond => {
    let newPond = pond

    newPond = API.Feedings(newPond, 0)
    newPond = API.Reproductions(newPond, 0)
    newPond = API.Fishings(newPond, 0)
    newPond = API.Deaths(newPond, 0)

    //check if any fish populations are zero and remove those fish from the pond
    newPond.Species.filter(f => f.Population > 0)

    return newPond
}

//preturns a test representation of a pond
//can definately be expanded to be better
//currently just gives a list of fish populations and their population numbers
let printPond = (pond: Pond): string => {

    let output = "Species: \n"

    for (let i = 0; i < pond.Species.length; i++) {
        output += pond.Species[i].Type.Name + " Population : " + pond.Species[i].Population + "\n"
    }

    return output
}

console.log("test")
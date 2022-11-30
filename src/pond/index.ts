import { Pond } from "./Pond";
import { Algebra } from "./algebra";

const API: Algebra = {
    Concat: (pond1: Pond, pond2: Pond) => {
        return {
            Species: pond1.Species.concat(pond2.Species),
            FishingRate: pond1.FishingRate
        }
    },
    Feedings: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            for (let j = 0; j < newPond.Species[i].Type.Prey.length; j++) {
                newPond.Species[i].Type.Prey[j].Population -= 
                    ((newPond.Species[i].Population * newPond.Species[i].Type.FoodRequired) * 
                    (1 + ((Math.random() * (rand * 2)) - rand))) / pond.Species[i].Type.Prey.length
            }
        }

        return newPond
    },
    Reproductions: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.Species[i].Type.ReproductionRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))
        }

        return newPond
    },
    Deaths: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.Species[i].Type.DeathRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))
        }

        return newPond
    },
    Fishings: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.FishingRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))
        }

        return newPond
    }
}

export { API }
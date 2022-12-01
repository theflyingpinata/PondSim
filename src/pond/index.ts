import { pipe } from 'ramda';
import { Alg, AlgPond } from "./algebra";
import { Population } from './Population';

type AlgPondToAlgPond = (pond: AlgPond) => AlgPond;
type SpreadAlgPondsToAlgPond = (...tiles: AlgPond[]) => AlgPond;
type AlgPondRandToAlgPond = (pond: AlgPond, rand: number) => AlgPond;

type PondAPI = {
    combine: SpreadAlgPondsToAlgPond,
    reduce: (targetPond: AlgPond, reductionPond: AlgPond) => AlgPond,
    pure: (pop: Population) => AlgPond,
    empty: AlgPondToAlgPond,
    feedings: AlgPondRandToAlgPond,
    reproductions: AlgPondRandToAlgPond,
    deaths: AlgPondRandToAlgPond,
    fishings: AlgPondRandToAlgPond,
    timestep: AlgPondRandToAlgPond

}

const API: PondAPI = {
    combine: (ponds) => Alg.Combine(ponds),
    reduce: (targetPond, reductionPond) => Alg.Reduce(targetPond, reductionPond),
    pure: (pop) => Alg.Pure(pop),
    empty: (pond) => Alg.Empty(pond),
    feedings: (pond, rand) =>  Alg.Feeding(pond, rand),
    reproductions: (pond, rand) => Alg.Reproduction(pond, rand),
    deaths: (pond, rand) => Alg.Death(pond, rand),
    fishings: (pond, rand) => Alg.Fishing(pond, rand),
    timestep: (pond, rand) => pipe(API.feedings, API.deaths, API.reproductions, API.fishings)(pond, rand)
}

export { API }


    /*{
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            for (let j = 0; j < newPond.Species[i].Type.Prey.length; j++) {
                newPond.Species[i].Type.Prey[j].Population -= 
                    ((newPond.Species[i].Population * newPond.Species[i].Type.FoodRequired) * 
                    (1 + ((Math.random() * (rand * 2)) - rand))) / pond.Species[i].Type.Prey.length

                //if the prey is eaten to extinction, some of the fish will die from lack of food
                if (newPond.Species[i].Type.Prey[j].Population <= 0) {
                    newPond.Species[i].Population -= (Math.abs(newPond.Species[i].Type.Prey[j].Population) * newPond.Species[i].Type.FoodRequired)
                    newPond.Species[i].Type.Prey[j].Population = 0
                }
            }
        }

        return newPond
    }
    ,
    reproductions: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.Species[i].Type.ReproductionRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))
        }

        return newPond;
    },
    deaths: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.Species[i].Type.DeathRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))
        }

        return newPond
    },
    fishings: (pond: Pond, rand: number) => {
        let newPond = pond

        for (let i = 0; i < newPond.Species.length; i++) {
            newPond.Species[i].Population *= (newPond.FishingRate * 
                (1 + ((Math.random() * (rand * 2)) - rand)))

            //makes sure that the species never get fished into negative population
            if (newPond.Species[i].Population <= 0) {
                newPond.Species[i].Population = 0
            }
        }

        return newPond
    }
    */
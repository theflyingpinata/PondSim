import '../style.css'

import { Fish } from "./Fish";
import { Population } from "./Population";
import { Pond } from "./Pond";
import { API } from "./index";
import { simulate } from "./simulate";
import { renderSimulation } from './renderSimulation';
const width = 600,
      height = 600;

const canvas = document.querySelector<HTMLCanvasElement>('#canvas') as HTMLCanvasElement;
canvas.width = width;
canvas.height = height;
const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
//this is a generic fish to be used to test the implementation
let bass: Fish = {
    Name: "Bass",
    Prey: [],
    FoodRequired: 0.8,
    ReproductionRate: 1.25,
    DeathRate: 0.75
}
let salmon: Fish = {
    Name: "Salmon",
    Prey: [],
    FoodRequired: 0.8,
    ReproductionRate: 1.25,
    DeathRate: 0.75
}

//this is a generic population made with the generic fish used to test the implementation
let bassPop: Population = {
    Type: bass,
    Population: 100
}
let salmonPop: Population = {
    Type: salmon,
    Population: 100
}


const first = API.pure(bassPop);
const second = API.pure(salmonPop);
const combined = API.combine(second, first, first);
const reproduction = API.fishings(second, 3);

const firstSimulate = simulate(combined);
renderSimulation(firstSimulate)(ctx);

console.log("test")
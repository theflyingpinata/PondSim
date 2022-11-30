import { Population } from "./Population"

type Fish = {
    //Identifier
    Name: string
    //Properties
    Prey: Population[]
    FoodRequired: number
    ReproductionRate: number
    DeathRate: number
}

export type { Fish }
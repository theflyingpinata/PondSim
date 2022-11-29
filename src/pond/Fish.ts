//Plant population doesn't change, just exists to provide food for fish in a pond
//Population is used to simulate how large of a fish population the pond can support
type Plant = {
    //Indentifier
    Name: string
    //Properties
    Population: number
}

type Fish = {
    //Identifier
    Name: string
    //Properties
    Prey: Fish[] | Plant[]
    FoodRequired: number
    ReproductionLevel: number
    ReproductionFrequency: number
    DeathRate: number
    //Data Trackers
    Population: number
    //Funtions
    Feed: (rand: number) => void
    Reproduce: (rand: number) => void
}


export type { Plant, Fish }
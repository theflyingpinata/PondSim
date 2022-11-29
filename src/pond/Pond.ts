import { Plant, Fish } from "./Fish";

type Pond = {
    //Contents
    Species: Fish[] | Plant[]
    //Attributes
    FishingRate: number
    //Functions
    RunTimeStep: () => void
    Feedings: () => void
    Reproductions: () => void
    Deaths: () => void
}

export type { Pond }
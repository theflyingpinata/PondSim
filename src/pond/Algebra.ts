import { Pond } from "./Pond"

type Algebra = {
    Concat: (pond1: Pond, pond2: Pond) => Pond
    Feedings: (pond: Pond, rand: number) => Pond
    Reproductions: (pond: Pond, rand: number) => Pond
    Deaths: (pond: Pond, rand: number) => Pond
    Fishings: (pond: Pond, rand: number) => Pond
}

export type { Algebra }
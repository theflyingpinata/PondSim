/*import { Pond } from "./Pond"


type Algebra = {
    Concat: (pond1: Pond, pond2: Pond) => Pond
    Feedings: (pond: Pond, rand: number) => Pond
    Reproductions: (pond: Pond, rand: number) => Pond
    Deaths: (pond: Pond, rand: number) => Pond
    Fishings: (pond: Pond, rand: number) => Pond
}

export type { Algebra }*/


//import { Pond } from "./Pond"
import { Population } from "./Population";

export type Combine = {//assumes DIFFERENT SPECIES
    readonly _tag: 'Combine';
    readonly ponds: AlgPond[];
}


export type Reduce = {//assumes DIFFERENT species
    readonly _tag: 'Reduce';
    readonly targetPond: AlgPond;
    readonly reductionPond: AlgPond;
    //this should just call subtract for each species
}


export type Empty = {
    readonly _tag: "Empty";
    readonly pond: AlgPond;
}

export type Pure = {
    readonly _tag: "Pure";
    readonly pop: Population;
}

export type Divide = {
    readonly _tag: "Divide";
    readonly pond: AlgPond;
}

export type Feeding= {
    readonly _tag: 'Feeding';
    readonly pond: AlgPond;
    readonly rand: number;
}
export type Death = {
    readonly _tag: 'Death';
    readonly pond: AlgPond;
    readonly rand: number;
}
export type Reproduction = {
    readonly _tag: "Reproduction";
    readonly pond: AlgPond;
    readonly rand: number;
}
export type Fishing = {
    readonly _tag: "Fishing";
    readonly pond: AlgPond;
    readonly rand: number;
}
export type AlgPond =
    | Combine
    | Reduce
    | Empty
    | Pure
    | Feeding
    | Death
    | Reproduction
    | Fishing;
    //| Divide<A>;

type Algebra = {
    Combine: (...ponds: AlgPond[]) => AlgPond,
    Reduce: (targetPond: AlgPond, reductionPond: AlgPond) => AlgPond,
    Empty: (pond: AlgPond) => AlgPond,
    Pure: (pop: Population) => AlgPond,
    Feeding: (pond: AlgPond, rand: number) => AlgPond,
    Death: (pond: AlgPond, rand: number) => AlgPond,
    Reproduction: (pond: AlgPond, rand: number) => AlgPond,
    Fishing: (pond: AlgPond, rand: number) => AlgPond,
    //Divide: <A>(pond: Pond<A>) => Pond<A>[]
    /*Feedings: (pond: Pond, rand: number) => Pond
    Reproductions: (pond: Pond, rand: number) => Pond
    Deaths: (pond: Pond, rand: number) => Pond
    Fishings: (pond: Pond, rand: number) => Pond
    //************************** */
};

const Alg: Algebra = {
    Combine: (...ponds) => ({
        _tag: 'Combine',
        ponds
    }),
    Reduce: (targetPond, reductionPond) => ({
        _tag: 'Reduce',
        targetPond,
        reductionPond
    }),
    Empty: (pond) => ({
        _tag: 'Empty',
        pond
    }),
    Pure: (pop) =>  ({
        _tag: 'Pure',
        pop
    }),
    Feeding: (pond, rand) => ({
        _tag: 'Empty',
        pond,
        rand
    }),
    Death: (pond, rand) => ({
        _tag: 'Empty',
        pond,
        rand
    }),
    Reproduction: (pond, rand) => ({
        _tag: 'Empty',
        pond,
        rand
    }),
    Fishing: (pond, rand) => ({
        _tag: 'Empty',
        pond,
        rand
    }),
    /*Divide: (pond) => {
        return {
        _tag: 'Divide',
        pond
        }
    }*/

}

export { Alg }

/*

        const newPonds: Pond[] = [];
        for (let i = 0; i < pond.Species.length; i++) {
            newPonds.push(/*a new pond for every species in the big one*///);
        //}
        //return newPonds;
        
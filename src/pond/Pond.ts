import { Plant, Fish } from "./Fish";

type Pond = {
    //Contents
    Species: Fish[] | Plant[]
    //Attributes
    FishingRate: number
    //Functions
    Feedings(): void
    Reproductions(): void
    Deaths(): void
}


type myAlgebra {
    increasePopulationNumber: function name(params:type) {
        
    },
    decreasePopuklationNumber: ,
}

type Algebra = {
    cw: <A>(pond: Pond<A>) => Pond<A>,
    flipH: <A>(pond: Pond<A>) => Pond<A>,
    above: <A>(...ponds: Pond<A>[]) => Pond<A>,
    pure: <A>(value: A) => Pond<A>
  };

  //use algebra that may contain two ponds to describe ONE pond
  //nil pond, a basic pond, a concat pond (monoid?), composite ponds, etc

  /*

  a pond is a body of water, with some fish in it

  */
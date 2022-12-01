import { pipe } from "ramda";
import { Alg, AlgPond, Combine, Death, Empty, Fishing, Reduce } from "./algebra";
import { match } from "./match";
import { Fish } from "./Fish";
import { Population } from "./Population";

export type result = {
  Species: Fish[],
  Populations: number[]
};
// const repeat = (n: number) => <T>(val: T) => Array(n).fill(val);
// const transpose = <T>(arr2d: T[][]) => arr2d[0].map((_, colIndex) => arr2d.map(row => row[colIndex]));
// const reverse = <T>(arr: T[]) => [...arr].reverse();
// const rotate = <T>(arr2d: T[][]) => transpose(arr2d).map(reverse);
// const map = <A, B>(f: (_: A) => B) => (arr: A[]) => arr.map(f);
// const splitEvery = (n: number) => <A>(arr: A[]) => {
//   return repeat(Math.ceil(arr.length / n))(null)
//     .map((_, i) =>  arr.slice(i * n, i * n + n));
// };
const feedings = (rand: number) => (population: result): result => population;
const deaths = (rand: number) => (population: result): result => population;

const reproductions = (rand: number) => (population: result): result => {
  let newResult: result = population;
  for (let i = 0; i < newResult.Species.length; i++) {
    newResult.Populations[i] *= (newResult.Species[i].ReproductionRate * (1 + ((Math.random() * (rand * 2)) - rand)));
  }
  return population;
};

const fishings = (rand: number) => (population: result): result => population;

const combineResults = (result1: result, result2: result): result => {//change these to AlgPonds????
  let newResult: result = result1;
  for (let i = 0; i < result2.Species.length; i++) {
    if (newResult.Species.includes(result2.Species[i])) {
      newResult.Populations[newResult.Species.indexOf(result2.Species[i])] += result2.Populations[i];
    }
    else {
      newResult.Species.push(result2.Species[i]);
      newResult.Populations.push(result2.Populations[i]);
    }
  }
  return newResult;
}
const reduceResults = (result1: result, result2: result): result => {//change these to AlgPonds????
  let newResult: result = result1;
  for (let i = 0; i < result2.Species.length; i++) {
    if (newResult.Species.includes(result2.Species[i])) {
      newResult.Populations[newResult.Species.indexOf(result2.Species[i])] -= result2.Populations[i];
    }
  }
  return newResult;
}

export type Raster<T> = T[][];

export const simulate = /* (other parameter) => */  match({
  Feeding: ({ pond, rand }): result => {
    return pipe(
      simulate,
      feedings(rand)
    )(pond);
  },
  Reproduction: ({ pond, rand }): result => {
    return pipe(
      simulate,
      reproductions(rand)
    )(pond);
  },
  Pure: ({ pop }): result => {
    return {
      Species: [pop.Type],
      Populations: [pop.Population]
    };
  },
  Combine: ({ ponds }): result => {
    if (ponds.length === 0) throw new Error('Hey bozo cant combine deez nuts');//error
    if (ponds.length === 1) return simulate(ponds[0]);

    return combineResults(
      simulate(ponds[0]),
      simulate(Alg.Combine(...ponds.slice(1))));//can we go recursive here?

  },
  Reduce: ({ targetPond, reductionPond }): result => {
    return reduceResults(
      simulate(targetPond),
      simulate(reductionPond));//can we go recursive here?

  },
  Empty: ({ pond }): result => {
    return {
      Species: [],
      Populations: []
    };
  },
  Death: ({ pond, rand }): result => {
    return pipe(
      simulate,
      deaths(rand)
    )(pond);
  },
  Fishing: ({ pond, rand }): result => {
    return pipe(
      simulate,
      fishings(rand)
    )(pond);
  },
});
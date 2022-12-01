import { pipe } from "ramda";
import { Alg, AlgPond, Combine, Death, Empty, Fishing, Reduce } from "./algebra";
import { match } from "./match";

// const repeat = (n: number) => <T>(val: T) => Array(n).fill(val);
// const transpose = <T>(arr2d: T[][]) => arr2d[0].map((_, colIndex) => arr2d.map(row => row[colIndex]));
// const reverse = <T>(arr: T[]) => [...arr].reverse();
// const rotate = <T>(arr2d: T[][]) => transpose(arr2d).map(reverse);
// const map = <A, B>(f: (_: A) => B) => (arr: A[]) => arr.map(f);
// const splitEvery = (n: number) => <A>(arr: A[]) => {
//   return repeat(Math.ceil(arr.length / n))(null)
//     .map((_, i) =>  arr.slice(i * n, i * n + n));
// };
const feedings = <T>

export type Raster<T> = T[][];

export const simulate = (randomSeed: number) => match({
    Feeding: ({ pond }) => {
      return pipe(
        simulate({ randomSeed })

      );
    },
    Reproduction: ({ }) => {
    },
    Pure: ({ pop }) => {
      return {
        Species: [pop.Type],
        Populations: [pop.Population]
      };
    },
    Combine: function (pond: Combine): RetT {
      throw new Error("Function not implemented.");
    },
    Reduce: function (pond: Reduce): RetT {
      throw new Error("Function not implemented.");
    },
    Empty: function (pond: Empty): RetT {
      throw new Error("Function not implemented.");
    },
    Death: function (pond: Death): RetT {
      throw new Error("Function not implemented.");
    },
    Fishing: function (pond: Fishing): RetT {
      throw new Error("Function not implemented.");
    }
  });
import {Combine, Reduce, Empty, Pure, Feeding, Death, Reproduction, Fishing, AlgPond} from './algebra';

/*

const n = match<number>({
  Cw       : ({Pond}) => Pond._tag && 1,
  FlipH    : ({Pond}) =>  Pond._tag && 2,
  Above    : ({Ponds}) =>  Ponds[0]._tag && 3,
  Pure     : ({value}) =>  value && 4,
  Ap       : ({functionPond, domainPond}) => functionPond && domainPond && 5,
  FromImage: ({img}) => img && 6
});

*/

export const match = <RetT>(
  fObj: {
    'Combine': (pond: Combine) => RetT,
    'Reduce': (pond: Reduce) => RetT,
    'Empty': (pond: Empty) => RetT,
    'Pure': (pond: Pure) => RetT,
    'Feeding': (pond: Feeding) => RetT,
    'Death': (pond: Death) => RetT,
    'Reproduction': (pond: Reproduction) => RetT,
    'Fishing': (pond: Fishing) => RetT
  }
) => (
  pond: AlgPond
) => (
  fObj[pond._tag as AlgPond['_tag']](pond as any)
);


import CounterComponent from './component/Counter';
import TextView from './component/TextView';

document
  .getElementById('root')
  ?.append(new TextView().target, new CounterComponent().target);

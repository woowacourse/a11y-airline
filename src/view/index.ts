import CounterComponent from './component/Counter';
import TextView from './component/TextView';

document
  .getElementById('page')
  ?.append(new TextView().target, new CounterComponent('counter').target);

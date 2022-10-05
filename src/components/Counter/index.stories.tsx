import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Counter from '.';

export default {
  title: 'Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = args => {
  const [count, setCount] = useState(0);

  return <Counter {...args} count={count} setCount={setCount} />;
};

export const CounterTemplate = Template.bind({});
CounterTemplate.args = {
  title: '성인',
  information: '국제선 만 12세 이상, 국내선 만 13세 이상',
};

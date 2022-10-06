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
  information: {
    mainLabel: '성인 탑승자 수를 고릅니다.',
    tooltip: {
      name: '성인 기준 상세 안내',
      content: '국제선 만 12세 이상, 국내선 만 13세 이상',
    },
    decreaseButtonLabel: '성인 탑승자 한명 줄이기 버튼',
    increaseButtonLabel: '성인 탑승자 한명 늘리기 버튼',
    inputLabel: '성인 탑승자 수 입력칸',
    decreaseInteractionScript: (count: number) => `성인 승객 감소 ${count}`,
    increaseInteractionScript: (count: number) => `성인 승객 증가 ${count}`,
    inputInteractionScript: (count: number) =>
      `성인 ${count} 텍스트 숫자만 수정`,
  },
};

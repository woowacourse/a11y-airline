import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;

export const TooltipTemplate = Template.bind({});
TooltipTemplate.args = {
  content: '국제선 만 12세 이상, 국내선 만 13세 이상',
};

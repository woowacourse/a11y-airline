import { ComponentStory, ComponentMeta } from '@storybook/react';
import PassengetSelector from '.';

export default {
  title: 'Components/PassengerSelector',
  component: PassengetSelector,
} as ComponentMeta<typeof PassengetSelector>;

const Template: ComponentStory<typeof PassengetSelector> = () => (
  <PassengetSelector />
);

export const PassengerSelectorTemplate = Template.bind({});
PassengerSelectorTemplate.args = {};

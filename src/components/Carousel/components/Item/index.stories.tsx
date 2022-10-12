import { ComponentStory, ComponentMeta } from '@storybook/react';
import Item from '.';
import { trips } from '../../../../dummy';

export default {
  title: 'Components/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => <Item {...args} />;

export const ItemTemplate = Template.bind({});
ItemTemplate.args = {
  ...trips[0],
};

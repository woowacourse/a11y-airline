import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '.';
import { trips } from '../../dummy';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = args => (
  <Carousel {...args} />
);

export const CarouselTemplate = Template.bind({});
CarouselTemplate.args = {
  title: '지금 떠나기 좋은 여행',
  items: trips,
};

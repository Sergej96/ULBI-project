import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storybook from './storybook.jpg';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: storybook,
    size: 100,
};

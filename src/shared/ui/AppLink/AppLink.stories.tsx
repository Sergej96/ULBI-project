import { Meta, StoryObj } from '@storybook/react';

import AppLink, { ThemeLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Link',
    },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};
export const Secondary: Story = {
    args: {
        theme: ThemeLink.SECONDARY,
    },
};

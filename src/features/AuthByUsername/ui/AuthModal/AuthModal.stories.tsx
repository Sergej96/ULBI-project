import type { Meta, StoryObj } from '@storybook/react';
import { AuthModal } from './AuthModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AuthModal> = {
    title: 'features/AuthModal',
    component: AuthModal,
    argTypes: {},
    args: {
        isOpen: true
    },
};

export default meta;

type Story = StoryObj<typeof AuthModal>;

export const Default: Story = {
    args: {},
    decorators: [],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

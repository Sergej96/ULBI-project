import type { Meta, StoryObj } from '@storybook/react';
import { AuthModal } from './AuthModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AuthModal> = {
    title: 'features/AuthModal',
    component: AuthModal,
    argTypes: {},
    args: {
        isOpen: true,
    },
    decorators: [StoreDecorator({})],
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

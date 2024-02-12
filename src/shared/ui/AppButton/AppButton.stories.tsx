import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppButton, { ThemeButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        children: {
            name: 'label',
            control: 'text',
        },
    },
    args: {
        children: 'Click Me',
    },
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

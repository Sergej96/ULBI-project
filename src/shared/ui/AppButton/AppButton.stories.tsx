import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppButton, { ButtonSize, ButtonTheme } from './AppButton';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '<',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Size: Story = {
    args: {
        children: '<',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const SizeL: Story = {
    args: {
        children: '<',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};
export const SizeXL: Story = {
    args: {
        children: '<',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

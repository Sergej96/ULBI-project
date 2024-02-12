import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

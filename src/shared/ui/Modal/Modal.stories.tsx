import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium vitae eaque recusandae voluptate, maxime eum delectus exercitationem aspernatur ea!',
        isOpen: true
    }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

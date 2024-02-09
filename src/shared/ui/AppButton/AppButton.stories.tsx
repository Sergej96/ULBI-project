import type { Meta, StoryObj } from '@storybook/react';
import AppButton from './AppButton';

const meta: Meta<typeof AppButton> = {
    component: AppButton,
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Default: Story = {
    render: () => <AppButton>Click me</AppButton>,
};

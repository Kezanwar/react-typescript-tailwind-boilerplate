// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Buttons/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

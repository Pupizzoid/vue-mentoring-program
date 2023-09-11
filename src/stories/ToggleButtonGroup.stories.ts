import type { Meta, StoryObj } from '@storybook/vue3';
import ToggleButtonGroup from '../components/ToggleButtonGroup.vue';

const meta = {
  title: 'UI/ToogleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { ToggleButtonGroup },
    setup() {
      return { args };
    },
    template: '<toggle-button-group :options="args.options" :label="args.label" />',
  }),
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option1', 'Option2'],
    label: 'By option',
  },
};

export const Extended: Story = {
  args: {
    options: ['Option1', 'Option2', 'Option3', 'Option4'],
    label: 'By option',
  },
};

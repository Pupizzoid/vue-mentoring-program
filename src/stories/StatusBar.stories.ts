import type { Meta, StoryObj } from '@storybook/vue3';

import StatusBar from '../components/StatusBar.vue';

const meta = {
  title: 'UI/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { StatusBar },
    setup() {
      return { args };
    },
    template: '<status-bar :count="args.count" :label="args.label"/>',
  }),
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'items found',
    count: 13,
  },
};

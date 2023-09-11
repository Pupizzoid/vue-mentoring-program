import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from '../components/Footer.vue';

const meta = {
  title: 'UI/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template: '<Footer/>',
  }),
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

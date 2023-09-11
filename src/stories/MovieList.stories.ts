import type { Meta, StoryObj } from '@storybook/vue3';

import { MOVIES } from '../mockData/mockMovies.ts';
import MovieList from '../components/MovieList.vue';

const meta = {
  title: 'UI/MovieList',
  component: MovieList,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { MovieList },
    setup() {
      return { args };
    },
    template: '<movie-list :movies="args.data" />',
  }),
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: MOVIES,
  },
};

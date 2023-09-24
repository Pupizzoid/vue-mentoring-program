import type { Meta, StoryObj } from '@storybook/vue3';

import MovieCard from '../components/MovieCard.vue';
import { MOVIES } from '../mockData/mockMovies.ts';

const meta = {
  title: 'UI/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { MovieCard },
    setup() {
      return { args };
    },
    template: '<movie-card :card-data="args.cardData"/>',
  }),
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardData: MOVIES[0],
  },
};

import { mount } from '@vue/test-utils';
import Header from '../src/components/Header.vue';
import { createRouter, createWebHistory } from 'vue-router';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(Header);

    expect(wrapper.text()).toContain('netflix');
    expect(wrapper.text()).toContain('roulette');
  });

  it('renders properly', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/', redirect: '/mock-redirect' }],
    });

    const app = mount(Header, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    await app.find('.logo').trigger('click');
    await router.isReady();

    expect(router.currentRoute.value.path).toBe('/mock-redirect');
  });
});

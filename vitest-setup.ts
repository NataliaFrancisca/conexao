import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.mock('', () => {});

  vi.mock('next/navigation', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nextRouterMock = require('next-router-mock');
    const { useRouter } = nextRouterMock;

    const usePathname = () => {
      const router = useRouter();
      return router.pathname;
    };

    const useSearchParams = () => {
      const router = useRouter();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return new URLSearchParams(router.query);
    };

    return {
      useRouter,
      usePathname,
      useSearchParams,
    };
  });
});

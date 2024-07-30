'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store, type AppStore } from './store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<AppStore>();

  if (!ref.current) {
    ref.current = store();
  }

  return <Provider store={ref.current}>{children}</Provider>;
}

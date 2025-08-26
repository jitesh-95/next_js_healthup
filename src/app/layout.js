// src/app/layout.js
import { cookies } from 'next/headers'
import { lazy, Suspense } from 'react';
import { Skeleton } from '@mui/material';

import './globals.css';
import ThemeContextProvider from './ThemeContext';

const TopMenu = lazy(() => import('@/components/TopMenu'));
const Footer = lazy(() => import('@/components/Footer'));

export const metadata = {
  title: 'HealthUp',
  description: 'Your health companion app',
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies(); // ✅ await required
  const theme = cookieStore.get('theme')?.value;
  const isDark = theme === 'dark';

  return (
    <html lang="en">
      <body>
        <ThemeContextProvider isDarkMode={isDark}>
          <Suspense fallback={<Skeleton variant="rectangular" />}><TopMenu /></Suspense>
          {children}
          <Suspense fallback={<Skeleton variant="rectangular" />}><Footer /></Suspense>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

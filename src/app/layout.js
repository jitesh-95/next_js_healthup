// src/app/layout.js
import TopMenu from '@/components/TopMenu';
import ThemeContextProvider from './ThemeContext';
import { cookies } from 'next/headers'

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
          <TopMenu />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}

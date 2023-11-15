import '~/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from '../lib/utils';
import { ThemeProvider } from 'components/theme-provider';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html
      lang={'en'}
      className={cn(
        'bg-background antialiased',
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning>
      <body className={'h-screen overscroll-none'}>
        <ThemeProvider attribute={'class'} defaultTheme={'dark'}>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}

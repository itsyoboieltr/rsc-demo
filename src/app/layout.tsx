import '~/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang={'en'} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{props.children}</body>
    </html>
  );
}

import Chat from './chat';

export const runtime = 'edge';

export default async function HomePage() {
  return (
    <main
      className={'flex h-full flex-col items-center justify-center gap-4 p-4'}>
      <p>ChatGPT clone for fun</p>
      <Chat />
    </main>
  );
}

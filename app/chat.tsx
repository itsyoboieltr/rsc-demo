'use client';
import { useChat } from 'ai/react';
import { Fragment, useRef } from 'react';
import { Button } from 'components/ui/button';
import { Card } from 'components/ui/card';
import { Textarea } from 'components/ui/textarea';
import { Separator } from 'components/ui/separator';
import { IconArrowUp } from '@tabler/icons-react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const button = useRef<HTMLButtonElement>(null);
  const disabled = !input.trim();
  return (
    <div
      className={
        'flex h-full w-full max-w-[50rem] flex-col justify-center gap-4'
      }>
      <Card
        className={
          'w-full flex-[0.9] overflow-y-auto rounded border-gray-300 px-4 shadow-none'
        }>
        {messages.map((message, index) => (
          <Fragment key={message.id}>
            {index !== 0 && <Separator />}
            <div className={'my-2'}>
              {message.role === 'user' ? 'User: ' : 'AI: '}
              {message.content}
            </div>
          </Fragment>
        ))}
      </Card>
      <form
        className={
          'flex flex-[0.1] flex-row items-center justify-center gap-2 rounded border border-gray-300 p-2'
        }
        onSubmit={handleSubmit}>
        <Textarea
          placeholder={'Message ChatGPT...'}
          className={
            'text-md resize-none border-none shadow-none focus-visible:ring-0'
          }
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) e.preventDefault();
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && button.current && !disabled)
              button.current.click();
          }}
        />
        <Button
          ref={button}
          type={'submit'}
          disabled={disabled}
          className={'h-2/3'}>
          <IconArrowUp />
        </Button>
      </form>
    </div>
  );
}

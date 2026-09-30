'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/lib/site'

const fieldClass =
  'w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 hover:border-white/15 focus:border-brand/60 focus:bg-white/[0.05] focus:outline-none'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = `Portfolio enquiry from ${name}`
    const body = `${message}\n\n${name} (${email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('opened')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[2rem] border border-border bg-card/60 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-muted-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} placeholder="Your name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} placeholder="you@example.com" className={fieldClass} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="Tell me about your idea or opportunity..."
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-medium text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_40px_-10px_var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98]"
      >
        Send Message
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
      <p aria-live="polite" className="min-h-5 text-center text-sm text-muted-foreground">
        {status === 'opened' ? 'Your email app should open with the message ready to send.' : ''}
      </p>
    </form>
  )
}

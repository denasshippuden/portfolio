"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

import { profile } from "@/data/profile";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Novo projeto - ${form.get("projectType")}`;
    const body = [
      `Nome: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Tipo de projeto: ${form.get("projectType")}`,
      "",
      String(form.get("message"))
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          Nome
          <input
            required
            name="name"
            className="min-h-11 rounded-md border border-white/10 bg-ink px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-accent"
            placeholder="Seu nome"
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Email
          <input
            required
            name="email"
            type="email"
            className="min-h-11 rounded-md border border-white/10 bg-ink px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-accent"
            placeholder="voce@email.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-zinc-300">
        Tipo de projeto
        <select
          required
          name="projectType"
          className="min-h-11 rounded-md border border-white/10 bg-ink px-3 text-white outline-none transition focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Site institucional</option>
          <option>Landing page</option>
          <option>Sistema interno</option>
          <option>Automação n8n</option>
          <option>Integração com API</option>
          <option>Dashboard administrativo</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm text-zinc-300">
        Mensagem
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-md border border-white/10 bg-ink px-3 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-accent"
          placeholder="Conte rapidamente o que você precisa construir."
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white bg-white px-5 text-sm font-semibold text-ink transition hover:bg-mist"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Enviar mensagem
      </button>
      {sent ? <p className="text-sm text-success">Abrindo seu aplicativo de email com a mensagem preenchida.</p> : null}
    </form>
  );
}

import React from "react";
import { useTranslations } from "@i18n/utils";

interface Props {
  lang: "es" | "en";
}

export default function ContactForm({ lang }: Props) {
  const t = useTranslations(lang);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Hola Sebastián,\n\nNuevo contacto desde tu portafolio.\n\n👤 ${t("contact.form.name")}:\n${name}\n\n📌 ${t("contact.form.subject")}:\n${subject}\n\n💬 ${t("contact.form.message")}:\n${message}`;

    window.open(`https://wa.me/573202201315?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={submit} className="space-y-6">

      <div>
        <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("contact.form.name")}
        </label>
       <input
  name="name"
  type="text"
  required
  className="
  w-full rounded-2xl
  border border-gray-200 dark:border-gray-700
  bg-white/60 dark:bg-gray-900/60
  backdrop-blur-sm
  px-4 py-3
  text-gray-900 dark:text-white

  transition-all duration-300
  focus:outline-none
  focus:ring-2 focus:ring-primary-500
  focus:border-primary-400
  hover:border-primary-300
  hover:shadow-md
  "
/>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("contact.form.subject")}
        </label>
        <input
  name="subject"
  type="text"
  required
  className="
  w-full rounded-2xl
  border border-gray-200 dark:border-gray-700
  bg-white/60 dark:bg-gray-900/60
  backdrop-blur-sm
  px-4 py-3
  text-gray-900 dark:text-white

  transition-all duration-300
  focus:outline-none
  focus:ring-2 focus:ring-primary-500
  focus:border-primary-400
  hover:border-primary-300
  hover:shadow-md
  "
/>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("contact.form.message")}
        </label>
        <textarea
  name="message"
  rows={6}
  required
  className="
  w-full rounded-2xl
  border border-gray-200 dark:border-gray-700
  bg-white/60 dark:bg-gray-900/60
  backdrop-blur-sm
  px-4 py-3
  text-gray-900 dark:text-white

  transition-all duration-300
  focus:outline-none
  focus:ring-2 focus:ring-primary-500
  focus:border-primary-400
  hover:border-primary-300
  hover:shadow-md
  resize-none
  "
/>
      </div>

      <button type="submit" className="w-full rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20">
        {t("contact.form.submit")}
      </button>

    </form>
  );
}
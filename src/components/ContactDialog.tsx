import { ArrowRightIcon, X } from "lucide-react";
import { translations } from "../translations";
import type { SyntheticEvent } from "react";

type Trans = {
  t: typeof translations.no;
};

export default function ContactDialog({ t }: Trans) {
  return (
    <dialog
      id="contact-dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.currentTarget.close();
        }
      }}
      className="
        rounded-xl bg-[#202020]/95 border-2 border-[#202020] p-8 font-outfit 
        mx-auto my-auto items-start w-[calc(100%-4rem)]
        max-w-[30rem] fixed
    "
    >
      <div className="flex flex-col items-start">
        <h1 className="text-4xl gold-gradient font-bold">
          {t.contactDialog.title}
        </h1>
        <p className="mt-2 text-base max-w-2xl">{t.contactDialog.desc}</p>

        <button
          command="close"
          commandFor="contact-dialog"
          className="
          text-2xl absolute top-9 right-8 cursor-pointer hover:scale-[1.01] 
          hover:-translate-y-1 transition duration-200
          hover:text-[#E8BD70] text-[#b2b2a8]
        "
        >
          <X />
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 w-full"
        >
          <div className="flex flex-col gap-1">
            <span className="">{t.contactDialog.name}</span>
            <input
              type="text"
              name="name"
              placeholder={t.contactDialog.name}
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="">{t.contactDialog.email}</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span>{t.contactDialog.message}</span>
            <textarea
              name="message"
              placeholder={t.contactDialog.write}
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex items-center gap-6 mt-2">
            <button
              type="submit"
              className="
              flex cursor-pointer justify-center items-center rounded-xl w-35 h-10.5 px-5 py-6 gap-3 group
              bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
            "
            >
              <span
                className="
                text-[#151515] text-xl mr-auto font-semibold max-w-2xl
              "
              >
                {t.contactDialog.submit}
              </span>

              <ArrowRightIcon
                size={22}
                className="text-[#151515] group-hover:translate-x-2 transition duration-200"
              />
            </button>

            <button
              type="button"
              command="close"
              commandFor="contact-dialog"
              className="group flex w-20 cursor-pointer"
            >
              <span
                className="
                text-lg group-hover:scale-[1.01] group-hover:-translate-y-1 transition duration-200
                group-hover:text-[#E8BD70] text-[#b2b2a8]
              "
              >
                {t.contactDialog.cancel}
              </span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const API_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const result = await response.json();

    console.log(result);

    const dialog = document.getElementById(
      "contact-dialog",
    ) as HTMLDialogElement;

    dialog.close();
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

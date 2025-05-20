import type { IUser } from "../../types/shared";
import Input from "../Input";

type FormProps = {
  onSubmit: (data: IUser) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const safeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <Input
        type="text"
        name="name"
        required
        placeholder="Insira seu nome..."
      />
      <Input
        type="email"
        name="email"
        required
        placeholder="Insira seu email..."
      />
      <button
        type="submit"
        className="px-5 py-1 bg-alura-100 dark:bg-dark-200 text-gray-200 uppercase rounded-full w-full max-w-sm hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black hover:translate-y-1 hover:delay-200"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;

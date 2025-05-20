import type { IUser } from "../../types/shared";

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
    <form onSubmit={safeSubmit}>
      <input type="text" name="name" placeholder="Insira seu nome..." />
      <input type="email" name="email" placeholder="Insira seu email..." />
      <button type="submit">Seguir</button>
    </form>
  );
};

export default Form;

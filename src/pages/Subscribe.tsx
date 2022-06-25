import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const buttonHandler = () => {
    navigate("/event");
  };

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="sm:flex flex-col items-center  w-full max-w-[1100px] lg:flex-row  justify-between mt-8 mx-auto">
        <div className="max-w-[640px]">
          <div className="sm:flex justify-center lg:justify-start">
            <Logo />
          </div>

          <h1 className="sm:text-center px-20 lg:text-start lg:px-0 mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="sm:text-center px-20 mb-10 lg:text-start lg:px-0 mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="sm:w-full p-8 bg-gray-700 border border-gray-500 rounded lg:w-auto">
          <strong className="text-2xl m-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
            <button
              onClick={buttonHandler}
              disabled={loading}
              className="mt-4 border border-blue-500 text-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-500 hover:text-gray-900 transition-colors disabled:opacity-50"
            >
              Acessar aulas
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/code-mockup.png"
        className="sm:px-2 lg:px-0"
        alt=""
      />
    </div>
  );
}

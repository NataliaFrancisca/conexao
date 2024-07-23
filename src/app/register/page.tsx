'use client';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="page__auth-user">
      <section className="section__wrapper">
        <header className="page__header">
          <h1>Criar Conta.</h1>
          <p>
            Faça seu <span className="__styled">registro</span> usando sua conta
            Google ou suas credenciais.
          </p>
        </header>

        <form>
          <fieldset className="fieldset__input">
            <div className="div__label-input">
              <label htmlFor="input-register-name">Nome:</label>
              <input
                required
                type="text"
                id="input-register-name"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="div__label-input">
              <label htmlFor="input-register-email">Email:</label>
              <input
                required
                type="email"
                id="input-register-email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="div__label-input">
              <label htmlFor="input-register-password">Senha:</label>
              <input
                required
                type="password"
                id="input-register-password"
                placeholder="Digite sua senha"
              />
            </div>
          </fieldset>

          <div className="div__group-buttons">
            <button type="submit" className="btn__with-image">
              <Image
                src="icon/email.svg"
                width={20}
                height={16}
                alt="icone de email"
              />
              Criar com Email
            </button>

            <button className="btn__with-image btn__bg-google">
              <Image
                src="icon/google.svg"
                width={17.6}
                height={17.96}
                alt="icone do google"
              />
              Criar com Google
            </button>
          </div>

          <span className="link__form-nav">
            Já tem uma conta? <a href="/login">Fazer Login</a>
          </span>
        </form>
      </section>
    </main>
  );
};

export default Page;

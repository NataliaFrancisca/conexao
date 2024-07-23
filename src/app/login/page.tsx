'use client';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="page__auth-user">
      <section className="section__wrapper">
        <header className="page__header">
          <h1>Login.</h1>
          <p>
            Faça seu <span className="__styled">login</span> usando sua conta
            Google ou suas credenciais.
          </p>
        </header>

        <form>
          <fieldset className="fieldset__input">
            <div className="div__label-input">
              <label htmlFor="input-login-email">Email:</label>
              <input
                required
                type="email"
                id="input-login-email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="div__label-input">
              <label htmlFor="input-login-password">Senha:</label>
              <input
                required
                type="password"
                id="input-login-password"
                placeholder="Digite sua senha"
              />
            </div>
          </fieldset>

          <a href="/" className="link__forget-password">
            Esqueceu sua senha?
          </a>

          <div className="div__group-buttons">
            <button type="submit" className="btn__with-image">
              <Image
                src="icon/email.svg"
                width={20}
                height={16}
                alt="icone de email"
              />
              Login com Email
            </button>

            <button className="btn__with-image btn__bg-google">
              <Image
                src="icon/google.svg"
                width={17.6}
                height={17.96}
                alt="icone do google"
              />
              Login com Google
            </button>
          </div>

          <span className="link__form-nav">
            Novo aqui? <a href="/register">Criar Conta</a>
          </span>
        </form>
      </section>
    </main>
  );
};

export default Page;

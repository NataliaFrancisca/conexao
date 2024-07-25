'use client';
import { ChangeEvent } from 'react';
import { EAuthFormOption } from '@/utils/ts/enums';
import { useAuthenticateUser } from '@/hooks/useAuthenticateUser';
import Image from 'next/image';
import Alert from '@/components/Alert/Alert';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import LabeledInput from '@/components/LabeledInput/LabeledInput';

const Page = () => {
  const {
    errors,
    loading,
    alertMessage,
    formInputValues,
    onSubmit,
    setFormInputValues,
  } = useAuthenticateUser(EAuthFormOption.REGISTER);

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

        {loading && <Loader />}

        {alertMessage && (
          <Alert message={alertMessage.message} status={alertMessage.status} />
        )}

        {errors && errors.length > 0 && <ErrorMessage errors={errors} />}

        <form onSubmit={async (e) => await onSubmit(e, false)}>
          <fieldset className="fieldset__input">
            <LabeledInput
              label="Nome:"
              input={{
                id: 'input-register-name',
                placeholder: 'Digite seu nome',
                type: 'text',
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setFormInputValues({
                    ...formInputValues,
                    name: e.target.value,
                  }),
              }}
            />

            <LabeledInput
              label="Email:"
              input={{
                id: 'input-login-email',
                placeholder: 'Digite seu email',
                type: 'email',
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setFormInputValues({
                    ...formInputValues,
                    email: e.target.value,
                  }),
              }}
            />

            <LabeledInput
              label="Senha:"
              input={{
                id: 'input-login-password',
                placeholder: 'Digite sua senha',
                type: 'password',
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setFormInputValues({
                    ...formInputValues,
                    password: e.target.value,
                  }),
              }}
            />
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

            <button
              className="btn__with-image btn__bg-google"
              onClick={async (e) => await onSubmit(e, true)}
            >
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

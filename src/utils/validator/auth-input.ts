import { IAuthFormInputError } from '../ts/interface';

export class AuthInputValidator {
  errors: IAuthFormInputError = { name: null, email: null, password: null };

  name(inputNameValue: string) {
    if (!inputNameValue.trim()) {
      this.errors.name = 'Você precisa digitar seu nome';
    } else if (inputNameValue.length < 2) {
      this.errors.name = 'Seu nome deve ser maior ou igual a 2';
    } else {
      this.errors.name = null;
    }
  }

  email(inputEmailValue: string) {
    if (!inputEmailValue.trim()) {
      this.errors.email = 'Você precisa digitar seu email';
    } else if (!/\S+@\S+\.\S+/.test(inputEmailValue)) {
      this.errors.email = 'Seu email precisa ser um valor válido';
    } else {
      this.errors.email = null;
    }
  }

  password(inputPasswordValue: string) {
    if (!inputPasswordValue.trim()) {
      this.errors.password = 'Você precisa digitar sua senha';
    } else if (inputPasswordValue.length < 8) {
      this.errors.password = 'Sua senha deve conter pelo menos 8 caracteres';
    } else {
      this.errors.password = null;
    }
  }

  firebaseAuthResponse(response: string) {
    switch (response) {
      case 'auth/too-many-requests':
        this.errors.email =
          'A conta que você está tentando acessar no momento está indisponível';
        break;
      case 'auth/invalid-email':
        this.errors.email = 'O email que você digitou está inválido';
        break;
      case 'auth/email-already-in-use':
        this.errors.email = 'O email que você digitou já está sendo utilizado';
        break;
      case 'auth/user-not-found':
        this.errors.email =
          'O email que você digitou está incorreto ou não foi encontrado';
        break;
      case 'auth/wrong-password':
        this.errors.password = 'A senha que você digitou está incorreta';
        break;
      case 'auth/signIn-success':
        this.errors.email = null;
        this.errors.password = null;
        break;
      default:
        this.errors.email =
          'Estamos com problema para realizar autenticação no momento, tente novamente mais tarde';
    }
  }
}

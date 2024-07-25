import { FirebaseError } from 'firebase/app';
import {
  AuthError,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth } from '../config';
import { IAuthFormInputValues } from '@/utils/ts/interface';
import { GET_HTTP_ERROR_STATUS } from '@/utils/constants/http-error';

export class FirebaseAuth {
  private async __signInPersistence() {
    try {
      return await setPersistence(auth, browserLocalPersistence);
    } catch (error: unknown) {
      const errorObj = error as FirebaseError;
      console.log('errorOBJ', errorObj);
    }
  }

  private async __setUserDisplayName(
    userNameDisplayName: string,
    firebaseUser: User,
  ) {
    await updateProfile(firebaseUser, {
      displayName: userNameDisplayName,
    });
  }

  async signIn(loginData: IAuthFormInputValues) {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password,
      );

      if (!response.user) {
        throw new Error();
      }

      await this.__signInPersistence();
      return {
        status: 200,
        message:
          'Login realizado com sucesso. Aguarde enquanto você é redirecionado',
        data: response.user,
      };
    } catch (error) {
      const ERROR_MESSAGE = error as AuthError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);

      if (!response.user) {
        throw new Error();
      }

      await this.__signInPersistence();

      return {
        status: 200,
        message:
          'Acesso realizado com sucesso. Aguarde enquanto você é redirecionado',
        data: response.user,
      };
    } catch (error: unknown) {
      const ERROR_MESSAGE = error as AuthError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }

  async signUp(registerData: IAuthFormInputValues) {
    const { name, password, email } = registerData;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (!response.user) {
        throw new Error();
      }

      this.__setUserDisplayName(name, response.user);

      return {
        status: 200,
        message:
          'Conta criada com sucesso. Aguarde enquanto você é redirecionado.',
        data: response.user,
      };
    } catch (error) {
      const ERROR_MESSAGE = error as AuthError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }
}

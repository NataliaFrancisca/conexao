import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/config';
import { User } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { GET_HTTP_ERROR_STATUS } from '@/utils/constants/http-error';
import { IWord } from '@/utils/ts/interface';

export class WordService {
  private user = auth.currentUser;
  private readonly LISTS_COLLECTION_NAME = 'lists';
  private readonly DATABASE_NAME = 'users';

  constructor() {
    this.user = auth.currentUser;
  }

  private __getDocRef = (user: User) => {
    const userDocRef = doc(db, this.DATABASE_NAME, user.uid);
    return collection(userDocRef, this.LISTS_COLLECTION_NAME);
  };

  async insertWord(listId: string, values: Array<IWord>) {
    try {
      if (this.user === null || this.user === null) {
        throw new Error('auth/error');
      }

      const collectionRef = this.__getDocRef(this.user);
      const ref = doc(collectionRef, listId);

      await updateDoc(ref, {
        words: arrayUnion(...values),
      });

      return {
        status: 200,
        message: 'Palavras adicionadas com sucesso.',
      };
    } catch (error) {
      const ERROR_MESSAGE = error as FirebaseError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }

  async removeWord(listId: string, word: IWord) {
    try {
      if (this.user === null || this.user === null) {
        throw new Error('auth/error');
      }

      const collectionRef = this.__getDocRef(this.user);
      const ref = doc(collectionRef, listId);

      await updateDoc(ref, {
        words: arrayRemove(word),
      });

      return {
        status: 200,
        message: 'Palavra removida com sucesso.',
      };
    } catch (error) {
      const ERROR_MESSAGE = error as FirebaseError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }
}

import { collection, doc, DocumentData, getDocs } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/config';
import { User } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { GET_HTTP_ERROR_STATUS } from '@/utils/constants/http-error';

export class ListsService {
  user = auth.currentUser;
  LISTS_COLLECTION_NAME = 'lists';
  DATABASE_NAME = 'users';

  constructor() {
    this.user = auth.currentUser;
  }

  private __getDocRef = (user: User) => {
    const userDocRef = doc(db, this.DATABASE_NAME, user.uid);
    return collection(userDocRef, this.LISTS_COLLECTION_NAME);
  };

  async readLists() {
    try {
      if (this.user === null || this.user === null) {
        throw new Error('auth/failed');
      }

      const docRef = this.__getDocRef(this.user);
      const snapshot = await getDocs(docRef);

      if (!snapshot) {
        return {
          status: 404,
          message:
            'Ocorreu um erro ao tentar buscar a lista. Por favor, tente novamente mais tarde.',
        };
      }

      const lists: DocumentData[] = [];

      snapshot.forEach((doc) => {
        lists.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return {
        status: 200,
        message: 'Requisição feita com sucesso.',
        data: lists,
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

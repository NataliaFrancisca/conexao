import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/config';
import { User } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { GET_HTTP_ERROR_STATUS } from '@/utils/constants/http-error';
import { IList } from '@/utils/ts/interface';

export class ListService {
  user = auth.currentUser;
  private readonly LISTS_COLLECTION_NAME = 'lists';
  private readonly DATABASE_NAME = 'users';

  constructor() {
    this.user = auth.currentUser;
  }

  private __getDocRef = (user: User) => {
    const userDocRef = doc(db, this.DATABASE_NAME, user.uid);
    return collection(userDocRef, this.LISTS_COLLECTION_NAME);
  };

  private __thereAreDuplicatedLists = async (
    title: string,
    lists: CollectionReference,
  ) => {
    const q = query(lists, where('title', '==', title));
    const queryResult = await getDocs(q);

    if (!queryResult.empty) {
      return {
        status: 409,
        message:
          'Já existe uma lista com esse nome. Por favor, escolha um nome diferente.',
      };
    }
  };

  async createList(title: string) {
    try {
      if (this.user === null || this.user === null) {
        throw new Error();
      }

      const collectionRef = this.__getDocRef(this.user);

      const thereAreDuplicatedLists = await this.__thereAreDuplicatedLists(
        title,
        collectionRef,
      );

      if (thereAreDuplicatedLists) {
        return thereAreDuplicatedLists;
      }

      const response = await addDoc(collectionRef, {
        title,
        words: [],
      });

      if (!response.id) {
        return {
          status: 404,
          message:
            'Ocorreu um erro ao tentar criar a lista. Por favor, tente novamente mais tarde.',
        };
      }

      return {
        status: 200,
        message:
          'Lista criada com sucesso. Aguarde enquanto você é redirecionado.',
      };
    } catch (error) {
      const ERROR_MESSAGE = error as FirebaseError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }

  async deleteList(id: string) {
    try {
      if (this.user === null || this.user === null) {
        throw new Error();
      }

      const docRef = this.__getDocRef(this.user);
      await deleteDoc(doc(docRef, id));

      return {
        status: 200,
        message: 'Lista deletada com sucesso!',
      };
    } catch (error) {
      const ERROR_MESSAGE = error as FirebaseError;

      return {
        status: GET_HTTP_ERROR_STATUS(ERROR_MESSAGE.code),
        message: ERROR_MESSAGE.code,
      };
    }
  }

  async readList(id: string) {
    try {
      if (this.user === null || this.user === null) {
        throw new Error();
      }

      const docRef = this.__getDocRef(this.user);
      const snapshot = await getDocs(docRef);

      let list: DocumentData | null = null;

      if (!snapshot) {
        return {
          status: 404,
          message:
            'Ocorreu um erro ao tentar buscar a lista. Por favor, tente novamente mais tarde.',
        };
      }

      snapshot.forEach((doc) => {
        if (doc.id === id) {
          list = doc.data();
        }
      });

      if (!list) {
        return {
          status: 404,
          message:
            'Ocorreu um erro ao tentar buscar a lista. Por favor, tente novamente mais tarde.',
        };
      }

      return {
        status: 200,
        message: 'Requisição feita com sucesso.',
        data: list as IList,
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

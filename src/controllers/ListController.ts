import { ListService } from '@/service/database/listService';
import { IList } from '@/utils/ts/interface';

export class ListController {
  private listService;

  constructor() {
    this.listService = new ListService();
  }

  fetchList = async (id: string) => {
    const response = await this.listService.readList(id);

    if (response.data) {
      if (response.data.words.length === 0) {
        return {
          message: 'Nenhuma palavra foi salva nessa lista.',
          requestWasSuccess: undefined,
          data: response.data as IList,
        };
      }

      return {
        message: response.message,
        requestWasSuccess: true,
        data: response.data as IList,
      };
    }

    return {
      message: response.message,
      requestWasSuccess: false,
    };
  };

  deleteList = async (id: string) => {
    const response = await this.listService.deleteList(id);

    if (response.status === 200) {
      return {
        message: response.message,
        requestWasSuccess: true,
      };
    }

    return {
      message: response.message,
      requestWasSuccess: false,
    };
  };

  createList = async (title: string) => {
    const response = await this.listService.createList(title);
    if (response.status === 200) {
      return {
        message: response.message,
        requestWasSuccess: true,
      };
    }
    return {
      message: response.message,
      requestWasSuccess: false,
    };
  };
}

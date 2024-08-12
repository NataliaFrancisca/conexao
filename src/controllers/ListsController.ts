import { ListsService } from '@/service/database/listsService';
import { IList } from '@/utils/ts/interface';

export class ListsController {
  listsService;

  constructor() {
    this.listsService = new ListsService();
  }

  fetchLists = async () => {
    const response = await this.listsService.readLists();

    if (response.data) {
      if (response.data.length === 0) {
        return {
          message: 'Nenhuma lista foi criada.',
          requestWasSuccess: undefined,
        };
      }

      return {
        message: response.message,
        requestWasSuccess: true,
        data: response.data as IList[],
      };
    }

    return {
      message: response.message,
      requestWasSuccess: false,
    };
  };
}

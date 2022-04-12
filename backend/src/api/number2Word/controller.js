import { BadRequest, NotAcceptable } from '@feathersjs/errors';
import hooks from './hooks';
import Service from './service';
import { toBool } from '../../utils/functions';
import logger from '../../middleware/logger';

class Number2WordControllers {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
    this.service = new Service();
  }

  async find(params) {
    const { search, useDictionary } = params.query || {};
    if (!search) {
      throw new BadRequest('Missing search parameter');
    }
    // Filter and use only valid 2-9 numbers for now
    const numbers = search.match(/[2-9]/g);

    // throw error if valid params are not found
    if (!numbers?.length) {
      throw new NotAcceptable('Invalid search parameters');
    }

    let words = this.service.convertNumbersToWords(numbers);

    // match the word against the dictionary if useDictionary=true is passed
    if (toBool(useDictionary)) {
      words = this.service.findWordsInDictionary(words);
    }
    logger.info(`Returning response for request: ${search}`);
    return { input: search, result: words };
  }
}

export default function numberController() {
  const apiService = new Number2WordControllers();
  this.use('/api', apiService);
  this.service('/api').hooks(hooks);
}

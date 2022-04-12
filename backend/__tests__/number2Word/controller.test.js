import { BadRequest, NotAcceptable } from '@feathersjs/errors';
import controller from '../../src/api/number2Word/controller';

describe('api controller', () => {
  let apiController = null;

  const mockUse = jest.fn((endpoint, service) => {
    apiController = service;
  });

  const app = {
    emit: jest.fn(),
    configure: jest.fn(),
    use: mockUse,
    get: jest.fn(() => 'Europe/London'),
    service: jest.fn(() => ({
      hooks: jest.fn(),
    })),
  };

  beforeEach(() => {
  });

  it('should use the api controller', () => {
    controller.call(app);
    apiController.setup(app);
    expect(mockUse).toBeCalledWith('/api', apiController);
    expect(mockUse).toHaveBeenCalledTimes(1);
  });

  it('FIND should throw error if missing parameters', async () => {
    expect.assertions(1);
    try {
      await apiController.find({});
    } catch (error) {
      expect(error).toEqual(new BadRequest('Missing search parameter'));
    }
  });

  it('FIND should throw error if invalid parameters are passed', async () => {
    const params = {
      query: {
        search: '10xyz',
      },
    };
    expect.assertions(1);
    try {
      await apiController.find(params);
    } catch (error) {
      expect(error).toEqual(new NotAcceptable('Invalid search parameters'));
    }
  });

  it('FIND should return the correct mapping for a single digit', async () => {
    const params = {
      query: {
        search: '2',
      },
    };

    const expectedResult = {
      input: '2',
      result: [
        'a',
        'b',
        'c',
      ],
    };

    expect.assertions(1);
    const result = await apiController.find(params);
    expect(result).toEqual(expectedResult);
  });

  it('FIND should return the correct mapping for multiple digit', async () => {
    const params = {
      query: {
        search: '29',
      },
    };

    const expectedResult = {
      input: '29',
      result: [
        'aw',
        'ax',
        'ay',
        'az',
        'bw',
        'bx',
        'by',
        'bz',
        'cw',
        'cx',
        'cy',
        'cz',
      ],
    };

    expect.assertions(1);
    const result = await apiController.find(params);
    expect(result).toEqual(expectedResult);
  });

  it('FIND should return the results filtered through the dictionary if param is useDictionary passed', async () => {
    const params = {
      query: {
        search: '228',
        useDictionary: true,
      },
    };

    const expectedResult = {
      input: '228',
      result: [
        'abt',
        'abu',
        'abv',
        'act',
        'bat',
        'cat',
        'cav',
      ],
    };

    expect.assertions(1);
    const result = await apiController.find(params);
    expect(result).toEqual(expectedResult);
  });
});

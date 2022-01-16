import RecordsRepository from '../../src/repositories/recordsRepository';
import MongoDbClient from '../../src/database/mongoDbClient';

import RecordsRepositoryMongo from '../../src/repositories/recordsRepositoryMongo';

jest.mock('../../src/database/mongoDbClient');
const searchResults = [
  {
    key: 'jsAEYsXw',
    createdAt: '2015-12-24T09:44:27.930Z',
    totalCount: 98,
  },
  {
    key: 'YSzbdqDL',
    createdAt: '2015-12-23T21:40:55.648Z',
    totalCount: 76,
  },
];

describe('Records repository', () => {
  let repository: RecordsRepository;

  let mongoClient: MongoDbClient;

  beforeAll(() => {
    mongoClient = new MongoDbClient();

    (mongoClient.getCollection as jest.Mock).mockReturnValue(
      Promise.resolve({
        aggregate: () => ({
          toArray: jest.fn(() => searchResults),
        }),
      })
    );
  });

  beforeEach(() => {
    repository = new RecordsRepositoryMongo(mongoClient);
  });

  it('should search items', async () => {
    const collection = await mongoClient.getCollection();
    const aggregate = collection.aggregate();
    const array = await aggregate.toArray();

    // Arrange
    const startDate = '1970-01-01';
    const endDate = '2022-01-16';
    const minCount = 0;
    const maxCount = 9000;

    // Act
    const items = await repository.searchItems(startDate, endDate, minCount, maxCount);

    // Assert
    expect(items).toBe(searchResults);
  });
});

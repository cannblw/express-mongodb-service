import RecordsRepository from '../../src/repositories/recordsRepository';
import MongoDbClient from '../../src/database/mongoDbClient';
import SearchServiceImpl from '../../src/services/searchServiceImpl';

import RecordsRepositoryMongo from '../../src/repositories/recordsRepositoryMongo';
import SearchService from '../../src//services/searchService';
jest.mock('../../src/repositories/recordsRepositoryMongo');
jest.mock('../../src/database/mongoDbClient');

describe('Search service', () => {
  let service: SearchService;

  let mongoClient: MongoDbClient;
  let recordsRepository: RecordsRepository;

  beforeAll(() => {
    mongoClient = new MongoDbClient();
    recordsRepository = new RecordsRepositoryMongo(mongoClient);
    (recordsRepository.searchItems as jest.Mock).mockReturnValue(jest.fn());
  });

  beforeEach(() => {
    service = new SearchServiceImpl(recordsRepository);
  });

  it('should call repository to find items', () => {
    // Arrange
    const startDate = '1970-01-01';
    const endDate = '2022-01-16';
    const minCount = 0;
    const maxCount = 9000;

    // Act
    service.searchItems(startDate, endDate, minCount, maxCount);

    // Assert
    expect(recordsRepository.searchItems).toHaveBeenCalled();
  });
});

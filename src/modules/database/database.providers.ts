
import * as mongoose  from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://admin:admin2019@ds117846.mlab.com:17846/database-nestjs', {
        useNewUrlParser: true,
      }),
    }
];

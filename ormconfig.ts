export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'Entrega05',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};

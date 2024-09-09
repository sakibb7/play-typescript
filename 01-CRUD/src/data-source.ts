import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "mydatabase.sqlite",
  synchronize: true,
  logging: false,
  entities: [Person],
});

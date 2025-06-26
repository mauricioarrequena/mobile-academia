import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return await SQLite.openDatabase({
    name: 'movieexplorer.db',
    location: 'default',
  });
};

export const createTables = async () => {
  const db = await getDBConnection();

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS Collections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS CollectionMovies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collection_id INTEGER NOT NULL,
      movie_id INTEGER NOT NULL,
      FOREIGN KEY(collection_id) REFERENCES Collections(id)
    );
  `);

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS Movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,       -- Local DB ID
      apiId INTEGER UNIQUE NOT NULL,              -- Unique movie ID from external API
      title TEXT NOT NULL,
      overview TEXT,
      release_date TEXT
    );
  `);
};

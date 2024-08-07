import { Database } from 'sqlite3';

const db = new Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    long_url TEXT NOT NULL,
    short_url TEXT NOT NULL
  )`);
});

export default db;

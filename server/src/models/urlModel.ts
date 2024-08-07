import db from '../database';

interface URL {
  id?: number;
  long_url: string;
  short_url: string;
}

export const createURL = (long_url: string, short_url: string): Promise<URL> => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(`INSERT INTO urls (long_url, short_url) VALUES (?, ?)`);
    stmt.run(long_url, short_url, function (this: { lastID: number }, err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, long_url, short_url });
      }
    });
    stmt.finalize();
  });
};

export const getURLByShortCode = (short_url: string): Promise<URL | null> => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM urls WHERE short_url = ?`, [short_url], (err: Error | null, row: any) => {
      if (err) {
        reject(err);
      } else {
        if (row && typeof row.id === 'number' && typeof row.long_url === 'string' && typeof row.short_url === 'string') {
          resolve(row as URL);
        } else {
          resolve(null);
        }
      }
    });
  });
};

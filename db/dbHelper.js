import * as SQLite from 'expo-sqlite';
const db = await SQLite.openDatabaseAsync('jomakhoroch.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT
      );`
    );
  });
};

export const insertNote = (title) => {
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO notes (title) VALUES (?);",
      [title],
      (_, result) => console.log("Inserted ID:", result.insertId),
      (_, error) => console.log("Insert error:", error)
    );
  });
};

export const getNotes = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM notes;",
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.log("Read error:", error)
    );
  });
};

export const updateNote = (id, newTitle) => {
  db.transaction(tx => {
    tx.executeSql(
      "UPDATE notes SET title = ? WHERE id = ?;",
      [newTitle, id],
      () => console.log("Updated"),
      (_, error) => console.log("Update error:", error)
    );
  });
};

export const deleteNote = (id) => {
  db.transaction(tx => {
    tx.executeSql(
      "DELETE FROM notes WHERE id = ?;",
      [id],
      () => console.log("Deleted"),
      (_, error) => console.log("Delete error:", error)
    );
  });
};

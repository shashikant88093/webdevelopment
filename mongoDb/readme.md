

# MongoDB Interview Questions and Answers

---

## ✅ Beginner Level

### 1. What is MongoDB?
MongoDB is a NoSQL, document-oriented database. It stores data in JSON-like documents, allowing for a flexible and dynamic schema.

### 2. What is a document in MongoDB?
A document is a set of key-value pairs (similar to JSON) that represent a single record in MongoDB.

### 3. What is a collection in MongoDB?
A collection is a group of MongoDB documents, equivalent to a table in relational databases.

### 4. Difference between MongoDB and SQL databases?

| Feature         | MongoDB (NoSQL)       | SQL Databases         |
|-----------------|------------------------|------------------------|
| Schema          | Dynamic                | Fixed Schema           |
| Storage Format  | BSON (Binary JSON)     | Table Rows             |
| Relationships   | Embedded/References    | Joins                  |
| Query Language  | Mongo Query Language   | SQL                    |

### 5. How do you insert a document?
```js
db.users.insertOne({ name: "John", age: 30 });
````

---

## ⚙️ Intermediate Level

### 6. How do you update a document?

```js
db.users.updateOne({ name: "John" }, { $set: { age: 35 } });
```

### 7. What is ObjectId in MongoDB?

ObjectId is a unique 12-byte identifier used as the default `_id` in MongoDB documents. It contains:

* 4 bytes for timestamp
* 5 bytes for machine and process ID
* 3 bytes for an incrementing counter

### 8. How do you create an index?

```js
db.users.createIndex({ name: 1 });
```

### 9. What is the Aggregation Framework?

A powerful feature to transform and compute data using stages like `$match`, `$group`, `$project`, etc.

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
]);
```

### 10. How to delete a document?

```js
db.users.deleteOne({ name: "John" });
```

---

## 🚀 Advanced Level

### 11. What is replication in MongoDB?

Replication is the process of syncing data across multiple servers using a **replica set**, ensuring high availability and fault tolerance.

### 12. What is sharding?

Sharding is MongoDB’s horizontal scaling mechanism, where data is distributed across multiple machines called shards.

### 13. What are the types of indexes in MongoDB?

* Single Field Index
* Compound Index
* Multikey Index
* Text Index
* Hashed Index
* Geospatial Index

### 14. How to perform ACID transactions in MongoDB?

MongoDB 4.0+ supports multi-document transactions using sessions:

```js
const session = client.startSession();
session.withTransaction(async () => {
  await db.orders.insertOne({ item: "pen" }, { session });
  await db.inventory.updateOne({ item: "pen" }, { $inc: { qty: -1 } }, { session });
});
```

### 15. Difference between `$lookup` and `$graphLookup`?

* `$lookup`: Performs join-like operations between collections.
* `$graphLookup`: Performs recursive traversal on documents within a collection.

---

## 🎯 Practical / Scenario-Based

### 16. How to model one-to-many relationships in MongoDB?

* **Embedding**: When related data is small and accessed together.
* **Referencing**: When related data is large or accessed separately.

### 17. How to perform pagination?

```js
db.users.find().skip(20).limit(10);
```

### 18. How to merge two documents?

Assume:

```json
// Document A
{ _id: 1, name: "John", age: 30 }

// Document B
{ _id: 2, city: "Delhi", phone: "1234567890" }
```

Merge B into A:

```js
const docA = db.users.findOne({ _id: 1 });
const docB = db.users.findOne({ _id: 2 });
delete docB._id;
db.users.updateOne({ _id: 1 }, { $set: docB });
```

### 19. What is the CAP theorem in MongoDB?

MongoDB is CP (Consistency + Partition tolerance) by default but can be tuned for availability using read/write concern settings.

### 20. How do you back up and restore a MongoDB database?

```bash
# Backup
mongodump --db=mydb

# Restore
mongorestore --db=mydb ./dump/mydb
```

---

## 🧠 Tips and Best Practices

* Use indexes wisely to optimize queries.
* Use `projection` to return only required fields.
* Use `$explain()` to understand query execution plans.
* Monitor with tools like `mongotop`, `mongostat`, and Atlas dashboards.
* Design schema based on application access patterns (Schema Design Anti-Patterns).

```

---

Would you like me to export this into a **PDF**, or upload it as a downloadable `.md` file?
```

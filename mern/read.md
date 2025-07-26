# **MERN Stack SDE 3 Interview Q&A**

## **1. Introduction & Experience**
### **Q1: Walk us through your experience with the MERN stack.**
**Answer:**  
- Highlight projects where you used **MongoDB** (e.g., optimized queries, sharding), **Express.js** (e.g., middleware design, REST/GraphQL APIs), **React** (e.g., state management, SSR), and **Node.js** (e.g., scaling with clustering).  
- Example: *"Scaled a Node.js API to handle 10K RPS using Redis caching and MongoDB read replicas."*

---

## **2. Technical Deep Dive**
### **Node.js & Express**
#### **Q2: How does the Node.js event loop work?**
**Answer:**  
- Node.js uses a **single-threaded event loop** with libuv for async I/O.  
- Phases: Timers → Pending callbacks → Poll (I/O) → Check (setImmediate) → Close callbacks.  
- **Blocking risk:** CPU-heavy tasks stall the loop (solution: Worker Threads).

#### **Q3: How would you secure an Express API?**
**Answer:**  
- **JWT/OAuth** for auth, **helmet.js** for headers, **rate-limiting**, **CORS whitelisting**, **input validation** (e.g., Joi), and **SQL/NoSQL injection** prevention.

### **MongoDB**
#### **Q4: When would you use MongoDB transactions?**
**Answer:**  
- For **multi-document ACID compliance** (e.g., banking apps).  
- Trade-off: Transactions reduce performance → Use only when critical.

#### **Q5: How do you optimize a slow aggregation query?**
**Answer:**  
1. Add **indexes** on filtered fields.  
2. Use `$match` early to reduce documents.  
3. Limit `$project` stages.  
4. Consider **denormalization** if frequent joins.

### **React**
#### **Q6: Compare Redux vs. Context API.**
**Answer:**  
- **Redux:** Predictable state, middleware (thunk/saga), good for complex apps.  
- **Context API:** Lightweight, no middleware, prone to re-renders (use + `useMemo`).  

#### **Q7: How do you optimize React performance?**
**Answer:**  
- **Memoization:** `React.memo`, `useMemo`, `useCallback`.  
- **Lazy loading:** `React.lazy()` + Suspense.  
- **Virtualization:** `react-window` for large lists.  

---

## **3. System Design**
### **Q8: Design a URL shortener (like Bit.ly).**
**Answer:**  
**Requirements:**  
- High traffic (1M URLs/day), low latency, unique short codes.  

**Solution:**  
1. **Shortening:**  
   - Hash original URL (e.g., MD5 → base62) → store in **MongoDB** (`{ shortCode: "xYz12", originalUrl: "..." }`).  
   - **Conflict handling:** Retry on collision.  
2. **Redirection:**  
   - Cache short codes in **Redis** (99% hit rate).  
3. **Scaling:**  
   - **DB:** Shard by shortCode.  
   - **Load balancers:** Distribute traffic.  
   - **CDN:** Cache frequent URLs.  

**Follow-up:** How to handle 10x traffic spikes?  
- **Autoscaling:** Kubernetes + cloud functions.  
- **Rate limiting:** Protect DB with Redis counters.  

---

## **4. Coding Problem**
### **Q9: Flatten a deeply nested object.**
```javascript
function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// Test:
flattenObject({ a: 1, b: { c: 2, d: [3, 4] } }); 
// Output: { a: 1, 'b.c': 2, 'b.d': [3, 4] }
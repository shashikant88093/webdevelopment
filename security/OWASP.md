# OWASP Top Ten

## ⚠️ Important Note: Upcoming OWASP Top 10:2025

**Current Status (as of September 2024):**

* The OWASP Top 10:2025 is **expected to be released in the first half of 2025**.
* **Data Collection (Now - December 2024)** is ongoing. OWASP requests **donations of application penetration testing statistics**.

Stay tuned for updates at [owasp.org](https://owasp.org/).

---

## 🔒 About OWASP Top 10

The **OWASP Top 10** is a **standard awareness document** for developers and organizations, widely recognized as a key starting point for ensuring **secure web application development**.

> "It represents a broad consensus about the most critical security risks to web applications."

* **Adopted globally** by development teams and security professionals.
* **First step** in transforming your development culture towards secure coding practices.
* **Promotes actionable awareness** of the most common security issues.

---

## 🔝 OWASP Top 10: 2021 Edition

There are **3 new categories**, **4 renamed or re-scoped categories**, and some **consolidation** from the previous edition (2017).

### 🤹 A01:2021 – Broken Access Control

* **Position Shift**: Moved up from #5
* **Coverage**: Found in **94% of tested apps**
* **Details**: Improper enforcement of user permissions allowing unauthorized access.
* **Example**: URL tampering to access another user's records.

---

### 🤹 A02:2021 – Cryptographic Failures

* **Previous Name**: Sensitive Data Exposure
* **Focus**: On **failures in cryptography** instead of just symptoms.
* **Impact**: Often leads to **data leaks** or **system compromise**.
* **Example**: Not using HTTPS, weak encryption.

---

### 🤹 A03:2021 – Injection

* **Position Change**: Slid down to #3
* **Prevalence**: 94% of applications were tested for it
* **Note**: Now includes **Cross-Site Scripting (XSS)**
* **Example**: SQL, NoSQL, OS command injections

---

### 🤹 A04:2021 – Insecure Design (New!)

* **Focus**: Design-level flaws, not implementation bugs
* **Need**: Emphasis on threat modeling and secure architecture early in SDLC
* **Example**: Missing security controls by design

---

### 🤹 A05:2021 – Security Misconfiguration

* **Previous Rank**: #6 in 2017
* **Trend**: 90% of apps had some misconfiguration
* **Includes**: XML External Entities (XXE) from older list
* **Example**: Default credentials, unnecessary ports open

---

### 🤹 A06:2021 – Vulnerable and Outdated Components

* **Previous Name**: Using Components with Known Vulnerabilities
* **Challenge**: Often hard to test and assess
* **Survey Rank**: #2 in community survey
* **Example**: Using unpatched libraries

---

### 🤹 A07:2021 – Identification and Authentication Failures

* **Previous Name**: Broken Authentication
* **Shift**: Includes more identity-related weaknesses
* **Improvement**: Standard auth frameworks reducing risk
* **Example**: Predictable login tokens, lack of MFA

---

### 🤹 A08:2021 – Software and Data Integrity Failures (New!)

* **Scope**: Assumptions about software updates and CI/CD without verification
* **High Impact**: Based on CVSS/CVE mapping
* **Merged In**: Insecure Deserialization (from 2017)
* **Example**: Unsigned software update packages

---

### 🤹 A09:2021 – Security Logging and Monitoring Failures

* **Previous Name**: Insufficient Logging and Monitoring
* **Expanded Scope**: Includes failures in alerting and forensic support
* **Survey Rank**: #3 in community survey
* **Challenge**: Difficult to test, poor CVE representation

---

### 🤹 A10:2021 – Server-Side Request Forgery (SSRF) (New!)

* **Added Due To**: Community survey feedback (#1 rank)
* **Incidence**: Lower than others but **high impact potential**
* **Example**: Forcing backend to make HTTP requests internally (e.g., AWS metadata URLs)

---

## 📅 Summary

| Rank | Category                         | Status        |
| ---- | -------------------------------- | ------------- |
| A01  | Broken Access Control            | ⬆️ From #5    |
| A02  | Cryptographic Failures           | ⬆️ Re-scoped  |
| A03  | Injection                        | ⬇️ Slid to #3 |
| A04  | Insecure Design                  | ✨ New         |
| A05  | Security Misconfiguration        | ⬆️ From #6    |
| A06  | Vulnerable/Outdated Components   | ⬆️ From #9    |
| A07  | Identification/Auth Failures     | ⬇️ From #2    |
| A08  | Software/Data Integrity Failures | ✨ New         |
| A09  | Logging/Monitoring Failures      | ⬆️ From #10   |
| A10  | Server-Side Request Forgery      | ✨ New         |

---

## 📊 Resources

* [OWASP Official Website](https://owasp.org/)
* [OWASP Top 10 Project Page](https://owasp.org/www-project-top-ten/)
* [Community Survey Results](https://owasp.org/www-project-top-ten/#OWASP_Top_10_Community_Survey_Results)

Stay updated, secure your code, and foster a culture of security!

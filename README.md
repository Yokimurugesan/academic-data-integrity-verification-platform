# Academic Data Integrity System

## Overview
The **Academic Data Integrity System** is a web-based platform that ensures the authenticity and accuracy of academic records and documents. It allows students to upload their marksheets and certificates, admins to verify them, and verifiers to independently check the integrity of documents using **SHA-256 hashing**.

This system improves transparency, prevents tampering, and makes document verification efficient and reliable for colleges.

---

## Features

### Role-Based Access
- **Student:** Upload documents, view verification status (Pending / Verified / Rejected)
- **Admin:** Upload, edit, and verify student documents; manage audit logs and version control
- **Verifier:** Independently verify document authenticity (Original / Tampered)

### Document Verification
- SHA-256 hashing for tamper-proof verification
- Admin verification ensures correctness of uploads
- Optional QR code for instant external verification

### Additional Features
- Audit trail of all actions (uploads, edits, verification)
- Version control for multiple document submissions
- Notifications for students on verification status
- Search and filter in admin dashboard for efficient management

---

## Tech Stack

- **Frontend:** React.js or HTML/CSS + JavaScript
- **Backend:** Node.js + Express.js
  - Libraries: `crypto` (SHA-256), `multer` (file uploads)
- **Database:** MongoDB (stores documents metadata, hashes, user roles, and audit logs)
- **Optional Enhancements:** QR code generation, batch verification

---

## Workflow

1. **Student Uploads Document**
   - Document hash generated
   - Status set as Pending Verification

2. **Admin Verification**
   - Admin checks correctness
   - Marks document as Verified or Rejected
   - Hash stored for integrity check

3. **Student Dashboard**
   - Shows status of each uploaded document
   - Students can re-upload rejected documents

4. **Verifier Check**
   - Verifier uploads document for verification
   - System compares hash → Original / Tampered

---

## Database Schema (MongoDB Example)

**Collection:** `documents`
```json
{
  "studentID": "22CS101",
  "documentName": "marksheet.pdf",
  "hash": "3a7bd3e2360a3d659...",
  "uploadDate": "2026-02-12",
  "status": "Pending",
  "version": 1
}

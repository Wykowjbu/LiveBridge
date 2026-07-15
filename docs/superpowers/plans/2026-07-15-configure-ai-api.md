# Configure AI API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configure the project to use the new online tunnel AI API instead of the local 9Router proxy.

**Architecture:** Create a `.env` file at the root containing the new API URL, API Key, and Model ID, ensuring it is ignored by git. React Vite will consume these environment variables via `import.meta.env` at runtime.

**Tech Stack:** React, Vite, Node.js

## Global Constraints

- VITE_AI_API_URL=https://r8aq358.abc-tunnel.us/v1
- VITE_AI_API_KEY=sk-43e907123f346d3e-xelwyy-59a2f78c
- VITE_AI_MODEL=claude-gemini
- VITE_AI_FALLBACK_MODEL=claude-gemini

---

### Task 1: Environment Configuration

**Files:**
- Create: `D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/.env`
- Modify: `D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/.gitignore:1-25`

**Interfaces:**
- Produces: Environment variables `VITE_AI_API_URL`, `VITE_AI_API_KEY`, `VITE_AI_MODEL`, `VITE_AI_FALLBACK_MODEL` to React runtime.

- [ ] **Step 1: Create the `.env` file**
  Create file `D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/.env` with the following content:
  ```env
  VITE_AI_API_URL=https://r8aq358.abc-tunnel.us/v1
  VITE_AI_API_KEY=sk-43e907123f346d3e-xelwyy-59a2f78c
  VITE_AI_MODEL=claude-gemini
  VITE_AI_FALLBACK_MODEL=claude-gemini
  ```

- [ ] **Step 2: Verify and update `.gitignore`**
  Check the `.gitignore` file to verify that `.env` is listed. If not, append `.env` to the end of the file.
  
  Run PowerShell check:
  `Select-String -Path "D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/.gitignore" -Pattern "^\.env$"`
  Expected output: Matches `.env` line.

- [ ] **Step 3: Run git status to ensure `.env` is ignored**
  Run: `git status`
  Expected: The file `.env` should NOT appear under "Untracked files".

- [ ] **Step 4: Commit `.gitignore` changes**
  If `.gitignore` was modified:
  ```bash
  git add .gitignore
  git commit -m "chore: add .env to gitignore"
  ```

---

### Task 2: Code Verification and Testing

**Files:**
- Modify: `D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/src/pages/LiveStudioDashboardPage.jsx:8-12`
- Test: `C:/Users/hantu/.gemini/antigravity-cli/brain/74fe74c7-5335-44ca-b370-d57a65d07836/scratch/test_ai_api.js`

**Interfaces:**
- Consumes: Environment variables set in Task 1.

- [ ] **Step 1: Check LiveStudioDashboardPage.jsx config**
  Ensure the React component correctly resolves the environment variables. The code at lines 8-11:
  ```javascript
  const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'http://localhost:20128/v1';
  const AI_MODEL = import.meta.env.VITE_AI_MODEL || 'oc/mimo-v2.5-free';
  const AI_FALLBACK_MODEL = import.meta.env.VITE_AI_FALLBACK_MODEL || 'gemini/gemini-3.1-flash-lite-preview';
  const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || 'sk-4362950855100528-3pcfmz-cfebc509';
  ```
  This is correct and does not require modification since it checks `import.meta.env` first.

- [ ] **Step 2: Create a verification script**
  Create a temporary script `D:/Users/huynpde180519/fpt/SUMMER_26/EXE201/Source/LiveBridge/scratch_test_env.js` to ensure the project environment variables are loaded properly.
  ```javascript
  import { config } from 'dotenv';
  import path from 'path';
  import { fileURLToPath } from 'url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  config({ path: path.resolve(__dirname, '.env') });

  console.log("URL:", process.env.VITE_AI_API_URL);
  console.log("KEY:", process.env.VITE_AI_API_KEY);
  console.log("MODEL:", process.env.VITE_AI_MODEL);
  ```

- [ ] **Step 3: Run the environment loading check**
  Install `dotenv` for the test if not available, or check it manually using a quick script.
  Run: `node -e "require('dotenv').config(); console.log(process.env.VITE_AI_MODEL)"` (if dotenv is globally installed or available in node_modules, else install it to devDependencies).
  
  Actually, let's just write a plain script that loads `.env` manually via node to avoid npm installs:
  ```javascript
  const fs = require('fs');
  const path = require('path');
  const envContent = fs.readFileSync(path.resolve(__dirname, '.env'), 'utf-8');
  console.log(envContent);
  ```
  Run: `node -e "const fs = require('fs'); console.log(fs.readFileSync('.env', 'utf-8'))"`
  Expected: Outputs the `.env` variables correctly.

- [ ] **Step 4: Cleanup temporary test scripts**
  Ensure no temporary testing scripts are left in the main codebase folder.

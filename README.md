# Student Management System

Frontend for a training institute management system, built with React + Vite.

The application is split into **two completely separate portals**:

| Portal   | Base path   | Layout           | Sidebar           | Route tree                       |
| -------- | ----------- | ---------------- | ----------------- | -------------------------------- |
| Student  | `/student`  | `StudentLayout`  | `StudentSidebar`  | `routes/StudentRoutes.jsx`       |
| Teacher  | `/teacher`  | `TeacherLayout`  | `TeacherSidebar`  | `routes/TeacherRoutes.jsx`       |

Rules that keep the portals independent:

- Student and teacher pages never share a folder (`src/pages/student/` vs `src/pages/teacher/`).
- Each portal has its own layout, sidebar and route tree.
- Reusable UI lives in `src/components/common/` and is **never** duplicated per portal.
- Sidebar entries are declared in `src/config/navigation.js`, one list per portal.
- The layouts render `<Outlet />`, so the sidebar/topbar stay mounted while the page changes.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run lint     # eslint
```

## Folder structure

```
src/
├── assets/                     # images, icons
├── components/
│   ├── common/                 # shared UI (Button, Card, Input, Modal, Table,
│   │   │                       #  PageHeader, Sidebar, Icon, ModulePlaceholder)
│   ├── student/                # StudentSidebar
│   └── teacher/                # TeacherSidebar
├── config/                     # icons.js, navigation.js
├── context/                    # AuthContext.js, AuthProvider.jsx
├── hooks/                      # useAuth.js, useToggle.js
├── layouts/                    # PortalShell.jsx, StudentLayout.jsx, TeacherLayout.jsx
├── pages/
│   ├── common/                 # portal-agnostic pages (chooser, 404, legacy starter)
│   ├── student/                # Dashboard … Settings
│   └── teacher/                # Dashboard … Settings
├── routes/                     # StudentRoutes.jsx, TeacherRoutes.jsx, RoleGuard.jsx
├── services/                   # api.js (single HTTP entry point)
├── utils/                      # cn.js, constants.js
├── App.jsx                     # root router
├── index.css                   # design tokens + global reset
└── main.jsx                    # BrowserRouter + AuthProvider
```

## Routes

- `/` – portal chooser (temporary, replaced by login later)
- `/student/*` – student portal (`/student` redirects to `/student/dashboard`)
- `/teacher/*` – teacher portal (`/teacher` redirects to `/teacher/dashboard`)
- `/vite-starter` – original Vite starter screen, kept during restructuring (safe to delete)

## Status

Routing, layouts, sidebars and shared components are in place. Module pages render a
placeholder; the dashboards and every feature are still to be implemented, and there is no
backend wired up yet (`src/services/api.js` points at `/api` by default, configurable with
`VITE_API_BASE_URL`).
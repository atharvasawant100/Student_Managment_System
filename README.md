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
│   ├── common/                 # shared UI, never duplicated per portal
│   │   │                       # Button, Card, Input, Modal, Table, PageHeader,
│   │   │                       # Sidebar, NotificationBell, UserMenu, Icon,
│   │   │                       # ModulePlaceholder
│   ├── student/                # StudentSidebar, StudentHeader
│   └── teacher/                # TeacherSidebar
├── config/                     # icons.js, navigation.js
├── context/                    # AuthContext.js, AuthProvider.jsx
├── hooks/                      # useAuth.js, useToggle.js, usePageMeta.js
├── layouts/                    # PortalShell.jsx, StudentLayout.jsx, TeacherLayout.jsx
├── pages/
│   ├── common/                 # portal-agnostic pages (chooser, 404, legacy starter)
│   ├── student/                # Dashboard … Settings
│   └── teacher/                # Dashboard … Settings
├── routes/                     # StudentRoutes.jsx, TeacherRoutes.jsx, RoleGuard.jsx
├── services/                   # api.js (single HTTP entry point)
├── utils/                      # cn.js, constants.js, date.js, string.js
├── App.jsx                     # root router
├── index.css                   # design tokens + global reset
└── main.jsx                    # BrowserRouter + AuthProvider
```

## Student portal layout

`StudentLayout` is chrome only - it holds no module UI:

```
StudentLayout                     src/layouts/StudentLayout.jsx
├── StudentSidebar                src/components/student/StudentSidebar.jsx
└── main area (PortalShell)
    ├── StudentHeader             src/components/student/StudentHeader.jsx
    │   ├── page title + subtitle  (auto, from the current route)
    │   ├── NotificationBell
    │   └── UserMenu (avatar, name, role, dropdown)
    └── <Outlet />               module page content
```

- **Auto page title** - `usePageMeta(studentNavItems)` matches the current pathname against
  `src/config/navigation.js`, so the header title/subtitle updates on every navigation
  (`Exams` -> "Exams & Marks", `Profile` -> "My Profile", dashboard shows today's date).
  Adding a module = page + route + one nav entry; no header edits needed.
- **Responsive** - the sidebar is a fixed 264px column on desktop; below 1024px it becomes
  an off-canvas drawer opened by the header hamburger, with a backdrop that closes it.
- Page-level `PageHeader` is intentionally **not** rendered by student pages, because the
  layout header already shows the page title. It stays available for modules that need an
  in-page section heading.

## Student dashboard

`src/pages/student/Dashboard/` is built to the dashboard reference design and composed only
from shared components:

| Block | Component |
| --- | --- |
| Hero (greeting + current course) | `components/common/GreetingBanner` |
| 4 KPI cards | `components/common/StatCard` + `IconTile` |
| Upcoming Classes / Pending Assignments / Weekly Timetable | `Card` + `ListRow` + `StatusPill` |
| Recent Announcements | `Card` + `ListRow` + `IconTile` |
| Quick Links | `components/common/QuickLinks` |

`Dashboard/dashboardData.js` holds mock data in the shape the components expect - replace it
with a `dashboardService` call once the backend exists (no JSX changes required). The greeting
switches by time of day via `utils/date.js`.

## Routes

- `/` – portal chooser (temporary, replaced by login later)
- `/student/*` – student portal (`/student` redirects to `/student/dashboard`)
- `/teacher/*` – teacher portal (`/teacher` redirects to `/teacher/dashboard`)
- `/vite-starter` – original Vite starter screen, kept during restructuring (safe to delete)

## Status

Routing, layouts, sidebars, the student portal header and shared components are in place.
The Student Portal shell (sidebar + auto-titled header + `<Outlet />`) is finished; module
pages still render a placeholder, so neither dashboard is designed yet. The Teacher Portal
still uses the default topbar until `<TeacherHeader />` is built from the same components.
There is no backend wired up yet (`src/services/api.js` points at `/api` by default,
configurable with `VITE_API_BASE_URL`), and the session in `AuthProvider` is a mock.
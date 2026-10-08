# Student Housing Application

A student-housing management prototype with resident-facing screens and administration interfaces backed by an ASP.NET Core API.

## Current status

Academic application prototype. Frontend routes cover dashboards, calendars, profiles, complaints, task assignment, and administration. A visible UI route does not by itself confirm that its entire workflow is implemented or authorized by the backend.

## Features and implementation

- React public pages, login/registration screens, and resident/admin layouts.
- Calendar and complaint-related interfaces.
- ASP.NET Core controllers and services for authentication, users, and admin-role operations.
- MongoDB configuration and dependency injection.
- JWT bearer authentication with issuer, audience, and lifetime validation.

## Technology

React, TypeScript, Vite, Tailwind CSS, ASP.NET Core (.NET 9), MongoDB, BCrypt, and JWT. Additional UI/auth packages are listed in client/package.json.

## Repository map

| Path | Purpose |
| --- | --- |
| [client/src/App.tsx](client/src/App.tsx) | Frontend route composition |
| [client/src/components](client/src/components) | Reusable UI, layouts, and dialogs |
| [client/src/routes](client/src/routes) | Public, resident, and administration pages |
| [server/Program.cs](server/Program.cs) | API setup and service registrations |
| [server/controllers](server/controllers) | HTTP endpoints |
| [server/services](server/services) | Application services |
| [server/models](server/models) | Stored domain models |

## Local setup

Install the .NET 9 SDK, Node/npm, and a running MongoDB instance. From the repository root:

```bash
git clone https://github.com/frontend-alex/student-housing-app.git
cd student-housing-app
dotnet restore s1-5-webapp-project.sln
```

Supply local configuration under MongoDbSettings:ConnectionString, MongoDbSettings:DatabaseName, Jwt:SecretKey, Jwt:Issuer, and Jwt:Audience. ASP.NET environment variables may use double underscores, for example MongoDbSettings__ConnectionString. Use your own local values rather than reusing committed credentials.

```bash
dotnet run --project server/server.csproj
```

Read the API listening URL from the console and align the frontend's API calls with it. In a separate terminal:

```bash
cd client
npm install
npm run dev
```

The API uses HTTPS redirection, so trust/configure a development certificate if your local URL requires HTTPS.

## Verification

```bash
dotnet build s1-5-webapp-project.sln
cd client
npm run build
npm run lint
```

Check login, role-dependent access, complaint handling, and calendar/task flows manually. No runtime verification or authorization audit was performed in this documentation update.

## Limitations and next steps

- The server currently permits any CORS origin; deployment configuration requires review.
- Client layouts and route guards do not replace backend authorization checks.
- Several frontend areas have more UI coverage than the currently exposed controller set; assess each workflow against actual endpoints.
- A repository-wide automated test suite was not found in the inspected tree.

## Code review starting points

- [server/Program.cs](server/Program.cs)
- [server/controllers/AdminController.cs](server/controllers/AdminController.cs)
- [server/controllers/AuthController.cs](server/controllers/AuthController.cs)
- [client/src/App.tsx](client/src/App.tsx)

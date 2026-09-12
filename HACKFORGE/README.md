# Job Seeker Agent

Run locally:

```powershell
cd C:\Users\soust\job-seeker-agent
npm start
```

Open `http://localhost:4173`, paste a resume, add job preferences, and search. The agent currently searches Remotive and Arbeitnow, deduplicates roles, scores fit, and displays company, title, location, salary when published, source, rationale, and the original listing URL.

It deliberately does not submit applications. Webcmd is the intended browser/research layer for opening and verifying direct-company pages after the API sources discover a listing. Add Greenhouse, Lever, Ashby, and Workday adapters for broader direct-company coverage.

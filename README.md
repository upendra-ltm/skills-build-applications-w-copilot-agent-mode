# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey upendra-ltm!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/upendra-ltm/skills-build-applications-w-copilot-agent-mode/issues/1)

## OctoFit Tracker API

The Node.js API runs on port `8000` and uses MongoDB database `octofit_db`.

Start MongoDB, then seed the sample data and run the backend from the repository root:

```bash
npm --prefix octofit-tracker/backend run seed
npm --prefix octofit-tracker/backend run dev
```

When `CODESPACE_NAME` is set, the API base URL is:

```text
https://$CODESPACE_NAME-8000.app.github.dev
```

Without `CODESPACE_NAME`, use `http://localhost:8000`.

Verify the API and seeded data with:

```bash
curl http://localhost:8000/api/health
curl http://localhost:8000/api/users/
curl http://localhost:8000/api/activities/
```


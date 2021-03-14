# Simple-twitter-restful

### Development

```bash
$ docker-compose -f docker-compose.local.yml up --build -d
$ yarn dev
$ open http://localhost:7015/docs
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ docker-compose up --build -d
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

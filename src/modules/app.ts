import express from 'express';

import proxy from './proxy';

import * as path from 'path';

const app = express();

// EJS views.
app.set(`view engine`, `ejs`);
app.set(`views`, path.resolve(__dirname, `../views`));

// Take HTML views and use them.
app.use(express.static(path.resolve(__dirname, `../../../public`), { extensions: [`html`] }));

app.use((req, res) => {
    if (req.url.startsWith(proxy.prefix)) return proxy.request(req, res);
    res.status(404).render(`error.ejs`);
});

export default app;

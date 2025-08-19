import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.get('/healthz', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.json({ app: 'devopssemfirula', version: '1.0.0' }));
app.listen(port, () => console.log(`listening on ${port}`));

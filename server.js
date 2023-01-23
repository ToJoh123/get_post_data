const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from public folder
app.use(express.json()); // Parse JSON bodies

app.get('/info/:dynamic', (req, res) => {
	const { dynamic } = req.params;
	const { key } = req.query;
	console.log('dynamic', dynamic, 'key', key);

	res.status(200).json({ info: 'Hello World' });
});

app.post('/', (req, res) => {
	const parcel = req.body;
	console.log('parcel', parcel);
	if (!parcel) {
		return res.status(400).send({ status: 'No parcel provided' });
	}
	res.status(200).json({ status: 'received' });
});

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Listen on port 3000

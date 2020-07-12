const express = require('express');
const profiles = require('./profiles.json')

const app = express();
app.set('view engine', 'pug');
app.use('/public',express.static('public'))

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

for (link of profiles.links) {
	console.log(`profile: ${link.website} image: ${link.img_src}`);
}

app.get('/', (req, res) => {
	res.render('index', {
		title : 'Angela Tseng',
		links : profiles.links
	});
});

module.exports = function(app) {
    app.get('/', function (req, res) {
      res.render('pages/index');
    });

    app.get('/about', function (req, res) {
      res.render('pages/about');
    });

    app.get('/login', function(request, response) {
	console.log(request);
	response.render('pages/login.ejs');
	});
	app.get('/dbinterface', function(request, response) {
		response.json(
			{
				"teacher": "me", 
				"students": ["student1", "student2"]
			}
		)
	});
	app.get('/teacher', function(request, response) {
		response.render('pages/teacher.ejs');
	});
};
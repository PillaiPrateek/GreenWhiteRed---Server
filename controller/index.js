module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('pages/index', {page_name: "home"});
    });

    app.get('/about', function (req, res) {
        res.render('pages/about', {page_name: "about"});
    });

    app.get('/login', function(req, res) {
	    console.log(req);
	    res.render('pages/login.ejs', {page_name: "login"});
	});
	
	app.get('/dbinterface', function(req, res) {
		res.json(
			{
				"teacher": "me", 
				"students": ["student1", "student2"]
			}
		)
	});
	
	app.get('/teacher', function(req, res) {
		res.render('pages/teacher.ejs', {page_name: "teacher"});
	});
};

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp', ['todos']);
/* GET All Todos */
router.get('/todos', function(req, res, next) {
  db.todos.find(function(err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});
/* GET One Todo with the provided ID */
router.get('/todo/:id', function(req, res, next) {
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});
/* POST/SAVE a Todo */
router.post('/todo', function(req, res, next) {
  var todo = req.body;
  if (!todo.text || !(todo.isCompleted + '')) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.todos.save(todo, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a Todo */
router.put('/todo/:id', function(req, res, next) {
  var todo = req.body;
  var updObj = {};
  if (todo.isCompleted) {
    updObj.isCompleted = todo.isCompleted;
  }
  if (todo.text) {
    updObj.text = todo.text;
  }
  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.todos.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});
/* DELETE a Todo */
router.delete('/todo/:id', function(req, res) {
  db.todos.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/devprofile', function(req, res, next) {
  var users =  [{
    Id : 1,
    Name : 'Sakdinon Piakat' ,
    Carerr : 'WEB Dev, Mobile Dev, MEAN Stack Dev' ,
    Contact : {
      googleplus:'dizarale@gmail.com',
      line:'ummnon',
      telegram:'',
      tel:'0874969990',
      mail:'dizarale@gmail.com',
      github:'https://github.com/dizarale',

    },
    Display :"https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/s960x960/13558978_1386889051324935_5547868256364414294_o.jpg?oh=2996826155bfb38a15b577e1ae70b793&oe=5915CFE6",
    ProgrammingSkills : [
      {
        Title : 'WEB',
        Detail : 'HTML5, CSS( Bootstrap, Fundation, Angular-Material, etc. ), JS( AngularJS, Angular2 ), PHP ( Laravel, Ci ), C#( .Net Entity ) ',
      },
      {
        Title : 'Mobile',
        Detail : 'Android( JAVA ), IOS( Swift ), Cross-Platform( React-Native )',
      },
      {
        Title : 'Microcontroller',
        Detail : 'ResPi, Arduino, ZigBee, AVR',
      },
      {
        Title : 'Database',
        Detail : 'SQL( MySQL, MSSQL, Oracle), NoSQL( MongoDB )',
      }

    ],
    Experiences : [
      {
        Type : 'Contact',
        Title : 'Web & Mobile Dev - Shop King Kong Co., Ltd',
        Time : 'JUL 2016 - JAN 2017',
        Detail : 'Use .Net(C#) and AngularJs for Web, And use React-Native for mobile'
      },
      {
        Type : 'Outsource',
        Title : 'Backend Dev - NECTEC',
        Time : 'MAY 2016 - JUL 2016',
        Detail : 'Development OAuth service and data management service of Cheewit Project with PHP Laravel'
      },
      {
        Type : 'Internship',
        Title : 'Civic Media Co.,Ltd. ',
        Time : 'JUN 2015 - AUG 2015',
        Detail : 'Development Android application for monitor and control LED screen and LED light.'
      },
      {
        Type : 'Internship',
        Title : 'Network, Wireless and Security Research Unit ( NWSRU ) of NECTEC',
        Time : 'MAR 2013 - AUG 2013',
        Detail : 'Developement backend service of FM91-BKK Project by Twitter API.'
      },
      {
        Type : 'Co - Business',
        Title : 'KenClean',
        Time : '',
        Detail : 'Food order and delivery application on mobile( Android, IOS ) and management system on web.'
      },
      {
        Type : 'Outsource( Pre-Project )',
        Title : 'Stop Drink Approval Web System - Stop Drink Network',
        Time : '',
        Detail : 'Project approval system on web with PHP.'
      },
      {
        Type : 'Mini-Project',
        Title : 'Node Sensor System(IOT)',
        Time : '',
        Detail : 'Sensor systems and transmit data on Raspberry pi and ZigBee. '
      },
      {
        Type : 'Mini-Project',
        Title : 'IBusDriod',
        Time : '',
        Detail : "Search engine of bus in Vicinity by NECTEC's API on Andriod."
      }
    ],
    SkillsChart : {
      TechnicalSkills : {
        PHP : 5,
        Android : 4,
        Swift : 4,
        Dot_Net : 4,
        JS : 4,
        SQL : 4,
        MongoDB : 4
      },
      CommonSkills : {
        Open_New_Things : 5,
        Fast_Learning : 4,
        Active : 3,
        Self_Learning : 4,
        Work_Under_Pressure : 4,
        Friendly : 3,
        Funny : 4
      }
    }
  }];

  res.json(users);
});

router.get('/devprofile/:id', function(req, res, next) {
  let id = req.params.id;
  let user = {
    Id : 1,
    Name : 'Sakdinon Piakat' ,
    BirthDay : '1991/12/13',
    Education: 'Dhurakij Pundit  University, B.Eng in Computer Engineering. Expected April 2017.',
    StartDate : 'Ready to Work',
    Career : 'MEAN Stack Dev, WEB Dev, Mobile Dev' ,
    Googleplus : 'dizarale@gmail.com',
    Line : 'ummnon',
    Telegram :'',
    Tel : '0874969990',
    Mail : 'dizarale@gmail.com',
    Github : 'https://github.com/dizarale',
    Contact : {
      Googleplus : 'dizarale@gmail.com',
      Line : 'ummnon',
      Telegram :'',
      Tel : '0874969990',
      Mail : 'dizarale@gmail.com',
      Github : 'https://github.com/dizarale',
    },
    Display :"https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/s960x960/13558978_1386889051324935_5547868256364414294_o.jpg?oh=2996826155bfb38a15b577e1ae70b793&oe=5915CFE6",
    ProgrammingSkills : [
      {
        Title : 'WEB',
        Detail : 'HTML5, CSS( Bootstrap, Fundation, Angular-Material, etc. ), JS( AngularJS, Angular2 ), PHP ( Laravel, Ci ), C#( .Net Entity ) ',
      },
      {
        Title : 'Mobile',
        Detail : 'Android( JAVA ), IOS( Swift ), Cross-Platform( React-Native )',
      },
      {
        Title : 'Microcontroller',
        Detail : 'ResPi, Arduino, ZigBee, AVR',
      },
      {
        Title : 'Database',
        Detail : 'SQL( MySQL, MSSQL, Oracle), NoSQL( MongoDB )',
      }

    ],
    Experiences : [
      {
        Type : 'Contact',
        Title : 'Web & Mobile Dev - Shop King Kong Co., Ltd',
        Time : 'JUL 2016 - JAN 2017',
        Detail : 'Use .Net(C#) and AngularJs for Web, And use React-Native for mobile'
      },
      {
        Type : 'Outsource',
        Title : 'Backend Dev - NECTEC',
        Time : 'MAY 2016 - JUL 2016',
        Detail : 'Development OAuth service and data management service of Cheewit Project with PHP Laravel'
      },
      {
        Type : 'Internship',
        Title : 'Civic Media Co.,Ltd. ',
        Time : 'JUN 2015 - AUG 2015',
        Detail : 'Development Android application for monitor and control LED screen and LED light.'
      },
      {
        Type : 'Internship',
        Title : 'Network, Wireless and Security Research Unit ( NWSRU ) of NECTEC',
        Time : 'MAR 2013 - AUG 2013',
        Detail : 'Developement backend service of FM91-BKK Project by Twitter API.'
      },
      {
        Type : 'Co - Business',
        Title : 'KenClean',
        Time : '',
        Detail : 'Food order and delivery application on mobile( Android, IOS ) and management system on web.'
      },
      {
        Type : 'Outsource( Pre-Project )',
        Title : 'Stop Drink Approval Web System - Stop Drink Network',
        Time : '',
        Detail : 'Project approval system on web with PHP.'
      },
      {
        Type : 'Mini-Project',
        Title : 'Node Sensor System(IOT)',
        Time : '',
        Detail : 'Sensor systems and transmit data on Raspberry pi and ZigBee. '
      },
      {
        Type : 'Mini-Project',
        Title : 'IBusDriod',
        Time : '',
        Detail : "Search engine of bus in Vicinity by NECTEC's API on Andriod."
      }
    ],
    SkillsChart : {
      TechnicalSkills : {
        PHP : 5,
        Android : 4,
        Swift : 4,
        Dot_Net : 4,
        JS : 4,
        SQL : 4,
        MongoDB : 4
      },
      CommonSkills : {
        Open_New_Things : 5,
        Fast_Learning : 4,
        Active : 3,
        Self_Learning : 4,
        Work_Under_Pressure : 4,
        Friendly : 3,
        Funny : 4
      }
    }
  };
  res.json(user);
});


module.exports = router;

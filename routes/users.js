import  cookieParser  from 'cookie-parser'
import  csrf  from 'csurf'
import  bodyParser  from 'body-parser'
import  express  from 'express'
import  cors  from 'cors'
import session from 'express-session'



 export var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })


var app = express()
app.use(cookieParser())
app.use(session({
 secret: "secret",
 resave: false,
 saveUninitialized: true,
 cookie: {secure: true,
     httpOnly: true,
     maxAge: 1000 * 60 * 60 * 24
 }
}));
app.use(csrf())  

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}

app.use(cors(corsOptions));


app.use(cookieParser())

app.post('/', csrfProtection, function (req, res) {
  
  res.send({csrfToken: req.csrfToken() })
})

app.get('/get', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})


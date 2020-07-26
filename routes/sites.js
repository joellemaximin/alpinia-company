const express = require("express");
const router = express.Router();
const pool = require("../middleware/dbConnect")
router.use(express.json());

// returns site in order by category and display only 15 sites
router.get("/", async (req,res) => {
  const joinCategory = 'SELECT sites.*, categories.`title_category`from sites INNER JOIN categories ON sites.`category_id` = categories.`id`';
  pool.query(joinCategory, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
});

// post router
router.post("/", async (req, res) => {
  var postData  = req.body;
  console.log(req.body)
  pool.query('INSERT INTO sites SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  }); 
});

//get one site
router.get('/show-site/:id', async (req, res) => {
  const siteId = 'SELECT sites.*, categories.`title_category` FROM sites INNER JOIN categories ON sites.`category_id` = categories.`id` WHERE siteID = ?';
  pool.query(siteId, parseInt((req.params.id)), function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);
  })

});


router.put('/show-site/:id', async (req, res) => {
  const putData = req.body;
  console.log(putData)
  pool.query('UPDATE sites SET ? WHERE id = ?',[putData, req.params.id], function(error, results, fields) {
    if (error) throw error;
    console.log(results)
    res.send(results);
  });
});

//remove a site
router.delete('/delete/site/:id', (req, res) => {
  pool.query('DELETE FROM sites WHERE id = ?', [req.params.id], (err,rows, fields) =>{
    //console.log(req.params.id)
    if (!err) 
    res.send('deleted success')
    else 
    console.log(err)
  });
});


//display count sites
router.get("/counter/countsites", async (req,res) => {
  const countsites = 'SELECT COUNT(*) as total FROM sites';
  pool.query(countsites, function (err, result){
    if (err) throw err;
    res.json(result[0].total);
  });

})


//display sites by authors or name or first letter from column oeuvre and author or by category
router.get('/order/oeuvres', async (req, res)=>{
  const oeuvre = 'SELECT * FROM sites WHERE title oeuvre';
  pool.query(oeuvre, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);

  });
})


//display sites asc or desc of the title
router.get('/order/title', async (req, res)=>{
  const asc_title = 'SELECT * FROM sites ORDER BY title ASC, title DESC ';
  pool.query(asc_title, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);

  });
})

//filter sites oeuvre
router.get('/order/oeuvres', async (req, res)=>{
  const oeuvre = 'SELECT DISTINCT oeuvre FROM sites ORDER BY oeuvre';
  pool.query(oeuvre, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);

  });
})

//filter sites author
router.get('/order/author', async (req, res)=>{
  const author = 'SELECT DISTINCT author FROM sites ORDER BY author';
  pool.query(author, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);

  });
})

module.exports = router;
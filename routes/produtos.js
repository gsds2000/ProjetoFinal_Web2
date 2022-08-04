var express = require ('express');
var router = express.Router();

router.get('/', function (request, response){
    response.render('produtos/listaProduto')
});
router.get('/cadastroProduto',function(request, response){
    response.render('produtos/cadastroProduto')
});

module.exports = router;
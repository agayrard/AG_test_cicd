const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
 
chai.use(chaiHttp);
 
describe('/GET test', () => { // La suite de tests pour la route GET
    it('get the version of the app', (done) => {
      chai.request(server).get('/version').end((err, res) => { // On requête la route GET
        res.should.have.status(200); // On vérifie le statut de la réponse
        res.body.should.be.a('object'); // On vérifie que le résultat est un objet
        done(); // On dit à mocha que l'on a fini nos assertions
      });
    });
    
    it('get le tableau d\'éléments', (done) => {
      chai.request(server).get('/').end((err, res) => { // On requête la route GET
        res.should.have.status(200); // On vérifie le statut de la réponse
        res.body.should.be.a('array'); // On vérifie que le résultat est un tableau
        res.body.length.should.be.eql(5); // On vérifie que la longueur du tableau est de 5
        done(); // On dit à mocha que l'on a fini nos assertions
      });
    });
  });

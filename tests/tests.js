var should = require('chai').should(),
    repo = require('../repo-rename'),
    getRepoId = repo.getRepoId,
    renameRepo = repo.renameRepo;

/**
    const owner = 'ULL-ESIT-DMSI-1920',
    const name = 'prueba-laura'
 */


const id = 'R_kgDOGbkokQ',
  

describe('Get repository information', function(){
    
    it('\t gets  repository owner', function(){
        getRepoId.should.be.lengthOf(2);
    });
    it('\t gets  repository owner', function(){
        getRepoId('ULL-ESIT-DMSI-1920', 'prueba-laura-funciona').should.equal(id);
    });
});


  describe('Change repository name', function(){
    it('\t gets repository id', function(){
        renameRepo().should.equal();
    });

    it('\t gets repository new name', function(){
        renameRepo().should.equal();
    });
});

var should = require('chai').should(),
    assert = require('assert'),
    repo = require('../repo-rename'),
    getRepoId = repo.getRepoId,
    renameRepo = repo.renameRepo;

const id = "R_kgDOGbkokQ";
const newName = "prueba-laura-funciona";

describe('Get repository information', function(){
    it('\t gets function length', function(){
        getRepoId.should.be.lengthOf(2);
    });

    it('\t gets repository id through should function', function(){
        getRepoId("ULL-ESIT-DMSI-1920", "prueba-laura").should.equal(id);
    });

    it('\t gets repository Id through assert function', function(){
        assert.equal(getRepoId("ULL-ESIT-DMSI-1920", "prueba-laura"), id)
    });

    it('\t repository id is not equal to another repository id', function(){
        let wrongId = "R_kgDOGbeYPw";
        assert.notEqual(getRepoId("ULL-ESIT-DMSI-1920", "prueba-laura"), wrongId, "Not the right id")
    });
});


  describe('Change repository name', function(){
    it('\t gets repository new name', function(){
        renameRepo(id, "prueba-laura-funciona").should.equal(newName);
    });
    it('\t new repository name is correct', function(){
        let wrongName = "prueba-anna-funciona";
        assert.notEqual(renameRepo(id, "prueba-laura-funciona"), wrongName )
    });
});

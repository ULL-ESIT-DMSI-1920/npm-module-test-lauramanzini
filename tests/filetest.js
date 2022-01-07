var should = require('chai').should(),
    repo = require('../repo-rename'),
    getRepoId = repo.getRepoId,
    renameRepo = repo.renameRepo;

    /**
     * 
     * const owner = 'ULL-ESIT-DMSI-1920',
     *    const name = 'prueba-laura'
     *  const id = '',
    const newName = '';
     */



describe('Get repository information', function(){
    
    it('\t gets  repository owner', function(){
        getRepoId.should.be.lengthOf(2);
    });
    it('\t gets  repository owner', function(){
        getRepoId('ULL-ESIT-DMSI-1920').should.equal(prueba);
    });
});

/**
 * describe('Change repository name', function(){
    it('\t gets repository id', function(){
        getRepoId('ULL-ESIT-DMSI-1920', null).should.equal(getRepoId(owner, null));
    });

    it('\t gets repository new name', function(){
        getRepoId(null, 'prueba-laura').should.equal(getRepoId(null,));
    });
});
 */

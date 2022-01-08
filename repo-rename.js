const shell = require('shelljs');

/**
 * This function retrieve the id of a repository that belongs to an organization
 * @param {string} owner - the owner of the organization
 * @param {string} name - name of the repository
 * @returns - the id of the repository
 */
function getRepoId (owner, name) {
    const queryRepoId = (owner, name) => `
    query {
        repository(owner: "${owner}", name: "${name}"){
          id
        }
      }
     `;
    
    let r = shell.exec(`gh api graphql -f query='${queryRepoId(owner, name)}' --jq '.data.repository.id'`,
                      {silent: true}
                      );
                     
    if (r.code !== 0) {
      console.error(r.stderr)
      process.exit(r.code)
    };
    const ID = r.stdout.replace(/\s+$/g,'');
    return ID;
}

/**
 * This function changes the name of a repository with a new one 
 * @param {string} id - id of the repository
 * @param {string} newName - new name given to the repsoitory
 * @returns - the new name of the repository
 */
function renameRepo (id, newName) {
    const queryRenameRepo = (id, newName) => `   
    mutation {
        updateRepository(input: { name: "${newName}", repositoryId: "${id}" }) {
        repository{
            name
            }
        }
    }
    `;

    r = shell.exec(`gh api graphql -f query='${queryRenameRepo(id, newName)}' --jq '.data.updateRepository.repository.name'`, 
                {silent:true}
                );

    if (r.code !== 0) {
    console.error(r.stderr)
    process.exit(r.code)
    };
    return r.stdout.replace(/\s+$/, '');
    console.log(`The repository '${owner}/${repo}' has been renamed to '${r.stdout.replace(/\s+$/, '')}'`);
}

module.exports = {
    getRepoId,
    renameRepo,
}




import { handleResponse } from './handle-response';
import { authHeader } from './auth-header'
import { base_url } from '../containers/utils/env'


export const services = {
    getArticles,
    getCategories,
    addCategorie,
    deleteCategories,
    updateCategories,
    getSequences,
    getBudget,
    getTypePatrimoine,
    getCompte,
    getFamille,
    addArticle,
    getEntityArticles,
    getExercices,
    getEntrees,
    getFournisseurs,
    addFournisseurs,
    deleteFournisseurs,
    updateFournisseurs,
    addEntree,
    getSorties,
    removeArticle,
    getUtilisateurs,
    //getSingleBudget,
    getSourceArticles,
    getSingleBudget,
    getEntreeWithBudget,
    addSortie,
    getArticlesList,
    getArticleBudgets,
    deleteEntree,
    updateArticle,
    receptionnerEntree,
    validerSortie,
    validerEntree,
    getMaterielsEnService,
    getMaterielsEnMouvement,
    getMouvementMaterielUtilisateur,
    getMouvementMaterielMateriel,
    getAffectationMateriels,
    getDirections,
    getDirectionServices,
    getServices,
    getServiceBureaux,
    getBureauUtilisateurs,
    addDirection,
    updateDirection,
    deleteDirection,
    getServicesDirection,
    getBureaux,
    addBureau,
    updateBureau,
    deleteBureau,
    getUtilisateursBureau,
    addService,
    updateService,
    deleteService,
    getBureauxService,
    addMaterielsEnService,
    addMaterielsEnServiceLot,
    updateMaterielEnService,
    addSortieMaterielsEnService,
    addRetourMaterielsEnService,
    addReaffectation,
    deleteAffectation,
    updateSortieMaterielEnService,
    addValidationMouvementMateriels,
    deleteMouvementMaterielEnService,
    getFamillesArticles,
    getParginatedFamillesArticles,
    addFamilleArticle,
    updateFamilleArticle,
    deleteFamilleArticle,
    addUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
    getListCompte,
    getAllCategories,
    numberEntrer,
    numberSortie,
    numberImmobilisations,
    getSecteurActivite,
    getSource,
    addSource,
    updateSource,
    deleteSource,
    addSecteurActivite,
    deleteSecteurActivite,
    updateSecteurActivite,
    getBudgetByCodent,
    detachArticle,
    raccordArticle,
    getAllSecteurs,
    fournisseursList,
    getValidationOperations,
    getReparationMaintenance,
    addReparationMaintenance,
    updateReparationMaintenance,
    addReforme,
    updateReforme,
    getReforme,
    deleteReparation,
    deleteReforme,
}


function addArticle(req) {
    console.log('add article req', req)
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/articles`, requestOptions)
        .then(handleResponse);
}

function getBureaux(search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/bureaux?search=${search}`, requestOptions)
        .then(handleResponse);
}

function numberEntrer(filter = undefined) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/entrees/number/${filter}`, requestOptions)
        .then(handleResponse);
}
function numberSortie(filter = undefined) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/sorties/number/${filter}`, requestOptions)
        .then(handleResponse);
}
function numberImmobilisations(filter = undefined) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/immobilisations/number/${filter}`, requestOptions)
        .then(handleResponse);
}
function getBureauUtilisateurs(codeBureau) {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  return fetch(`${base_url}/api/v01/bureaux/${codeBureau}/utilisateurs`, requestOptions)
      .then(handleResponse);
}


function getDirectionServices(codeDirection) {
  console.log('get direction services', codeDirection)
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  return fetch(`${base_url}/api/v01/directions/${codeDirection}/services`, requestOptions)
      .then(handleResponse);
}
 
function getServiceBureaux(codeService) {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  return fetch(`${base_url}/api/v01/services/${codeService}/bureaux`, requestOptions)
      .then(handleResponse);
}

function removeArticle(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/${id}`, requestOptions)
        .then(handleResponse);
}
function updateArticle(id, req) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/articles/${id}`, requestOptions)
        .then(handleResponse);
}


function addEntree(req) {
    console.log('add entree req', req)
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/entrees`, requestOptions)
        .then(handleResponse);
}

function addSortie(req) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/sorties`, requestOptions)
        .then(handleResponse);
}

function receptionnerEntree(id, req) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/entrees/${id}/recept`, requestOptions)
        .then(handleResponse);
}

function validerSortie(id) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/sorties/${id}/valider`, requestOptions)
        .then(handleResponse);
}

function validerEntree(id) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/entrees/${id}/valider`, requestOptions)
        .then(handleResponse);
}


function getEntreeWithBudget(budget, codeArticle) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/entrees/budget/${budget}/article/${codeArticle}`, requestOptions)
        .then(handleResponse);
}

function getArticles(limit = 10, skip = 0, search = '', famille = undefined, byEntity = false) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles?limit=${limit}&skip=${skip}&search=${search}&famille=${famille}&byEntity=${byEntity}`, requestOptions)
        .then(handleResponse);
}

function getArticlesList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/list`, requestOptions)
        .then(handleResponse);
}

function getSourceArticles() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/list`, requestOptions)
        .then(handleResponse);
}

function getEntityArticles(limit = 10, skip = 0, search = '', budget = undefined, famille = undefined) {
    console.log('ma famille', famille)
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/bybudgets/?limit=${limit}&skip=${skip}&search=${search}&budget=${budget}&famille=${famille}`, requestOptions)
        .then(handleResponse);
}


function getArticleBudgets(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }; 
    return fetch(`${base_url}/api/v01/articles/${id}/budgets`, requestOptions)
        .then(handleResponse);
}

function detachArticle(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/${id}/detach`, requestOptions)
        .then(handleResponse);
}

function raccordArticle(id, budget) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/articles/${id}/budget/${budget}/raccord`, requestOptions)
        .then(handleResponse);
}

function getUtilisateurs(limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    console.log('e.target.value', search)
    return fetch(`${base_url}/api/v01/utilisateurs?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getBudget(limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/budgets?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getBudgetByCodent() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/budgets/byCodent`, requestOptions)
        .then(handleResponse);
}

function getMaterielsEnService(limit = 10, skip = 0, search = '', byDirection= '', byService='', byBureau='', byUtilisateur='', byBudget='' ) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/immobilisations/materiels?limit=${limit}&skip=${skip}&search=${search}&byDirection=${byDirection}&byService=${byService}&byBureau=${byBureau}&byUtilisateur=${byUtilisateur}&byBudget=${byBudget}`, requestOptions)
        .then(handleResponse);
}

function getMaterielsEnMouvement(limit = 10, skip = 0, search = '', materiel='',filter= '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/mouvements?limit=${limit}&skip=${skip}&search=${search}&byService=${search}&filter=${filter}`, requestOptions)
        .then(handleResponse);
}

function getMouvementMaterielUtilisateur(limit = 10, skip = 0, search = '', userId='',) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/immobilisations/utilisateur/${userId}/historique?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getMouvementMaterielMateriel(materielId='', limit = 10, skip = 0, search = '', ) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/immobilisations/materiel/${materielId}/historique?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getAffectationMateriels( limit = 10, skip = 0, search = '', filter= '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/immobilisations/affectations?limit=${limit}&skip=${skip}&search=${search}&filter=${filter}`, requestOptions)
        .then(handleResponse);
}

function getCategories(limit = 10, skip = 0, search, nocompte) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/categorie?limit=${limit}&skip=${skip}&search=${search || ''}&nocompte=${nocompte|| ''}`, requestOptions)
        .then(handleResponse);
}

function getAllCategories(search='', nocompte='') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${base_url}/api/v01/categories/all?search=${search || ''}&nocompte=${nocompte || ''}`, requestOptions)
    .then(handleResponse);
}

function addCategorie(req) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/categories`, requestOptions)
        .then(handleResponse);
}
function deleteCategories(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    };
    return fetch(`${base_url}/api/v01/categories/${code}`, requestOptions)
        .then(handleResponse);
}
function updateCategories(code, request){
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request) 
    };
    return fetch(`${base_url}/api/v01/categories/${code}`, requestOptions)
        .then(handleResponse);

}

function getSequences() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/params/sequences`, requestOptions)
        .then(handleResponse);
}


function deleteEntree(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/entrees/${id}`, requestOptions)
        .then(handleResponse);
}

function getTypePatrimoine(code) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/patrimoine/${code}`, requestOptions)
        .then(handleResponse);
}
// récuppérer un compte en fonction de l'id
function getCompte(numero) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/compte/${numero}`, requestOptions)
        .then(handleResponse);
}

function getFamille(numero) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/famille/${numero}`, requestOptions)
        .then(handleResponse);
}

function getExercices() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/exercices`, requestOptions)
        .then(handleResponse);
}

function getEntrees(exercice = 'non-receptionne', limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/entrees/${exercice}?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getSorties(exercice = 'non-validees', limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/sorties/${exercice}?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getFournisseurs(limit=10,skip=0,search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/fournisseurs?search=${search}&limit=${limit}&skip=${skip}`, requestOptions)
        .then(handleResponse);
}
function addFournisseurs(req) {
    console.log('addFournisseurs',req)
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/fournisseurs`, requestOptions)
        .then(handleResponse);
}
function deleteFournisseurs(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/fournisseurs/${id}`, requestOptions)
    .then(handleResponse);
}
function updateFournisseurs(id, req){
    const requestOptions = {
        method : 'PUT',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/fournisseurs/${id}`, requestOptions)
    .then(handleResponse);
}

function addMaterielsEnService(req) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/immobilisations/materiels`, requestOptions)
        .then(handleResponse);
}

function addMaterielsEnServiceLot(req) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/immobilisations/materiels/batches`, requestOptions)
        .then(handleResponse);
}

function addSortieMaterielsEnService(req) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/mouvements`, requestOptions)
        .then(handleResponse);
}

function addRetourMaterielsEnService(codeMateriel, req) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/mouvements/${codeMateriel}`, requestOptions)
        .then(handleResponse);
}

function addReaffectation( req) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(req)
    };
    return fetch(`${base_url}/api/v01/immobilisations/materiels/affectations`, requestOptions)
        .then(handleResponse);
}

function addValidationMouvementMateriels(mouvementId, request) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
       
    };
    return fetch(`${base_url}/api/v01/mutation/${mouvementId}/valider`, requestOptions)
        .then(handleResponse);
}

function updateSortieMaterielEnService(sortieId, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/mouvements/${sortieId}`, requestOptions)
        .then(handleResponse);
}

function deleteMouvementMaterielEnService(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/mouvements/${id}`, requestOptions)
        .then(handleResponse);
}

function updateMaterielEnService(codeMateriel, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/immobilisations/${codeMateriel}`, requestOptions)
        .then(handleResponse);
}

function getDirections(limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/directions?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function addDirection(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/directions`, requestOptions)
        .then(handleResponse);
}

function updateDirection(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/directions/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteDirection(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/directions/${code}`, requestOptions)
        .then(handleResponse);
}

function getServicesDirection(codeDirection, limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/directions/${codeDirection}/services?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getServices(limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/services?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function addService(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/services`, requestOptions)
        .then(handleResponse);
}

function updateService(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/services/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteService(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/services/${code}`, requestOptions)
        .then(handleResponse);
}

function getBureauxService(codeService, limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/services/${codeService}/bureaux?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

/*function getBureaux() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/bureaux`, requestOptions)
        .then(handleResponse);
}*/

function addBureau(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/bureaux`, requestOptions)
        .then(handleResponse);
}

function updateBureau(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/bureaux/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteBureau(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/bureaux/${code}`, requestOptions)
        .then(handleResponse);
}

function getUtilisateursBureau(codeBureau, limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/bureaux/${codeBureau}/utilisateurs?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getFamillesArticles( search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
  return fetch(`${base_url}/api/v01/familles?search=${search}`, requestOptions)
        .then(handleResponse);
}
function getParginatedFamillesArticles(limit = 10, skip = 0, search = '') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${base_url}/api/v01/plist/familles?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
    .then(handleResponse);
}

function addFamilleArticle(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/familles`, requestOptions)
        .then(handleResponse);
}

function updateFamilleArticle(codeArticle, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/familles/${codeArticle}`, requestOptions)
        .then(handleResponse);
}

function deleteFamilleArticle(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/familles/${code}`, requestOptions)
        .then(handleResponse);
}

function addUtilisateur(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/utilisateurs`, requestOptions)
        .then(handleResponse);
}

function updateUtilisateur(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/utilisateurs/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteUtilisateur(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/utilisateurs/${code}`, requestOptions)
        .then(handleResponse);
}

function getListCompte() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/comptes/by-level`, requestOptions)
        .then(handleResponse);
}
function getSource(search='') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/budgets/${search}`, requestOptions)
        .then(handleResponse);
}

function addSource(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/budgets`, requestOptions)
        .then(handleResponse);
}

function updateSource(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/budgets/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteSource(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/budgets/${code}`, requestOptions)
        .then(handleResponse);
}
function getSecteurActivite(limit=10,skip=0,search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/secteurs?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}

function getAllSecteurs(search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${base_url}/api/v01/secteurs/all?search=${search}`, requestOptions)
        .then(handleResponse);
}
function addSecteurActivite(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/secteurs`, requestOptions)
        .then(handleResponse);
}
function updateSecteurActivite(code, request) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/secteurs/${code}`, requestOptions)
        .then(handleResponse);
}
function deleteSecteurActivite(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/secteurs/${code}`, requestOptions)
        .then(handleResponse);
}

function getSingleBudget(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/budget/${id}`, requestOptions)
        .then(handleResponse);
}

function fournisseursList(search='') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/fournisseurs/all?search=${search}`, requestOptions)
        .then(handleResponse);
}

function getValidationOperations(limit = 20, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/validation/operations?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}








































function addReparationMaintenance(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/reparations`, requestOptions)
        .then(handleResponse);
}

function updateReparationMaintenance(code, request) {
    console.log('Requete', request)
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/reparations/${code}`, requestOptions)
        .then(handleResponse);
}

function getReparationMaintenance(limit = 10, skip = 0, search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/reparations?limit=${limit}&skip=${skip}&search=${search}`, requestOptions)
        .then(handleResponse);
}


function addReforme(request) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/reformes`, requestOptions)
        .then(handleResponse);
}

function updateReforme(code, request) {
    console.log('Requete', request)
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/reformes/${code}`, requestOptions)
        .then(handleResponse);
}

function deleteAffectation(sortieId, request) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        body: JSON.stringify(request)
    };
    return fetch(`${base_url}/api/v01/mutation/${sortieId}/annuler`, requestOptions)
        .then(handleResponse);
}

function deleteReparation(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/reparations/${code}`, requestOptions)
        .then(handleResponse);
}

function getReforme (limit=10,skip=0,search = '') {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${base_url}/api/v01/reformes?search=${search}&limit=${limit}&skip=${skip}`, requestOptions)
        .then(handleResponse);
}

function deleteReforme(code) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return fetch(`${base_url}/api/v01/reformes/${code}`, requestOptions)
        .then(handleResponse);
}
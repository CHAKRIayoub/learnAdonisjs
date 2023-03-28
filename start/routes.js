'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

//----------------------------------------------------------------------------------------
//----------------------------------------CRUD--------------------------------------------
//----------------------------------------------------------------------------------------


//________________________________________allergie________________________________________

Route.post('/api/allergie/paginatedListByCriteria', ({ request, response, view }) => {
    return {
        list : [
            {id: 12,code: 'M',libelle: 'm1',commentaire: 'm1',ordre: 1,actif: true},
            {id: 13,code: 'S',libelle: 'm2',commentaire: 'm2',ordre: 2,actif: true}
        ],   
        dataSize : 2
      }
});

Route.post('/api/allergie', ({ request, response, view }) => {
    return 2;
});


Route.get('/api/allergie/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/allergie/getUtilisateursList', ({ request, response, view }) => {
    return [
        {id:1, label:'user 1'},
        {id:2, label:'user 2'},
        {id:3, label:'user 3'},
        {id:4, label:'user 4'},
        {id:5, label:'user 5'},
        {id:6, label:'user 6'}
    ];
});

Route.get('/api/allergie/getClientList', ({ request, response, view }) => {
    return [
        {id:1, label:'client 1'},
        {id:2, label:'client 2'},
        {id:3, label:'client 3'}
    ];
});

Route.get('/api/allergie/:id', ({ request, response, view }) => {
    return {
        id: 12,
        code: 'M',
        libelle: 'm1',
        commentaire: 'm1',
        ordre: 1,
        actif: true
    };
});

Route.put('/api/allergie/:id', ({ request, response, view }) => {
    return {id: 12, code: 'M', libelle: 'm1', commentaire: 'm1', ordre: 1, actif: true};
});


// ________________________________________________________________________________________________________________
// ----------------------------------------------------------------------------------------------------------------






Route.post('/api/region/paginatedListByCriteria', ({ request, response, view }) => {
  return {
      list : [
          {id: 12,code: 'M',libelle: 'm1',commentaire: 'm1',ordre: 1,actif: true},
          {id: 13,code: 'S',libelle: 'm2',commentaire: 'm2',ordre: 2,actif: true}
      ],   
      dataSize : 2
    }
});

Route.post('/api/region', ({ request, response, view }) => {
  return 2;
});


Route.get('/api/region/getNextOrdre', ({ request, response, view }) => {
  return 3;
});


Route.get('/api/region/getUtilisateursList', ({ request, response, view }) => {
  return [
      {id:1, label:'user 1'},
      {id:2, label:'user 2'},
      {id:3, label:'user 3'},
      {id:4, label:'user 4'},
      {id:5, label:'user 5'},
      {id:6, label:'user 6'}
  ];
});

Route.get('/api/region/getClientList', ({ request, response, view }) => {
  return [
      {id:1, label:'client 1'},
      {id:2, label:'client 2'},
      {id:3, label:'client 3'}
  ];
});

Route.get('/api/region/:id', ({ request, response, view }) => {
  return {
      id: 12,
      code: 'M',
      libelle: 'm1',
      commentaire: 'm1',
      ordre: 1,
      actif: true
  };
});

Route.put('/api/region/:id', ({ request, response, view }) => {
  return {id: 12, code: 'M', libelle: 'm1', commentaire: 'm1', ordre: 1, actif: true};
});


// ________________________________________________________________________________________________________________
// ----------------------------------------------------------------------------------------------------------------

Route.post('/api/prescriptionRadioEnAttente/paginatedListByCriteria', ({ request, response, view }) => {
    return {
        list : [
            {    id: 12,
                datePrescription: '30/01/2023',
                medecinPrescripteur: {label:'M.Said',id:56},
                visee:{label:'visee 12',id:56}, 
                rcc:{label:'RCC 89',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
            },
            {    id: 30,
                datePrescription: '31/01/2023',
                medecinPrescripteur: {label:'M.Abid',id:56},
                visee:{label:'VS ',id:56}, 
                rcc:{label:'R',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Radio 1',id:56},{label:'radio 2',id:30}]
            }
        ],   
        dataSize : 2
      }
});

Route.post('/api/prescriptionRadioEnAttente', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/prescriptionRadioEnAttente/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/prescriptionRadioEnAttente/:id', ({ request, response, view }) => {
    return {    id: 12,
        datePrescription: '30/01/2023',
        medecinPrescripteur: {label:'M.Said',id:56},
        visee:{label:'visee 12',id:56}, 
        rcc:{label:'RCC 89',id:56},
        dose:30,
        observation:'some text',
        consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
    };
});

Route.put('/api/prescriptionRadioEnAttente/:id', ({ request, response, view }) => {
    return {    id: 12,
                datePrescription: '30/01/2023',
                medecinPrescripteur: {label:'M.Said',id:56},
                visee:{label:'visee 12',id:56}, 
                rcc:{label:'RCC 89',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
            };
});
// --------------------------------------------------------------------------------------------------------------

Route.post('/api/radiotherapie/paginatedListByCriteria', ({ request, response, view }) => {
    return {
        list : [
            {    id: 12,
                datePrescription: '30/01/2023',
                medecinPrescripteur: {label:'M.Said',id:56},
                visee:{label:'visee 12',id:56}, 
                rcc:{label:'RCC 89',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
            },
            {    id: 30,
                datePrescription: '31/01/2023',
                medecinPrescripteur: {label:'M.Abid',id:56},
                visee:{label:'VS ',id:56}, 
                rcc:{label:'R',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Radio 1',id:56},{label:'radio 2',id:30}]
            }
        ],   
        dataSize : 2
      }
});

Route.post('/api/radiotherapie', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/radiotherapie/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/radiotherapie/:id', ({ request, response, view }) => {
    return {    id: 12,
        datePrescription: '30/01/2023',
        medecinPrescripteur: {label:'M.Said',id:56},
        visee:{label:'visee 12',id:56}, 
        rcc:{label:'RCC 89',id:56},
        dose:30,
        observation:'some text',
        consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
    };
});

Route.put('/api/radiotherapie/:id', ({ request, response, view }) => {
    return {    id: 12,
                datePrescription: '30/01/2023',
                medecinPrescripteur: {label:'M.Said',id:56},
                visee:{label:'visee 12',id:56}, 
                rcc:{label:'RCC 89',id:56},
                dose:30,
                observation:'some text',
                consultationRadiotherapies:[{label:'Onsult 1',id:56},{label:'Cons 2',id:30}]
            };
});

// auth
Route.post('/api/auth/token', ({ request, response, view }) => {
    return {
        "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBDSFVUVEEiLCJpYXQiOjE2Nzc4NjA2NjUsImV4cCI6MTY3Nzg4OTQ2NX0.yOahIKdqO6FYfqh0gvnCfMuZ33MOvdSqoXXEW3FFnjNZHd5BzlAlyFfqfJ0KN3Z7slKhw_Iw_FQRu4OLbNKhvA"
      }
});
Route.post('utilisateur/getCurrentUserByDomain/:id', ({ request, response, view }) => {
    return {
        "id" : 550,
        "nom" : "admin CHUTTA",
        "prenom" : "admin",
        "cin" : "",
        "adresse" : "",
        "email" : "",
        "telephone" : "",
        "mobile" : "",
        "expertise" : false,
        "username" : "admin@CHUTTA",
        "enabled" : true,
        "accountNonExpired" : true,
        "accountNonLocked" : true,
        "credentialsNonExpired" : true,
        "nomComplet" : "admin CHUTTA admin (admin@CHUTTA)",
        "etablissement" : {
          "id" : 3,
          "label" : "Centre universitaire Mohamed VI Tanger",
          "code" : "HP",
          "nom" : "Centre universitaire Mohamed VI Tanger",
          "ordre" : 1,
          "actif" : true
        },
        "unite" : null,
        "profil" : {
          "id" : 144,
          "label" : "admin",
          "createdBy" : "",
          "updatedBy" : "",
          "libelle" : "admin",
          "domaine" : 0,
          "actif" : true
        },
        "services" : {
          "id" : 140,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "CHIRURGIE PÉDIATRIQUE URO-VISCERALE ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        },
        "rolesByDomain" : [ "ROLE_RP_ADMISSION_READ", "ROLE_ACCOMPAGNANT_WRITE", "ROLE_INTERVENTION_READ", "ROLE_CRO_WRITE", "ROLE_PANCARTE_GLOBAL_WRITE", "ROLE_PANCARTE_GLOBAL_READ", "ROLE_ENREGISTRER_ACTES_PRODUITS", "ROLE_CONSULTER_ACTES_PRODUITS", "ROLE_READ_PARAMETRE_HOSP", "ROLE_WRITE_PARAMETRE_HOSP", "ROLE_READ_UNITEPARAMETRE_HOSP", "ROLE_WRITE_UNITEPARAMETRE_HOSP", "ROLE_READ_BILANBIOLOGIQUE_HOSP", "ROLE_WRITE_BILANBIOLOGIQUE_HOSP", "ROLE_ANNULER_SORTIE", "ROLE_SUPPRIMER_ACTES_RECUPERER", "ROLE_SUPPRIMER_ACTES_RELEVE", "ROLE_REF_VALIDATION_CRH_READ", "ROLE_REF_SERVICE_TRANSFERT_READ", "ROLE_EXPORT", "ROLE_CREATE_EXAMEN", "ROLE_READ_EXAMEN", "ROLE_UPDATE_EXAMEN", "ROLE_DELETE_EXAMEN", "ROLE_CREATE_COMORBIDITE", "ROLE_READ_COMORBIDITE", "ROLE_DELETE_COMORBIDITE", "ROLE_CREATE_CATALOGUEEXAMEN", "ROLE_READ_CATALOGUEEXAMEN", "ROLE_UPDATE_CATALOGUEEXAMEN", "ROLE_DELETE_CATALOGUEEXAMEN", "ROLE_CREATE_RESULTAT", "ROLE_READ_RESULTAT", "ROLE_UPDATE_RESULTAT", "ROLE_DELETE_RESULTAT", "ROLE_CREATE_ORGANE", "ROLE_READ_ORGANE", "ROLE_UPDATE_ORGANE", "ROLE_DELETE_ORGANE", "ROLE_CREATE_MEDICAMENT", "ROLE_READ_MEDICAMENT", "ROLE_UPDATE_MEDICAMENT", "ROLE_DELETE_MEDICAMENT", "ROLE_CREATE_ANTECEDENT", "ROLE_READ_ANTECEDENT", "ROLE_UPDATE_ANTECEDENT", "ROLE_DELETE_ANTECEDENT", "ROLE_CREATE_ANTECEDENTFAMILIALCANCER", "ROLE_READ_ANTECEDENTFAMILIALCANCER", "ROLE_UPDATE_ANTECEDENTFAMILIALCANCER", "ROLE_DELETE_ANTECEDENTFAMILIALCANCER", "ROLE_CREATE_TRAITEMENTSANTERIEURS", "ROLE_READ_TRAITEMENTSANTERIEURS", "ROLE_UPDATE_TRAITEMENTSANTERIEURS", "ROLE_DELETE_TRAITEMENTSANTERIEURS", "ROLE_CREATE_GANGLION", "ROLE_READ_GANGLION", "ROLE_UPDATE_GANGLION", "ROLE_DELETE_GANGLION", "ROLE_CREATE_PROTOCOLE", "ROLE_READ_PROTOCOLE", "ROLE_UPDATE_PROTOCOLE", "ROLE_DELETE_PROTOCOLE", "ROLE_CREATE_RESUMEEXAMEN", "ROLE_READ_RESUMEEXAMEN", "ROLE_UPDATE_RESUMEEXAMEN", "ROLE_DELETE_RESUMEEXAMEN", "ROLE_CREATE_SYMPTOME", "ROLE_READ_SYMPTOME", "ROLE_UPDATE_SYMPTOME", "ROLE_DELETE_SYMPTOME", "ROLE_CREATE_DOSSIERCANCER", "ROLE_READ_DOSSIERCANCER", "ROLE_UPDATE_DOSSIERCANCER", "ROLE_DELETE_DOSSIERCANCER", "ROLE_CREATE_TAILLEGANGLION", "ROLE_READ_TAILLEGANGLION", "ROLE_UPDATE_TAILLEGANGLION", "ROLE_DELETE_TAILLEGANGLION", "ROLE_CREATE_LIENEXAMEN", "ROLE_READ_LIENEXAMEN", "ROLE_UPDATE_LIENEXAMEN", "ROLE_DELETE_LIENEXAMEN", "ROLE_CREATE_TRAITEMENTHORSCANCER", "ROLE_READ_TRAITEMENTHORSCANCER", "ROLE_UPDATE_TRAITEMENTHORSCANCER", "ROLE_DELETE_TRAITEMENTHORSCANCER", "ROLE_CREATE_DIAGNOSTIC", "ROLE_READ_DIAGNOSTIC", "ROLE_UPDATE_DIAGNOSTIC", "ROLE_DELETE_DIAGNOSTIC", "ROLE_CREATE_LOCALISATION", "ROLE_READ_LOCALISATION", "ROLE_UPDATE_LOCALISATION", "ROLE_DELETE_LOCALISATION", "ROLE_CREATE_AVIS", "ROLE_READ_AVIS", "ROLE_UPDATE_AVIS", "ROLE_DELETE_AVIS", "ROLE_CREATE_CATEGORIETHERAPEUTIQUE", "ROLE_READ_CATEGORIETHERAPEUTIQUE", "ROLE_UPDATE_CATEGORIETHERAPEUTIQUE", "ROLE_DELETE_CATEGORIETHERAPEUTIQUE", "ROLE_CREATE_EXAMENCLINIQUENVCAS", "ROLE_READ_EXAMENCLINIQUENVCAS", "ROLE_UPDATE_EXAMENCLINIQUENVCAS", "ROLE_DELETE_EXAMENCLINIQUENVCAS", "ROLE_CREATE_HABITUDETOXIQUE", "ROLE_READ_HABITUDETOXIQUE", "ROLE_UPDATE_HABITUDETOXIQUE", "ROLE_DELETE_HABITUDETOXIQUE", "ROLE_CREATE_ZONE", "ROLE_READ_ZONE", "ROLE_UPDATE_ZONE", "ROLE_DELETE_ZONE", "ROLE_CREATE_TYPEEXAMEN", "ROLE_READ_TYPEEXAMEN", "ROLE_UPDATE_TYPEEXAMEN", "ROLE_DELETE_TYPEEXAMEN", "ROLE_CREATE_ALLERGIE", "ROLE_READ_ALLERGIE", "ROLE_UPDATE_ALLERGIE", "ROLE_DELETE_ALLERGIE", "ROLE_CREATE_DECISIONTRAITEMENT", "ROLE_READ_DECISIONTRAITEMENT", "ROLE_UPDATE_DECISIONTRAITEMENT", "ROLE_DELETE_DECISIONTRAITEMENT", "ROLE_CREATE_ORDONNANCE", "ROLE_READ_ORDONNANCE", "ROLE_UPDATE_ORDONNANCE", "ROLE_DELETE_ORDONNANCE", "ROLE_CREATE_CONSULTATIONSPECIALISE", "ROLE_READ_CONSULTATIONSPECIALISE", "ROLE_UPDATE_CONSULTATIONSPECIALISE", "ROLE_DELETE_CONSULTATIONSPECIALISE", "ROLE_CREATE_ACTEPRESCTIPTION", "ROLE_READ_ACTEPRESCTIPTION", "ROLE_UPDATE_ACTEPRESCTIPTION", "ROLE_DELETE_ACTEPRESCTIPTION", "ROLE_HIST_ACTEPRESCTIPTION", "ROLE_CREATE_LIEUEXECUTION", "ROLE_READ_LIEUEXECUTION", "ROLE_UPDATE_LIEUEXECUTION", "ROLE_DELETE_LIEUEXECUTION", "ROLE_HIST_LIEUEXECUTION", "ROLE_CREATE_ORGANEPRIMAIRE", "ROLE_READ_ORGANEPRIMAIRE", "ROLE_UPDATE_ORGANEPRIMAIRE", "ROLE_DELETE_ORGANEPRIMAIRE", "ROLE_HIST_ORGANEPRIMAIRE", "ROLE_VISUALISE_DMC_MENU", "ROLE_HIST_PANELACTE", "ROLE_DELETE_PANELACTE", "ROLE_UPDATE_PANELACTE", "ROLE_READ_PANELACTE", "ROLE_CREATE_PANELACTE", "ROLE_CREATE_RCT", "ROLE_READ_RCT", "ROLE_UPDATE_RCT", "ROLE_DELETE_RCT", "ROLE_HIST_RCT", "ROLE_CREATE_GROUPERCT", "ROLE_READ_GROUPERCT", "ROLE_UPDATE_GROUPERCT", "ROLE_DELETE_GROUPERCT", "ROLE_HIST_GROUPERCT", "ROLE_CREATE_FONCTIONCALCULE", "ROLE_READ_FONCTIONCALCULE", "ROLE_UPDATE_FONCTIONCALCULE", "ROLE_DELETE_FONCTIONCALCULE", "ROLE_HIST_FONCTIONCALCULE", "ROLE_ADD_TRAITEMENT_CHIRURGIE", "ROLE_ADD_TRAITEMENT_CHIMIO", "ROLE_ADD_TRAITEMENT_RADIOTHERAPIE", "ROLE_CREATE_SUIVI", "ROLE_READ_SUIVI", "ROLE_UPDATE_SUIVI", "ROLE_DELETE_SUIVI", "ROLE_ANNULER_IMPORT_HIST", "ROLE_CREATE_FICHERCP", "ROLE_READ_FICHERCP", "ROLE_UPDATE_FICHERCP", "ROLE_DELETE_FICHERCP", "ROLE_HIST_FICHERCP", "ROLE_CANCEL_FICHE_RCP", "ROLE_REIMPORT_HIST", "ROLE_JOURNAL_SUIVI", "ROLE_UPDATE_COMORBIDITE", "ROLE_CREATE_QUESTIONNAIRE", "ROLE_READ_QUESTIONNAIRE", "ROLE_UPDATE_QUESTIONNAIRE", "ROLE_DELETE_QUESTIONNAIRE", "ROLE_CREATE_UNITEMESURE", "ROLE_READ_UNITEMESURE", "ROLE_UPDATE_UNITEMESURE", "ROLE_DELETE_UNITEMESURE", "ROLE_CREATE_CONTEXTEUTILISATION", "ROLE_READ_CONTEXTEUTILISATION", "ROLE_UPDATE_CONTEXTEUTILISATION", "ROLE_DELETE_CONTEXTEUTILISATION", "ROLE_CREATE_CHAMPPIVOTE", "ROLE_READ_CHAMPPIVOTE", "ROLE_UPDATE_CHAMPPIVOTE", "ROLE_DELETE_CHAMPPIVOTE", "ROLE_CREATE_GROUPEQUESTIONNAIRE", "ROLE_READ_GROUPEQUESTIONNAIRE", "ROLE_UPDATE_GROUPEQUESTIONNAIRE", "ROLE_DELETE_GROUPEQUESTIONNAIRE", "ROLE_CREATE_DOMAINEAPPLICATION", "ROLE_READ_DOMAINEAPPLICATION", "ROLE_UPDATE_DOMAINEAPPLICATION", "ROLE_DELETE_DOMAINEAPPLICATION", "ROLE_CREATE_ENTITESREFERENTIEL", "ROLE_READ_ENTITESREFERENTIEL", "ROLE_UPDATE_ENTITESREFERENTIEL", "ROLE_DELETE_ENTITESREFERENTIEL", "ROLE_CREATE_NOMENCLATURE", "ROLE_READ_NOMENCLATURE", "ROLE_UPDATE_NOMENCLATURE", "ROLE_DELETE_NOMENCLATURE", "ROLE_CREATE_PI", "ROLE_READ_PI", "ROLE_UPDATE_PI", "ROLE_DELETE_PI", "ROLE_CREATE_MOTIFANNULATION", "ROLE_READ_MOTIFANNULATION", "ROLE_UPDATE_MOTIFANNULATION", "ROLE_PI_A_PROGRAMMER", "ROLE_PI_PROGRAMMER", "ROLE_DELETE_MOTIFANNULATION", "ROLE_ACCES_CHIMIO", "ROLE_ACCES_REFERENTIEL_CHIMIO", "ROLE_CREATE_PM", "ROLE_READ_PM", "ROLE_UPDATE_PM", "ROLE_DELETE_PM", "ROLE_EXPORT", "ROLE_CREATE_CRO", "ROLE_READ_CRO", "ROLE_UPDATE_CRO", "ROLE_DELETE_CRO", "ROLE_HIST_CRO", "ROLE_CREATE_VOIEABORD", "ROLE_READ_VOIEABORD", "ROLE_UPDATE_VOIEABORD", "ROLE_DELETE_VOIEABORD", "ROLE_HIST_VOIEABORD", "ROLE_CREATE_MODELECRO", "ROLE_READ_MODELECRO", "ROLE_UPDATE_MODELECRO", "ROLE_DELETE_MODELECRO", "ROLE_HIST_MODELECRO", "ROLE_CREATE_FIELD", "ROLE_READ_FIELD", "ROLE_UPDATE_FIELD", "ROLE_DELETE_FIELD", "ROLE_CREATE_DICT_FUNCTIONS", "ROLE_READ_DICT_FUNCTIONS", "ROLE_UPDATE_DICT_FUNCTIONS", "ROLE_DELETE_DICT_FUNCTIONS", "ROLE_CREATE_VALUEFIELD", "ROLE_READ_VALUEFIELD", "ROLE_UPDATE_VALUEFIELD", "ROLE_DELETE_VALUEFIELD", "ROLE_CREATE_VALUEFORM", "ROLE_READ_VALUEFORM", "ROLE_UPDATE_VALUEFORM", "ROLE_DELETE_VALUEFORM", "ROLE_CREATE_FORM", "ROLE_READ_FORM", "ROLE_UPDATE_FORM", "ROLE_DELETE_FORM", "ROLE_CREATE_CPA", "ROLE_READ_CPA", "ROLE_UPDATE_CPA", "ROLE_DELETE_CPA", "ROLE_CONSULTER_HOSPITALISATION", "ROLE_CREATE_COMORBIDITE_GROUPE", "ROLE_READ_COMORBIDITE_GROUPE", "ROLE_UPDATE_COMORBIDITE_GROUPE", "ROLE_DELETE_COMORBIDITE_GROUPE", "ROLE_CREATE_ALERGIE_CPA", "ROLE_READ_ALERGIE_CPA", "ROLE_UPDATE_ALERGIE_CPA", "ROLE_DELETE_ALERGIE_CPA", "ROLE_CREATE_TRANSFUSION", "ROLE_READ_TRANSFUSION", "ROLE_UPDATE_TRANSFUSION", "ROLE_DELETE_TRANSFUSION", "ROLE_CREATE_VALEURPARAMETRE", "ROLE_READ_VALEURPARAMETRE", "ROLE_UPDATE_VALEURPARAMETRE", "ROLE_DELETE_VALEURPARAMETRE", "ROLE_READ_HISTORIQUE_VALEURPARAMETRE", "ROLE_UPDATE_CONSULTATION_OUVERTURE", "ROLE_CREATE_UNITEPARAMETRE", "ROLE_READ_UNITEPARAMETRE", "ROLE_UPDATE_UNITEPARAMETRE", "ROLE_DELETE_UNITEPARAMETRE", "ROLE_CREATE_PARAMETRE", "ROLE_READ_PARAMETRE", "ROLE_UPDATE_PARAMETRE", "ROLE_DELETE_PARAMETRE", "ROLE_PI_RECUSE_OU_EN_ATTENTE", "ROLE_PI_NECESSITANT_CPA", "ROLE_COMPLICATIONS_WRITE_DMC", "ROLE_COMPLICATIONS_LIST", "ROLE_REF_TYPE_CONSULTATION_WRITE", "ROLE_REF_TYPE_CONSULTATION_READ", "ROLE_READ_WL_AVIS_TRANSMIS", "ROLE_READ_WL_AVIS_DEMANDES", "ROLE_READ_ADMISSION_JOUR", "ROLE_CPA_REALISE", "ROLE_REF_TYPE_TRAITEMENT_WRITE", "ROLE_REF_TYPE_TRAITEMENT_READ", "ROLE_CREATE_STRATEGIE", "ROLE_READ_STRATEGIE", "ROLE_UPDATE_STRATEGIE", "ROLE_DELETE_STRATEGIE", "ROLE_CREATE_MOTIFOUVERTURE", "ROLE_READ_MOTIFOUVERTURE", "ROLE_UPDATE_MOTIFOUVERTURE", "ROLE_DELETE_MOTIFOUVERTURE", "ROLE_REF_TYPE_EXAMEN_WRITE", "ROLE_REF_TYPE_EXAMEN_READ", "ROLE_REF_DIAGNOSTIC_WRITE", "ROLE_REF_DIAGNOSTIC_READ", "ROLE_REF_PANELORDONNANCE_DMC_WRITE", "ROLE_REF_PANELORDONNANCE_DMC_READ", "ROLE_CREATE_PARAMETRAGE", "ROLE_DELETE_PARAMETRAGE", "ROLE_HIST_PARAMETRAGE", "ROLE_READ_PARAMETRAGE", "ROLE_UPDATE_PARAMETRAGE", "ROLE_READ_FICHE_SYNTHESE", "ROLE_WRITE_COMPTESRENDUS", "ROLE_READ_COMPTESRENDUS", "ROLE_OUVRIR_HOSPITALISATION", "ROLE_DEMANDE_HOSPITALISATION_WRITE", "ROLE_DEMANDE_HOSPITALISATION_READ", "ROLE_CREATE_IMMOBILISTION", "ROLE_READ_IMMOBILISTION", "ROLE_UPDATE_IMMOBILISTION", "ROLE_DELETE_IMMOBILISTION", "ROLE_HIST_IMMOBILISTION", "ROLE_CREATE_POSITIONNEMENT", "ROLE_READ_POSITIONNEMENT", "ROLE_UPDATE_POSITIONNEMENT", "ROLE_DELETE_POSITIONNEMENT", "ROLE_HIST_POSITIONNEMENT", "ROLE_CREATE_MODALITERADIOTHERAPIE", "ROLE_READ_MODALITERADIOTHERAPIE", "ROLE_UPDATE_MODALITERADIOTHERAPIE", "ROLE_DELETE_MODALITERADIOTHERAPIE", "ROLE_HIST_MODALITERADIOTHERAPIE", "ROLE_CREATE_VISEE", "ROLE_READ_VISEE", "ROLE_UPDATE_VISEE", "ROLE_DELETE_VISEE", "ROLE_HIST_VISEE", "ROLE_CREATE_immobilisation", "ROLE_READ_immobilisation", "ROLE_UPDATE_immobilisation", "ROLE_DELETE_immobilisation", "ROLE_HIST_immobilisation" ],
        "categorieRoles" : [ "GANGLION", "LIENEXAMEN", "AUTRES", "PROTOCOLE", "REFERENTIEL_CHIR", "GROUPEQUESTIONNAIRE", "ALLERGIE", "CPA", "SC_CHIMIO", "CHAMPPIVOTE", "VALUEFIELD", "FONCTIONCALCULE", "CHIR", "QUESTIONNAIRE", "ORDONNANCE", "VOIEABORD", "LOCALISATION", "RESULTAT", "DIAGNOSTIC", "TRAITEMENTSANTERIEURS", "FICHERCP", "TAILLEGANGLION", "ORGANEPRIMAIRE", "FIELD", "REF_RCT", "PARAMETRE_BIOLOGIE", "SYMPTOME", "PARAMETRAGE", "FORMS", "ALLERGIE_CPA", "ORGANE", "CONTEXTEUTILISATION", "REF_TYPE_CONSULTATION", "REF_TYPE_EXAMEN", "COMORBIDITE", "PARAMETRAGE_CONF", "FORM", "RCT", "MOTIFOUVERTURE", "DECISIONTRAITEMENT", "PM", "WL_ADMISSION_JOUR", "UNITEMESURE", "AVIS", "LIEUEXECUTION", "ANTECEDENT", "DOMAINEAPPLICATION", "TRAITEMENTHORSCANCER", "PANELACTE", "TYPEEXAMEN", "CRO", "EXAMENCLINIQUENVCAS", "DEMANDE_HOSPITALISATION", "TRANSFUSION", "REF_TYPE_TRAITEMENT", "ENTITESREFERENTIEL", "VALUEFORM", "CATEGORIETHERAPEUTIQUE", "PARAMETRE", "ACTEPRESCTIPTION", "STRATEGIE", "COMPLICATION", "DOSSIER_ANESTHESIE", "PI_WORKLIST", "MOTIFANNULATION", "REFERENTIEL_SC", "FORMULAIRE", "SC", "RADIOTHERAPIE", "GROUPERCT", "HABITUDETOXIQUE", "ANTECEDENTFAMILIALCANCER", "SC_CHIR", "PI", "RESUMEEXAMEN", "SUIVI", "DICT_FUNCTIONS", "REF_PANELORDONNANCE_DMC", "EXAMEN", "CONSULTATIONSPECIALISE", "DOSSIERCANCER", "NOMENCLATURE", "CATALOGUEEXAMEN", "COMPTESRENDUS", "ZONE", "SC_HOSPITALISATION", "REF_DIAGNOSTIC", "WL_AVIS", "MODELECRO", "UNITEPARAMETRE", "IMPORT_HIST", "REF_SC_CHIMIO", "MEDICAMENT", "DIAGNOSTIC", "AVIS", "WL_AVIS", "SC_CHIMIO", "CHAMPPIVOTE", "GROUPERCT", "ORGANE", "RECOUVREMENT", "PLAN", "LIEUEXECUTION", "WL_ADMISSION_JOUR", "ENTITESREFERENTIEL", "SC_HOSPITALISATION", "DEMANDE_HOSPITALISATION", "MEDICAMENT", "VOIEABORD", "MOTIFANNULATION", "CATEGORIETHERAPEUTIQUE", "DOSSIER_ANESTHESIE", "AUTRES", "COMPLICATION", "FIELD", "PI_WORKLIST", "CONSULTATIONSPECIALISE", "REF_TYPE_TRAITEMENT", "GROUPEQUESTIONNAIRE", "REF_TYPE_CONSULTATION", "UNITEMESURE", "REGIE", "PANELACTE", "VALUEFIELD", "STRATEGIE", "RCT", "PARAMETRE_BIOLOGIE", "UNITEPARAMETRE", "DOMAINEAPPLICATION", "TRAITEMENTHORSCANCER", "SC", "EXAMENCLINIQUENVCAS", "CHIR", "SI", "COMPTESRENDUS", "SYMPTOME", "REFERENTIEL_SC", "BILLING", "HABITUDETOXIQUE", "REFERENTIEL_CHIR", "CPA", "PHARMACIE", "CATALOGUEEXAMEN", "REF_TYPE_EXAMEN", "MOTIFOUVERTURE", "DOSSIERCANCER", "REF_DIAGNOSTIC", "EBILLING", "LOCALISATION", "ZONE", "SC_CHIR", "FONCTIONCALCULE", "TRAITEMENTSANTERIEURS", "ANTECEDENTFAMILIALCANCER", "PARAMETRE", "COMORBIDITE", "QUESTIONNAIRE", "DASHBI", "TAILLEGANGLION", "GANGLION", "SUIVI", "MODELECRO", "REF_PANELORDONNANCE_DMC", "PARAMETRAGE_CONF", "REF_SC_CHIMIO", "RESULTAT", "LIENEXAMEN", "CONTEXTEUTILISATION", "EXAMEN", "BLOCOPERATOIRE", "CRO", "TYPEEXAMEN", "ACTEPRESCTIPTION", "ORDONNANCE", "PARAMETRAGE", "FORMULAIRE", "IMPORT_HIST", "ALLERGIE", "RADIOTHERAPIE", "RESUMEEXAMEN", "FORM", "FICHERCP", "ORGANEPRIMAIRE", "VALUEFORM", "ALLERGIE_CPA", "FORMS", "PROTOCOLE", "NOMENCLATURE", "REF_RCT", "TRANSFUSION", "DICT_FUNCTIONS", "ANTECEDENT", "PI", "DECISIONTRAITEMENT", "PM" ],
        "codeCategoriePersonnel" : "CHEFSERVICE",
        "libelleCategoriePersonnel" : "Chef de service",
        "specialite" : "Chirurgie",
        "personnel" : {
          "id" : 496,
          "label" : " ",
          "createdBy" : "",
          "updatedBy" : "",
          "ordre" : 1,
          "actif" : true,
          "titulaire" : false
        },
        "nomCompletPersonnel" : "médecin médecin",
        "servicessList" : [ {
          "id" : 88,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Ophtalmologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 99,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Gastro-Entérologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 79,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Gynécologie-Obstétrique",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 150,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Urologie ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 140,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "CHIRURGIE PÉDIATRIQUE URO-VISCERALE ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 151,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Vasculaire périphérique",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 110,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Neurologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 100,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hématologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 116,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Rééducation physique",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 90,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Psychiatrie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 106,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Réanimation néonatalogie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 107,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Traumatologie orthopédie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 81,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Pédiatrie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 83,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Médecine légale",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 86,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Cardiologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 98,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Pneumo-phtisiologie",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        } ],
        "specialiteList" : [ {
          "id" : 57,
          "label" : "Néphrologie",
          "createdOn" : "2021-06-28T14:39:45.489",
          "updatedOn" : "2021-12-31T10:58:01.684",
          "createdBy" : "HAFDI Hajar",
          "updatedBy" : "TAIBI Fadoua",
          "libelle" : "Néphrologie",
          "code" : "Néphrologie",
          "description" : "",
          "ordre" : 8,
          "actif" : true,
          "hl7" : "",
          "etablissement" : {
            "id" : 3,
            "label" : "Centre universitaire Mohamed VI Tanger",
            "createdOn" : "2021-05-17T13:50:59.844",
            "updatedOn" : "2022-12-02T14:13:54.939",
            "createdBy" : "super admin null",
            "updatedBy" : "admin CHUTTA admin",
            "code" : "HP",
            "nom" : "Centre universitaire Mohamed VI Tanger",
            "codeInpe" : "160063871",
            "telephone" : "05393-92465",
            "numeroCompte" : "007 640 0013705000000745",
            "ordre" : 2,
            "actif" : true,
            "hl7" : "HP",
            "region" : {
              "id" : 3,
              "label" : "Tanger-Tetouan-Al Hoceima",
              "updatedOn" : "2017-08-25T08:40:32.888",
              "createdBy" : "",
              "updatedBy" : "fondation",
              "libelle" : "Tanger-Tetouan-Al Hoceima",
              "code" : "Tanger-Tetouan-Al Hoceima",
              "ordre" : 1,
              "actif" : true,
              "hl7" : "Tanger-Tetouan-Al Hoceima",
              "hibernateLazyInitializer" : { }
            },
            "province" : {
              "id" : 9,
              "label" : "9",
              "updatedOn" : "2017-08-10T08:23:00.161",
              "createdBy" : "",
              "updatedBy" : "testeur",
              "code" : "Tanger-Assilah",
              "libelle" : "Tanger-Assilah",
              "codeIPCM" : "909",
              "ordre" : 1,
              "actif" : true,
              "hl7" : "83",
              "hibernateLazyInitializer" : { }
            },
            "commune" : {
              "id" : 124,
              "label" : "124",
              "updatedOn" : "2021-11-19T10:53:30.593",
              "createdBy" : "",
              "updatedBy" : "LAALEJ Mariyem",
              "libelle" : "Gueznaia",
              "ordre" : 1,
              "actif" : true,
              "hl7" : "Gueznaia",
              "province" : {
                "id" : 9,
                "label" : "9",
                "updatedOn" : "2017-08-10T08:23:00.161",
                "createdBy" : "",
                "updatedBy" : "testeur",
                "code" : "Tanger-Assilah",
                "libelle" : "Tanger-Assilah",
                "codeIPCM" : "909",
                "ordre" : 1,
                "actif" : true,
                "hl7" : "83",
                "hibernateLazyInitializer" : { }
              },
              "hibernateLazyInitializer" : { }
            }
          },
          "prescription" : false,
          "couleur" : "#77a9c4",
          "blocoperatoire" : false,
          "hibernateLazyInitializer" : { }
        } ],
        "uniteServ" : {
          "id" : 165,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        },
        "unites" : [ {
          "id" : 89,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 161,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 165,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 111,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 166,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 101,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hôpital de Jour",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 167,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 102,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 168,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 103,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 203,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 117,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 80,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Obstétrique",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 91,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 119,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 92,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hôpital de jour",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 108,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 82,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 219,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hôpital de jour ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 209,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 84,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Consultation ",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 95,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        }, {
          "id" : 87,
          "createdBy" : "",
          "updatedBy" : "",
          "intitule" : "Hospitalisation",
          "ordre" : 1,
          "actif" : true,
          "avis" : true
        } ],
        "inactiveSessionTimeout" : 20,
        "titreNomCompletPersonnel" : "Pr. médecin médecin",
        "currentUserWithTitle" : "Pr. médecin médecin (admin@CHUTTA)",
        "personnelDto" : {
          "id" : 496,
          "label" : "Pr. médecin médecin",
          "createdOn" : "17/05/2021 14:12",
          "updatedOn" : "13/09/2021 10:07",
          "createdBy" : "admin CHUTTA null",
          "updatedBy" : "akirache reda",
          "nom" : "médecin",
          "prenom" : "médecin",
          "ordre" : 1,
          "actif" : true,
          "titulaire" : true,
          "nomPrenom" : "Pr. médecin médecin",
          "specialite" : {
            "id" : 57,
            "label" : "Néphrologie",
            "createdOn" : "28/06/2021 14:39",
            "updatedOn" : "31/12/2021 10:58",
            "createdBy" : "HAFDI Hajar",
            "updatedBy" : "TAIBI Fadoua",
            "libelle" : "Néphrologie",
            "code" : "Néphrologie",
            "ordre" : 8,
            "actif" : true,
            "prescription" : false,
            "couleur" : "#77a9c4",
            "blocoperatoire" : false
          },
          "titre" : {
            "name" : "PROFESSEUR",
            "displayText" : "Pr"
          },
          "nomPrenomComplet" : "Pr. médecin médecin",
          "categoriePersonnel" : {
            "id" : 47,
            "ordre" : 1,
            "actif" : true
          }
        },
        "hasChimio" : false
      }
});


// -----------------------------------------------------------------------------

Route.post('/api/testOne/paginatedListByCriteria', ({ request, response, view }) => {
    return {
        list : [
            {    
                id: 12,
                date: '30/01/2023',
                object: {label:'M.Said',id:56},
                boolean: true, 
                string: 'this is a str',
                number:30,
                list:[{label:'RCC 89',id:56},{label:'RCC 3',id:6}],
            },
            {    
                id: 11,
                date: '20/01/2023',
                object: {label:'M.Said',id:56},
                boolean: true, 
                string: 'this is a str',
                number:30,
                list:[{label:'RCC 89',id:56},{label:'RCC 3',id:6}],
            },
        ],   
        dataSize : 2
      }
});

Route.post('/api/testOne', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/testOne/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/testOne/:id', ({ request, response, view }) => {
    return  {    
        id: 12,
        date: '30/01/2023',
        object: {label:'M.Said',id:56},
        boolean: true, 
        string: 'this is a str',
        number:30,
        list:[{label:'RCC 89',id:56},{label:'RCC 3',id:6}],
    };
});

Route.put('/api/radiotherapie/:id', ({ request, response, view }) => {
    return  {    
        id: 12,
        date: '30/01/2023',
        object: {label:'M.Said',id:56},
        boolean: true, 
        string: 'this is a str',
        number:30,
        list:[{label:'RCC 89',id:56},{label:'RCC 3',id:6}],
    };
});


Route.post('/api/prescriptionRadiotherapie/upload', ({ request, response, view }) => {
    return {
      checksum:'jhebxujzehbfxueby65244',
      fileName:'strictOrigin.pdf'
    };
});


Route.post('api/auth/token', ({ request, response, view }) => {
  return{
    "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBDSFVUVEEiLCJpYXQiOjE2Nzk3MzkxMjYsImV4cCI6MTY3OTc2NzkyNn0.C-SpBwD9M-6MIIoR_cgCY0KEbhfQCuaHDeXHBVzN1rr2HmfEUgftLMrIrYtZpHLGnp3xAbnO4ac0XVL0Pz4jSQ"
  };
});

Route.get('api/utilisateur/getCurrentUserByDomain/:id', ({ request, response, view }) => {
  return  {
    "id" : 550,
    "nom" : "admin CHUTTA",
    "prenom" : "admin",
    "cin" : "",
    "adresse" : "",
    "email" : "",
    "telephone" : "",
    "mobile" : "",
    "expertise" : false,
    "username" : "admin@CHUTTA",
    "enabled" : true,
    "accountNonExpired" : true,
    "accountNonLocked" : true,
    "credentialsNonExpired" : true,
    "nomComplet" : "admin CHUTTA admin (admin@CHUTTA)",
    "etablissement" : {
      "id" : 3,
      "label" : "3",
      "createdBy" : "",
      "updatedBy" : "",
      "code" : "HP",
      "nom" : "Centre universitaire Mohamed VI Tanger",
      "actif" : false,
      "nomArabe" : "المركز الاستشفائي الجامعي محمد السادس طنجة"
    },
    "profil" : {
      "id" : 143,
      "label" : "143",
      "createdBy" : "",
      "updatedBy" : "",
      "libelle" : "Administrateur",
      "domaine" : 0,
      "actif" : true
    },
    "services" : {
      "id" : 140,
      "label" : "140",
      "createdBy" : "",
      "updatedBy" : "",
      "code" : "CPED",
      "intitule" : "CHIRURGIE PÉDIATRIQUE URO-VISCERALE ",
      "actif" : false,
      "typeEntite" : {
        "name" : "SERVICE",
        "displayText" : "Service"
      },
      "bulletinHospit" : false
    },
    "rolesByDomain" : [ "ROLE_UPDATE_ALLERGIE","ROLE_READ_ALLERGIE","ROLE_CREATE_ETABLISSEMENTPROVENANCE", "ROLE_READ_ETABLISSEMENTPROVENANCE", "ROLE_UPDATE_ETABLISSEMENTPROVENANCE", "ROLE_DELETE_ETABLISSEMENTPROVENANCE", "ROLE_ANNULER_ENCAISSEMENT", "ROLE_READ_ENCAISSEMENT", "ROLE_ENREGISTRER_ENCAISSEMENT", "ROLE_TRANSFERER_ENCAISSEMENT", "ROLE_ANNULER_VERSEMENT", "ROLE_VALIDER_VERSEMENT", "ROLE_ETAT_ADMISSION_OPERATEUR", "ROLE_CREATE_ENCAISSEMENT", "ROLE_CONSULTER_ACTES_PRODUITS", "ROLE_READ_ADMISSION", "ROLE_READ_DOCUMENTADMISSION", "ROLE_EDITION_FACTURE", "ROLE_CREATE_VERSEMENT", "ROLE_READ_VERSEMENT", "ROLE_UPDATE_VERSEMENT", "ROLE_EXPORT", "ROLE_READ_JOURNALTRANSFERT", "ROLE_READ_TOUS_REGISSEURS", "ROLE_RECHERCHE_TOUS_OPERATEURS", "ROLE_ETAT_PATIENT_PAR_CATEGORIE", "ROLE_PATIENTS_CREES_PAR_OPERATEUR", "ROLE_ETAT_PRESTATION_PAR_CATEGORIE", "ETAT_SAISIE_DES_PATIENTS_PAR_CATEGORIE", "ROLE_ETAT_ACTES", "ROLE_ETAT_ACTES_PATIENT", "ROLE_ETAT_ADMISSIONS_AVEC_RECEPISSE_NON_VALIDE", "ROLE_ETAT_BONS_INTERHOSPIT", "ROLE_ETAT_DES_CONVERSIONS_DE_CATEGORIE", "ETAT_GENERATIONS_DES_CARTES", "ROLE_ETAT_IMPUTATIONS_REGIE", "ROLE_ETAT_IMPUTATIONS_RECOUVREMENT", "ROLE_ETAT_MEDICAMENTS", "ROLE_ETAT_MEDICAMENTS_PATIENT", "ROLE_ETAT_SUIVI_REJETS", "ROLE_ETAT_ADMISSIONS_NON_FACTUREES", "ROLE_DELETE_ETAT_JOURNALIER", "ROLE_ETAT_RAPPROCHEMENT_IDENTITE", "ROLE_CREATE_CAISSE", "ROLE_READ_CAISSE", "ROLE_UPDATE_CAISSE", "ROLE_DELETE_CAISSE", "ROLE_HIST_CAISSE", "ROLE_CREATE_CAISSIER", "ROLE_READ_CAISSIER", "ROLE_UPDATE_CAISSIER", "ROLE_DELETE_CAISSIER", "ALIMENTER_CAISSE_AUXILIAIRE", "UPDATE_CAISSE_QUITTANCE_SEQUENCE", "ROLE_READ_CATEGORIEPARAMETRAGE", "ROLE_CONSULTER_QUITTANCE", "ROLE_READ_PARAMETRAGE", "ROLE_MODIFIER_MONTANT_ENCAISSEMENT", "ROLE_UPDATE_RUBRIQUE", "ROLE_ANNULER_JOURNALRECEPTION", "ROLE_READ_JOURNALRECEPTION", "ROLE_RECEVOIR_ENCAISSEMENT", "ROLE_UPDATE_ENCAISSEMENT", "ROLE_PATIENT_RECEPISSE", "ROLE_MODIFIER_INFO_ANAM", "ROLE_UPDATE_PATIENT_RAMED", "ROLE_MODIFIER_INFO_ANAM_ADMISSION", "ROLE_TRANSFORMER_PREADMISSION", "ROLE_ANNULER_ENCAISSEMENT", "ROLE_READ_ENCAISSEMENT", "ROLE_ENREGISTRER_ENCAISSEMENT", "ROLE_TRANSFERER_ENCAISSEMENT", "ROLE_ANNULER_VERSEMENT", "ROLE_VALIDER_VERSEMENT", "ROLE_AJOUTER_PATIENT_RAMED", "ROLE_ANNULER_PATIENT", "ROLE_READ_PATIENT_RAMED", "ROLE_READ_PERSONNEAPREVENIR", "ROLE_ENREGISTRER_PATIENT_SUIVI", "ROLE_MODIFIER_CATEGORIE_COMPTABLE_PATIENT", "ROLE_MODIFIER_PATIENT_SUIVI", "ROLE_READ_HISTCARTEPATIENT", "ROLE_CREATE_DOCUMENTPATIENT", "ROLE_CREATE_PATIENT", "ROLE_READ_DEVIS", "ROLE_DELETE_DEVIS", "ROLE_CREATE_DOCUMENTPEC", "ROLE_CREATE_PREADMISSION", "ROLE_DOSSIER_GENERER_PEC", "ROLE_FUSION_PATIENT", "ROLE_ANULER_FUSION_PATIENT", "ROLE_ETAT_ADMISSION_OPERATEUR", "ROLE_CREATE_ENCAISSEMENT", "ROLE_ADMISSION_TRANS_INER_HOSP", "ROLE_CREATE_DOCUMENTADMISSION", "ROLE_ANNULER_ADMISSION", "ROLE_CLOTURE_ADMISSION", "ROLE_CONSULTER_ACTES_PRODUITS", "ROLE_READ_ADMISSION", "ROLE_READ_DOCUMENTADMISSION", "ROLE_EDITER_ETIQUETTE_BAF", "ROLE_ENREGISTRER_ACTES_PRODUITS", "ROLE_MODIFIER_ADMISSION_SUIVI", "ROLE_UPDATE_ADMISSION", "ROLE_OUVRIR_ADMISSION_RAMED", "ROLE_CREATE_ADMISSION", "ROLE_ADMISSION_RECEPISSE_EXPIRE", "ROLE_REOUVERTURE_ADMISSION", "ROLE_CREATE_DEVIS", "ROLE_ANNULER_FACTURE", "ROLE_EDITION_FACTURE", "ROLE_FUSION_FACTURE", "ROLE_CREATE_VERSEMENT", "ROLE_READ_VERSEMENT", "ROLE_UPDATE_VERSEMENT", "ROLE_CREATE_PERSONNEAPREVENIR", "ROLE_READ_DOCUMENTPATIENT", "ROLE_READ_PATIENT", "ROLE_MODIFIER_IDEN_PROV", "ROLE_UPDATE_PATIENT", "ROLE_TELECHARGER_CARTE_PATIENT", "ROLE_TELECHARGER_ETIQUETTE_DOSSIER_MEDICAL", "ROLE_CREATE_DEMANDE_PEC", "ROLE_CREATE_PEC", "ROLE_ANNULER_ET_REMPLACER_PEC", "ROLE_ANNULER_PEC", "ROLE_READ_PEC", "ROLE_READ_REPONSEPEC", "ROLE_ENVOYER_PEC", "ROLE_UPDATE_PEC", "ROLE_UPDATE_REPONSEPEC", "ROLE_REJETER_PEC", "ROLE_CREATE_REPONSEPEC", "ROLE_READ_DEMANDERECOUVREMENT", "ROLE_READ_REPONSERECOUVREMENT", "ROLE_CREATE_DEMANDERECOUVREMENT", "ROLE_ETAT_RECOUVREMENT", "ROLE_CREATE_REPONSERECOUVREMENT", "ROLE_EXPORT", "ROLE_CREATE_UNITEDOSAGE", "ROLE_READ_UNITEDOSAGE", "ROLE_UPDATE_UNITEDOSAGE", "ROLE_READ_DOCUMENTPEC", "ROLE_READ_TARIFICATION", "ROLE_CREATE_VILLE", "ROLE_READ_VILLE", "ROLE_UPDATE_VILLE", "ROLE_READ_LETTRECLE", "ROLE_READ_GROUPEPRESTATION", "ROLE_READ_ANULER_PATIENT", "ROLE_READ_JOURNALTRANSFERT", "ROLE_READ_TOUS_REGISSEURS", "ROLE_RECHERCHE_TOUS_OPERATEURS", "ROLE_ETAT_PATIENT_PAR_CATEGORIE", "ROLE_PATIENTS_CREES_PAR_OPERATEUR", "ROLE_ETAT_PRESTATION_PAR_CATEGORIE", "ROLE_TELECHARGER_DEUXIEME_CARTE_PATIENT", "ROLE_BULLETIN_HOSPIT", "ETAT_SAISIE_DES_PATIENTS_PAR_CATEGORIE", "ROLE_ETAT_ACTES", "ROLE_ETAT_ACTES_PATIENT", "ROLE_ETAT_ADMISSIONS_AVEC_RECEPISSE_NON_VALIDE", "ROLE_ETAT_BONS_INTERHOSPIT", "ROLE_ETAT_DES_CONVERSIONS_DE_CATEGORIE", "ETAT_GENERATIONS_DES_CARTES", "ROLE_ETAT_IMPUTATIONS_REGIE", "ROLE_ETAT_IMPUTATIONS_RECOUVREMENT", "ROLE_ETAT_MEDICAMENTS", "ROLE_ETAT_MEDICAMENTS_PATIENT", "ROLE_ETAT_SUIVI_REJETS", "ROLE_AJOUT_PATIENT_HORS_ANAM", "ROLE_AJOUT_ADMISSION_HORS_ANAM", "ROLE_AJOUT_PATIENT_RECIPICE", "ROLE_AJOUT_ADMISSION_RECIPICE", "ROLE_ACTIONS_FACTURE_FUSIONNEE", "ROLE_ETAT_ADMISSIONS_NON_FACTUREES", "ROLE_DELETE_ETAT_JOURNALIER", "ROLE_CREATE_IDENTITE_MEME_CINE", "ROLE_CREATE_IDENTITE_MEME_IPCM", "ROLE_IGNORER_DISCORDANCE_CINE_SAISI_CINE_ANAM", "ROLE_ANNULER_REMPLACER_FACTURE", "ROLE_CREATE_PATIENT_HIST", "ROLE_CREATE_INCOHERENT_PATIENT_HIST", "ROLE_CREATE_CLASSEDISPOSITIFMEDICAL", "ROLE_READ_CLASSEDISPOSITIFMEDICAL", "ROLE_UPDATE_CLASSEDISPOSITIFMEDICAL", "ROLE_CREATE_TVA", "ROLE_READ_TVA", "ROLE_UPDATE_TVA", "ROLE_SUPPRIMER_ACTES_NON_FACTURE", "ROLE_SUPPRIMER_ARTICLES_NON_FACTURE", "ROLE_MODIFIER_CATEGORIE_COMPTABLE_ADMISSION", "ROLE_ETAT_RAPPROCHEMENT_IDENTITE", "ROLE_CREATE_DEMANDEDISPENSATION_EBILLING", "ROLE_READ_DEMANDEDISPENSATION_EBILLING", "ROLE_UPDATE_DEMANDEDISPENSATION_EBILLING", "ROLE_DELETE_DEMANDEDISPENSATION_EBILLING", "ROLE_CONSULTER_PATIENTS_SORTANTS", "ROLE_CREATE_CAISSE", "ROLE_READ_CAISSE", "ROLE_UPDATE_CAISSE", "ROLE_DELETE_CAISSE", "ROLE_HIST_CAISSE", "ROLE_CREATE_CAISSIER", "ROLE_READ_CAISSIER", "ROLE_UPDATE_CAISSIER", "ROLE_DELETE_CAISSIER", "ALIMENTER_CAISSE_AUXILIAIRE", "UPDATE_CAISSE_QUITTANCE_SEQUENCE", "ROLE_VIEW_DEMANDEDISP_WORKLIST", "ROLE_VIEW_INCOMPLETE_ADMISSIONS", "ROLE_SUPPRIMER_ACTES_RECUPERER", "ROLE_SUPPRIMER_ACTES_RELEVE", "ROLE_CREATE_TYPEPRESCRIPTEUR", "ROLE_READ_TYPEPRESCRIPTEUR", "ROLE_UPDATE_TYPEPRESCRIPTEUR", "ROLE_HIST_TYPEPRESCRIPTEUR", "ROLE_READ_PANELPRESTATION", "ROLE_HIST_PANELPRESTATION", "ROLE_CREATE_PANELPHARMACIE", "ROLE_READ_PANELPHARMACIE", "ROLE_UPDATE_PANELPHARMACIE", "ROLE_HIST_PANELPHARMACIE", "ROLE_EDITION_BORDEREAU", "ROLE_READ_TAUXPOSSIBLE", "ROLE_CREATE_TYPEDOCUMENT", "ROLE_READ_TYPEDOCUMENT", "ROLE_UPDATE_TYPEDOCUMENT", "ROLE_CREATE_LIENPARENTE", "ROLE_READ_LIENPARENTE", "ROLE_UPDATE_LIENPARENTE", "ROLE_CREATE_TYPEPRODUIT", "ROLE_READ_TYPEPRODUIT", "ROLE_UPDATE_TYPEPRODUIT", "ROLE_READ_CATEGORIEPARAMETRAGE", "ROLE_READ_ACTE", "ROLE_UPDATE_ACTIVITESOCIOPROF", "ROLE_DELETE_ACTIVITESOCIOPROF", "ROLE_CREATE_ACTIVITESOCIOPROF", "ROLE_READ_CLECONVENTION", "ROLE_READ_CATEGORIECOMPTABLE", "ROLE_UPDATE_CATEGORIECOMPTABLE", "ROLE_CREATE_PROVINCE", "ROLE_READ_PROVINCE", "ROLE_UPDATE_PROVINCE", "ROLE_READ_NATURE", "ROLE_CREATE_NATIONALITE", "ROLE_READ_NATIONALITE", "ROLE_UPDATE_NATIONALITE", "ROLE_READ_ESSAICLINIQUE", "ROLE_READ_COMPTECOMPTABLE", "ROLE_READ_COLLECTEURPAIEMENT", "ROLE_CREATE_REGION", "ROLE_READ_REGION", "ROLE_UPDATE_REGION", "ROLE_CREATE_CLASSETHERAPEUTIQUE", "ROLE_READ_CLASSETHERAPEUTIQUE", "ROLE_UPDATE_CLASSETHERAPEUTIQUE", "ROLE_CREATE_CIVILITE", "ROLE_READ_CIVILITE", "ROLE_UPDATE_CIVILITE", "ROLE_READ_ORGANISME", "ROLE_READ_CONVENTION", "ROLE_CREATE_PIECEIDENTITE", "ROLE_READ_PIECEIDENTITE", "ROLE_UPDATE_PIECEIDENTITE", "ROLE_CREATE_PAYS", "ROLE_READ_PAYS", "ROLE_UPDATE_PAYS", "ROLE_CREATE_FORMEPRODUIT", "ROLE_READ_FORMEPRODUIT", "ROLE_UPDATE_FORMEPRODUIT", "ROLE_CREATE_ORGANISMEPROVENANCE", "ROLE_READ_ORGANISMEPROVENANCE", "ROLE_UPDATE_ORGANISMEPROVENANCE", "ROLE_CREATE_UNITEFACTURATION", "ROLE_READ_UNITEFACTURATION", "ROLE_UPDATE_UNITEFACTURATION", "ROLE_CREATE_FAMILLEPRODUIT", "ROLE_READ_FAMILLEPRODUIT", "ROLE_UPDATE_FAMILLEPRODUIT", "ROLE_CREATE_LIEUNAISSANCE", "ROLE_READ_LIEUNAISSANCE", "ROLE_UPDATE_LIEUNAISSANCE", "ROLE_CREATE_PRODUIT", "ROLE_READ_PRODUIT", "ROLE_UPDATE_PRODUIT", "ROLE_CREATE_CATEGORIESOCIOPROF", "ROLE_READ_CATEGORIESOCIOPROF", "ROLE_UPDATE_CATEGORIESOCIOPROF", "ROLE_READ_BANQUE", "ROLE_UPDATE_BANQUE", "ROLE_CREATE_SOUSFAMILLEPRODUIT", "ROLE_READ_SOUSFAMILLEPRODUIT", "ROLE_UPDATE_SOUSFAMILLEPRODUIT", "ROLE_READ_TAUXPEC", "ROLE_READ_DIAGNOSTIQUE", "ROLE_READ_MOTIFADMISSION", "ROLE_CREATE_DCI", "ROLE_READ_DCI", "ROLE_UPDATE_DCI", "ROLE_READ_TYPESORTIE", "ROLE_READ_FAMILLEPRESTATION", "ROLE_CREATE_CATEGORIEDOCUMENT", "ROLE_READ_CATEGORIEDOCUMENT", "ROLE_UPDATE_CATEGORIEDOCUMENT", "ROLE_READ_LABORATOIREESSAI", "ROLE_CREATE_ETABLISSEMENTPROVENANCE", "ROLE_READ_ETABLISSEMENTPROVENANCE", "ROLE_UPDATE_ETABLISSEMENTPROVENANCE", "ROLE_MODIFIER_TAUX_PEC", "ROLE_READ_TYPESEJOUR", "ROLE_READ_REFSEJOUR", "ROLE_CONSULTER_QUITTANCE", "ROLE_READ_PARAMETRAGE", "ROLE_HIST_PATIENT", "ROLE_CREATE_DEMANDERECOUVREMENT_PATIENT", "ROLE_READ_DEMANDERECOUVREMENT_PATIENT", "ROLE_UPDATE_DEMANDERECOUVREMENT_PATIENT", "ROLE_DELETE_DEMANDERECOUVREMENT_PATIENT", "ROLE_HIST_DEMANDERECOUVREMENT_PATIENT", "ROLE_MODIFIER_MONTANT_ENCAISSEMENT", "UPDATE_PARTORG_PRODUIT_ADMISSION", "ROLE_APPLIQUER_FORFAITS", "ROLE_DESAPPLIQUER_FORFAITS", "ROLE_SUPPRIMER_FORFAITS", "ROLE_UPDATE_RUBRIQUE", "ROLE_ANNULER_JOURNALRECEPTION", "ROLE_READ_JOURNALRECEPTION", "ROLE_RECEVOIR_ENCAISSEMENT", "ROLE_READ_MOTIFREFUSRECEPTION", "ROLE_WRITE_MOTIFREFUSRECEPTION", "ROLE_READ_MOTIFANNULATIONENCAISSEMENT", "ROLE_WRITE_MOTIFANNULATIONENCAISSEMENT", "ROLE_UPDATE_ENCAISSEMENT", "ROLE_PATIENT_RECEPISSE", "ROLE_MODIFIER_INFO_ANAM", "ROLE_UPDATE_PATIENT_RAMED", "ROLE_MODIFIER_INFO_ANAM_ADMISSION", "ROLE_TRANSFORMER_PREADMISSION", "ROLE_AJOUTER_PATIENT_RAMED", "ROLE_ANNULER_PATIENT", "ROLE_READ_PATIENT_RAMED", "ROLE_READ_PERSONNEAPREVENIR", "ROLE_ENREGISTRER_PATIENT_SUIVI", "ROLE_MODIFIER_CATEGORIE_COMPTABLE_PATIENT", "ROLE_MODIFIER_PATIENT_SUIVI", "ROLE_READ_HISTCARTEPATIENT", "ROLE_CREATE_DOCUMENTPATIENT", "ROLE_CREATE_PATIENT", "ROLE_READ_DEVIS", "ROLE_DELETE_DEVIS", "ROLE_CREATE_DOCUMENTPEC", "ROLE_CREATE_PREADMISSION", "ROLE_DOSSIER_GENERER_PEC", "ROLE_FUSION_PATIENT", "ROLE_ANULER_FUSION_PATIENT", "ROLE_ADMISSION_TRANS_INER_HOSP", "ROLE_CREATE_DOCUMENTADMISSION", "ROLE_ANNULER_ADMISSION", "ROLE_CLOTURE_ADMISSION", "ROLE_CONSULTER_ACTES_PRODUITS", "ROLE_READ_ADMISSION", "ROLE_READ_DOCUMENTADMISSION", "ROLE_EDITER_ETIQUETTE_BAF", "ROLE_ENREGISTRER_ACTES_PRODUITS", "ROLE_MODIFIER_ADMISSION_SUIVI", "ROLE_UPDATE_ADMISSION", "ROLE_OUVRIR_ADMISSION_RAMED", "ROLE_CREATE_ADMISSION", "ROLE_ADMISSION_RECEPISSE_EXPIRE", "ROLE_REOUVERTURE_ADMISSION", "ROLE_CREATE_DEVIS", "ROLE_DELETE_REPONSEPEC", "ROLE_ANNULER_FACTURE", "ROLE_EDITION_FACTURE", "ROLE_FUSION_FACTURE", "ROLE_CREATE_PERSONNEAPREVENIR", "ROLE_READ_DOCUMENTPATIENT", "ROLE_READ_PATIENT", "ROLE_MODIFIER_IDEN_PROV", "ROLE_UPDATE_PATIENT", "ROLE_TELECHARGER_CARTE_PATIENT", "ROLE_TELECHARGER_ETIQUETTE_DOSSIER_MEDICAL", "ROLE_CREATE_DEMANDE_PEC", "ROLE_CREATE_PEC", "ROLE_ANNULER_ET_REMPLACER_PEC", "ROLE_ANNULER_PEC", "ROLE_READ_PEC", "ROLE_READ_REPONSEPEC", "ROLE_ENVOYER_PEC", "ROLE_UPDATE_PEC", "ROLE_UPDATE_REPONSEPEC", "ROLE_REJETER_PEC", "ROLE_CREATE_REPONSEPEC", "ROLE_EXPORT", "ROLE_CREATE_UNITEDOSAGE", "ROLE_READ_UNITEDOSAGE", "ROLE_UPDATE_UNITEDOSAGE", "ROLE_DELETE_UNITEDOSAGE", "ROLE_READ_DOCUMENTPEC", "ROLE_DELETE_LABORATOIREESSAI", "ROLE_CREATE_TARIFICATION", "ROLE_READ_TARIFICATION", "ROLE_UPDATE_TARIFICATION", "ROLE_DELETE_TARIFICATION", "ROLE_CREATE_VILLE", "ROLE_READ_VILLE", "ROLE_UPDATE_VILLE", "ROLE_DELETE_VILLE", "ROLE_CREATE_LETTRECLE", "ROLE_READ_LETTRECLE", "ROLE_UPDATE_LETTRECLE", "ROLE_DELETE_LETTRECLE", "ROLE_CREATE_GROUPEPRESTATION", "ROLE_READ_GROUPEPRESTATION", "ROLE_UPDATE_GROUPEPRESTATION", "ROLE_DELETE_GROUPEPRESTATION", "ROLE_READ_ANULER_PATIENT", "ROLE_TELECHARGER_DEUXIEME_CARTE_PATIENT", "ROLE_BULLETIN_HOSPIT", "ROLE_CREATE_ORIGINE", "ROLE_AJOUT_PATIENT_HORS_ANAM", "ROLE_AJOUT_ADMISSION_HORS_ANAM", "ROLE_AJOUT_PATIENT_RECIPICE", "ROLE_AJOUT_ADMISSION_RECIPICE", "ROLE_ACTIONS_FACTURE_FUSIONNEE", "ROLE_CREATE_IDENTITE_MEME_CINE", "ROLE_CREATE_IDENTITE_MEME_IPCM", "ROLE_IGNORER_DISCORDANCE_CINE_SAISI_CINE_ANAM", "ROLE_ANNULER_REMPLACER_FACTURE", "ROLE_CREATE_PATIENT_HIST", "ROLE_CREATE_INCOHERENT_PATIENT_HIST", "ROLE_READ_ORIGINE", "ROLE_UPDATE_ORIGINE", "ROLE_DELETE_ORIGINE", "ROLE_HIST_ORIGINE", "ROLE_CREATE_CLASSEDISPOSITIFMEDICAL", "ROLE_READ_CLASSEDISPOSITIFMEDICAL", "ROLE_UPDATE_CLASSEDISPOSITIFMEDICAL", "ROLE_DELETE_CLASSEDISPOSITIFMEDICAL", "ROLE_CREATE_TVA", "ROLE_READ_TVA", "ROLE_UPDATE_TVA", "ROLE_DELETE_TVA", "ROLE_SUPPRIMER_ACTES_NON_FACTURE", "ROLE_SUPPRIMER_ARTICLES_NON_FACTURE", "ROLE_MODIFIER_CATEGORIE_COMPTABLE_ADMISSION", "ROLE_CREATE_DEMANDEDISPENSATION_EBILLING", "ROLE_READ_DEMANDEDISPENSATION_EBILLING", "ROLE_UPDATE_DEMANDEDISPENSATION_EBILLING", "ROLE_DELETE_DEMANDEDISPENSATION_EBILLING", "ROLE_CONSULTER_PATIENTS_SORTANTS", "ROLE_VIEW_DEMANDEDISP_WORKLIST", "ROLE_VIEW_INCOMPLETE_ADMISSIONS", "ROLE_SUPPRIMER_ACTES_RECUPERER", "ROLE_SUPPRIMER_ACTES_RELEVE", "ROLE_CREATE_TYPEPRESCRIPTEUR", "ROLE_READ_TYPEPRESCRIPTEUR", "ROLE_UPDATE_TYPEPRESCRIPTEUR", "ROLE_DELETE_TYPEPRESCRIPTEUR", "ROLE_HIST_TYPEPRESCRIPTEUR", "ROLE_CREATE_PANELPRESTATION", "ROLE_READ_PANELPRESTATION", "ROLE_UPDATE_PANELPRESTATION", "ROLE_DELETE_PANELPRESTATION", "ROLE_HIST_PANELPRESTATION", "ROLE_CREATE_PANELPHARMACIE", "ROLE_READ_PANELPHARMACIE", "ROLE_UPDATE_PANELPHARMACIE", "ROLE_DELETE_PANELPHARMACIE", "ROLE_HIST_PANELPHARMACIE", "ROLE_CREATE_TAUXPOSSIBLE", "ROLE_READ_TAUXPOSSIBLE", "ROLE_DELETE_PROVINCE", "ROLE_CREATE_TYPEDOCUMENT", "ROLE_READ_TYPEDOCUMENT", "ROLE_UPDATE_TYPEDOCUMENT", "ROLE_DELETE_TYPEDOCUMENT", "ROLE_CREATE_LIENPARENTE", "ROLE_READ_LIENPARENTE", "ROLE_UPDATE_LIENPARENTE", "ROLE_DELETE_LIENPARENTE", "ROLE_CREATE_TYPEPRODUIT", "ROLE_READ_TYPEPRODUIT", "ROLE_UPDATE_TYPEPRODUIT", "ROLE_DELETE_TYPEPRODUIT", "ROLE_CREATE_CATEGORIEPARAMETRAGE", "ROLE_READ_CATEGORIEPARAMETRAGE", "ROLE_UPDATE_CATEGORIEPARAMETRAGE", "ROLE_DELETE_CATEGORIEPARAMETRAGE", "ROLE_CREATE_ACTE", "ROLE_READ_ACTE", "ROLE_UPDATE_ACTE", "ROLE_DELETE_ACTE", "ROLE_UPDATE_TAUXPOSSIBLE", "ROLE_DELETE_TAUXPOSSIBLE", "ROLE_CREATE_TYPEADMISSION", "ROLE_UPDATE_ACTIVITESOCIOPROF", "ROLE_DELETE_ACTIVITESOCIOPROF", "ROLE_CREATE_ACTIVITESOCIOPROF", "ROLE_READ_ACTIVITESOCIOPROF", "ROLE_CREATE_CLECONVENTION", "ROLE_READ_CLECONVENTION", "ROLE_UPDATE_CLECONVENTION", "ROLE_DELETE_CLECONVENTION", "ROLE_CREATE_CATEGORIECOMPTABLE", "ROLE_READ_CATEGORIECOMPTABLE", "ROLE_UPDATE_CATEGORIECOMPTABLE", "ROLE_DELETE_CATEGORIECOMPTABLE", "ROLE_CREATE_PROVINCE", "ROLE_READ_PROVINCE", "ROLE_UPDATE_PROVINCE", "ROLE_CREATE_NATURE", "ROLE_READ_NATURE", "ROLE_UPDATE_NATURE", "ROLE_DELETE_NATURE", "ROLE_CREATE_NATIONALITE", "ROLE_READ_NATIONALITE", "ROLE_UPDATE_NATIONALITE", "ROLE_DELETE_NATIONALITE", "ROLE_CREATE_ESSAICLINIQUE", "ROLE_READ_ESSAICLINIQUE", "ROLE_UPDATE_ESSAICLINIQUE", "ROLE_DELETE_ESSAICLINIQUE", "ROLE_CREATE_COMPTECOMPTABLE", "ROLE_READ_COMPTECOMPTABLE", "ROLE_UPDATE_COMPTECOMPTABLE", "ROLE_DELETE_COMPTECOMPTABLE", "ROLE_CREATE_COLLECTEURPAIEMENT", "ROLE_READ_COLLECTEURPAIEMENT", "ROLE_UPDATE_COLLECTEURPAIEMENT", "ROLE_DELETE_COLLECTEURPAIEMENT", "ROLE_CREATE_REGION", "ROLE_READ_REGION", "ROLE_UPDATE_REGION", "ROLE_DELETE_REGION", "ROLE_CREATE_CLASSETHERAPEUTIQUE", "ROLE_READ_CLASSETHERAPEUTIQUE", "ROLE_UPDATE_CLASSETHERAPEUTIQUE", "ROLE_DELETE_CLASSETHERAPEUTIQUE", "ROLE_READ_TYPEADMISSION", "ROLE_UPDATE_TYPEADMISSION", "ROLE_DELETE_TYPEADMISSION", "ROLE_CREATE_CIVILITE", "ROLE_READ_CIVILITE", "ROLE_UPDATE_CIVILITE", "ROLE_DELETE_CIVILITE", "ROLE_CREATE_ORGANISME", "ROLE_READ_ORGANISME", "ROLE_UPDATE_ORGANISME", "ROLE_DELETE_ORGANISME", "ROLE_CREATE_CONVENTION", "ROLE_READ_CONVENTION", "ROLE_UPDATE_CONVENTION", "ROLE_DELETE_CONVENTION", "ROLE_CREATE_PIECEIDENTITE", "ROLE_READ_PIECEIDENTITE", "ROLE_UPDATE_PIECEIDENTITE", "ROLE_DELETE_PIECEIDENTITE", "ROLE_CREATE_PAYS", "ROLE_READ_PAYS", "ROLE_UPDATE_PAYS", "ROLE_DELETE_PAYS", "ROLE_CREATE_FORMEPRODUIT", "ROLE_READ_FORMEPRODUIT", "ROLE_UPDATE_FORMEPRODUIT", "ROLE_DELETE_FORMEPRODUIT", "ROLE_CREATE_ORGANISMEPROVENANCE", "ROLE_READ_ORGANISMEPROVENANCE", "ROLE_UPDATE_ORGANISMEPROVENANCE", "ROLE_DELETE_ORGANISMEPROVENANCE", "ROLE_CREATE_UNITEFACTURATION", "ROLE_READ_UNITEFACTURATION", "ROLE_UPDATE_UNITEFACTURATION", "ROLE_DELETE_UNITEFACTURATION", "ROLE_CREATE_FAMILLEPRODUIT", "ROLE_READ_FAMILLEPRODUIT", "ROLE_UPDATE_FAMILLEPRODUIT", "ROLE_DELETE_FAMILLEPRODUIT", "ROLE_CREATE_LIEUNAISSANCE", "ROLE_READ_LIEUNAISSANCE", "ROLE_UPDATE_LIEUNAISSANCE", "ROLE_DELETE_LIEUNAISSANCE", "ROLE_CREATE_PRODUIT", "ROLE_READ_PRODUIT", "ROLE_UPDATE_PRODUIT", "ROLE_DELETE_PRODUIT", "ROLE_CREATE_CATEGORIESOCIOPROF", "ROLE_READ_CATEGORIESOCIOPROF", "ROLE_UPDATE_CATEGORIESOCIOPROF", "ROLE_DELETE_CATEGORIESOCIOPROF", "ROLE_CREATE_BANQUE", "ROLE_READ_BANQUE", "ROLE_UPDATE_BANQUE", "ROLE_DELETE_BANQUE", "ROLE_CREATE_SOUSFAMILLEPRODUIT", "ROLE_READ_SOUSFAMILLEPRODUIT", "ROLE_UPDATE_SOUSFAMILLEPRODUIT", "ROLE_DELETE_SOUSFAMILLEPRODUIT", "ROLE_CREATE_TAUXPEC", "ROLE_READ_TAUXPEC", "ROLE_UPDATE_TAUXPEC", "ROLE_DELETE_TAUXPEC", "ROLE_CREATE_DIAGNOSTIQUE", "ROLE_READ_DIAGNOSTIQUE", "ROLE_UPDATE_DIAGNOSTIQUE", "ROLE_DELETE_DIAGNOSTIQUE", "ROLE_CREATE_MOTIFADMISSION", "ROLE_READ_MOTIFADMISSION", "ROLE_UPDATE_MOTIFADMISSION", "ROLE_DELETE_MOTIFADMISSION", "ROLE_CREATE_DCI", "ROLE_READ_DCI", "ROLE_UPDATE_DCI", "ROLE_DELETE_DCI", "ROLE_CREATE_TYPESORTIE", "ROLE_READ_TYPESORTIE", "ROLE_UPDATE_TYPESORTIE", "ROLE_DELETE_TYPESORTIE", "ROLE_CREATE_FAMILLEPRESTATION", "ROLE_READ_FAMILLEPRESTATION", "ROLE_UPDATE_FAMILLEPRESTATION", "ROLE_DELETE_FAMILLEPRESTATION", "ROLE_CREATE_CATEGORIEDOCUMENT", "ROLE_READ_CATEGORIEDOCUMENT", "ROLE_UPDATE_CATEGORIEDOCUMENT", "ROLE_DELETE_CATEGORIEDOCUMENT", "ROLE_CREATE_LABORATOIREESSAI", "ROLE_READ_LABORATOIREESSAI", "ROLE_UPDATE_LABORATOIREESSAI", "ROLE_CREATE_ETABLISSEMENTPROVENANCE", "ROLE_READ_ETABLISSEMENTPROVENANCE", "ROLE_UPDATE_ETABLISSEMENTPROVENANCE", "ROLE_DELETE_ETABLISSEMENTPROVENANCE", "ROLE_MODIFIER_TAUX_PEC", "ROLE_CREATE_TYPESEJOUR", "ROLE_READ_TYPESEJOUR", "ROLE_UPDATE_TYPESEJOUR", "ROLE_DELETE_TYPESEJOUR", "ROLE_CREATE_REFSEJOUR", "ROLE_READ_REFSEJOUR", "ROLE_UPDATE_REFSEJOUR", "ROLE_DELETE_REFSEJOUR", "ROLE_READ_PARAMETRAGE", "ROLE_UPDATE_PARAMETRAGE", "ROLE_HIST_PATIENT", "UPDATE_PARTORG_PRODUIT_ADMISSION", "ROLE_DELETE_MOTIFANNULATION_ADMISSION", "ROLE_APPLIQUER_FORFAITS", "ROLE_DESAPPLIQUER_FORFAITS", "ROLE_SUPPRIMER_FORFAITS", "ROLE_READ_MOTIFREFUSRECEPTION", "ROLE_WRITE_MOTIFREFUSRECEPTION", "ROLE_READ_MOTIFANNULATIONENCAISSEMENT", "ROLE_WRITE_MOTIFANNULATIONENCAISSEMENT", "ROLE_CREATE_MOTIFANNULATION_ADMISSION", "ROLE_READ_MOTIFANNULATION_ADMISSION", "ROLE_UPDATE_MOTIFANNULATION_ADMISSION", "ROLE_CREATE_MOTIFANNULATION_FACTURE", "ROLE_READ_MOTIFANNULATION_FACTURE", "ROLE_UPDATE_MOTIFANNULATION_FACTURE", "ROLE_DELETE_MOTIFANNULATION_FACTURE", "ROLE_READ_SITUATIONMATRIMONIALE", "ROLE_UPDATE_SITUATIONMATRIMONIALE", "ROLE_READ_STATUTBENEFICIAIRE", "ROLE_UPDATE_STATUTBENEFICIAIRE", "ROLE_READ_MUTUALISTE", "ROLE_UPDATE_MUTUALISTE", "ROLE_HIST_SITUATIONMATRIMONIALE", "ROLE_HIST_STATUTBENEFICIAIRE", "ROLE_HIST_MUTUALISTE", "ROLE_DELETE_PEC", "ROLE_READ_CATEGORIEADMISSION", "ROLE_UPDATE_CATEGORIEADMISSION", "ROLE_READ_TYPEACCIDENT", "ROLE_UPDATE_TYPEACCIDENT", "ROLE_READ_COUVERTURE", "ROLE_UPDATE_COUVERTURE", "ROLE_GENERER_FACTURE_APPLIQUER_FORFAIT", "ROLE_CLOTURER_ADMISSION_GENERER_FACTURE_FORFAIT", "ROLE_GENERER_FACTURE", "ROLE_ETAT_ADMISSION_OPERATEUR", "ROLE_READ_DEMANDERECOUVREMENT", "ROLE_READ_REPONSERECOUVREMENT", "ROLE_CREATE_DEMANDERECOUVREMENT", "ROLE_ETAT_RECOUVREMENT", "ROLE_CREATE_REPONSERECOUVREMENT", "ROLE_EXPORT", "ROLE_CREATE_UNITEDOSAGE", "ROLE_READ_UNITEDOSAGE", "ROLE_UPDATE_UNITEDOSAGE", "ROLE_DELETE_UNITEDOSAGE", "ROLE_DELETE_LABORATOIREESSAI", "ROLE_CREATE_TARIFICATION", "ROLE_READ_TARIFICATION", "ROLE_UPDATE_TARIFICATION", "ROLE_DELETE_TARIFICATION", "ROLE_CREATE_VILLE", "ROLE_READ_VILLE", "ROLE_UPDATE_VILLE", "ROLE_DELETE_VILLE", "ROLE_CREATE_LETTRECLE", "ROLE_READ_LETTRECLE", "ROLE_UPDATE_LETTRECLE", "ROLE_DELETE_LETTRECLE", "ROLE_CREATE_GROUPEPRESTATION", "ROLE_READ_GROUPEPRESTATION", "ROLE_UPDATE_GROUPEPRESTATION", "ROLE_DELETE_GROUPEPRESTATION", "ROLE_RECHERCHE_TOUS_OPERATEURS", "ROLE_ETAT_PATIENT_PAR_CATEGORIE", "ROLE_PATIENTS_CREES_PAR_OPERATEUR", "ROLE_ETAT_PRESTATION_PAR_CATEGORIE", "ETAT_SAISIE_DES_PATIENTS_PAR_CATEGORIE", "ROLE_ETAT_ACTES", "ROLE_ETAT_ACTES_PATIENT", "ROLE_ETAT_ADMISSIONS_AVEC_RECEPISSE_NON_VALIDE", "ROLE_ETAT_BONS_INTERHOSPIT", "ROLE_ETAT_DES_CONVERSIONS_DE_CATEGORIE", "ETAT_GENERATIONS_DES_CARTES", "ROLE_ETAT_IMPUTATIONS_REGIE", "ROLE_ETAT_IMPUTATIONS_RECOUVREMENT", "ROLE_ETAT_MEDICAMENTS", "ROLE_ETAT_MEDICAMENTS_PATIENT", "ROLE_ETAT_SUIVI_REJETS", "ROLE_CREATE_ORIGINE", "ROLE_ETAT_ADMISSIONS_NON_FACTUREES", "ROLE_READ_ORIGINE", "ROLE_UPDATE_ORIGINE", "ROLE_DELETE_ORIGINE", "ROLE_HIST_ORIGINE", "ROLE_CREATE_CLASSEDISPOSITIFMEDICAL", "ROLE_READ_CLASSEDISPOSITIFMEDICAL", "ROLE_UPDATE_CLASSEDISPOSITIFMEDICAL", "ROLE_DELETE_CLASSEDISPOSITIFMEDICAL", "ROLE_CREATE_TVA", "ROLE_READ_TVA", "ROLE_UPDATE_TVA", "ROLE_DELETE_TVA", "ROLE_ETAT_RAPPROCHEMENT_IDENTITE", "ROLE_CREATE_TYPEPRESCRIPTEUR", "ROLE_READ_TYPEPRESCRIPTEUR", "ROLE_UPDATE_TYPEPRESCRIPTEUR", "ROLE_DELETE_TYPEPRESCRIPTEUR", "ROLE_HIST_TYPEPRESCRIPTEUR", "ROLE_CREATE_PANELPRESTATION", "ROLE_READ_PANELPRESTATION", "ROLE_UPDATE_PANELPRESTATION", "ROLE_DELETE_PANELPRESTATION", "ROLE_HIST_PANELPRESTATION", "ROLE_CREATE_PANELPHARMACIE", "ROLE_READ_PANELPHARMACIE", "ROLE_UPDATE_PANELPHARMACIE", "ROLE_DELETE_PANELPHARMACIE", "ROLE_HIST_PANELPHARMACIE", "ROLE_EDITION_BORDEREAU", "ROLE_CREATE_TAUXPOSSIBLE", "ROLE_READ_TAUXPOSSIBLE", "ROLE_DELETE_PROVINCE", "ROLE_CREATE_TYPEDOCUMENT", "ROLE_READ_TYPEDOCUMENT", "ROLE_UPDATE_TYPEDOCUMENT", "ROLE_DELETE_TYPEDOCUMENT", "ROLE_CREATE_LIENPARENTE", "ROLE_READ_LIENPARENTE", "ROLE_UPDATE_LIENPARENTE", "ROLE_DELETE_LIENPARENTE", "ROLE_CREATE_TYPEPRODUIT", "ROLE_READ_TYPEPRODUIT", "ROLE_UPDATE_TYPEPRODUIT", "ROLE_DELETE_TYPEPRODUIT", "ROLE_CREATE_CATEGORIEPARAMETRAGE", "ROLE_READ_CATEGORIEPARAMETRAGE", "ROLE_UPDATE_CATEGORIEPARAMETRAGE", "ROLE_DELETE_CATEGORIEPARAMETRAGE", "ROLE_CREATE_ACTE", "ROLE_READ_ACTE", "ROLE_UPDATE_ACTE", "ROLE_DELETE_ACTE", "ROLE_UPDATE_TAUXPOSSIBLE", "ROLE_DELETE_TAUXPOSSIBLE", "ROLE_CREATE_TYPEADMISSION", "ROLE_UPDATE_ACTIVITESOCIOPROF", "ROLE_DELETE_ACTIVITESOCIOPROF", "ROLE_CREATE_ACTIVITESOCIOPROF", "ROLE_READ_ACTIVITESOCIOPROF", "ROLE_CREATE_CLECONVENTION", "ROLE_READ_CLECONVENTION", "ROLE_UPDATE_CLECONVENTION", "ROLE_DELETE_CLECONVENTION", "ROLE_CREATE_CATEGORIECOMPTABLE", "ROLE_READ_CATEGORIECOMPTABLE", "ROLE_UPDATE_CATEGORIECOMPTABLE", "ROLE_DELETE_CATEGORIECOMPTABLE", "ROLE_CREATE_PROVINCE", "ROLE_READ_PROVINCE", "ROLE_UPDATE_PROVINCE", "ROLE_CREATE_NATURE", "ROLE_READ_NATURE", "ROLE_UPDATE_NATURE", "ROLE_DELETE_NATURE", "ROLE_CREATE_NATIONALITE", "ROLE_READ_NATIONALITE", "ROLE_UPDATE_NATIONALITE", "ROLE_DELETE_NATIONALITE", "ROLE_CREATE_ESSAICLINIQUE", "ROLE_READ_ESSAICLINIQUE", "ROLE_UPDATE_ESSAICLINIQUE", "ROLE_DELETE_ESSAICLINIQUE", "ROLE_CREATE_COMPTECOMPTABLE", "ROLE_READ_COMPTECOMPTABLE", "ROLE_UPDATE_COMPTECOMPTABLE", "ROLE_DELETE_COMPTECOMPTABLE", "ROLE_CREATE_COLLECTEURPAIEMENT", "ROLE_READ_COLLECTEURPAIEMENT", "ROLE_UPDATE_COLLECTEURPAIEMENT", "ROLE_DELETE_COLLECTEURPAIEMENT", "ROLE_CREATE_REGION", "ROLE_READ_REGION", "ROLE_UPDATE_REGION", "ROLE_DELETE_REGION", "ROLE_CREATE_CLASSETHERAPEUTIQUE", "ROLE_READ_CLASSETHERAPEUTIQUE", "ROLE_UPDATE_CLASSETHERAPEUTIQUE", "ROLE_DELETE_CLASSETHERAPEUTIQUE", "ROLE_READ_TYPEADMISSION", "ROLE_UPDATE_TYPEADMISSION", "ROLE_DELETE_TYPEADMISSION", "ROLE_CREATE_CIVILITE", "ROLE_READ_CIVILITE", "ROLE_UPDATE_CIVILITE", "ROLE_DELETE_CIVILITE", "ROLE_CREATE_ORGANISME", "ROLE_READ_ORGANISME", "ROLE_UPDATE_ORGANISME", "ROLE_DELETE_ORGANISME", "ROLE_CREATE_CONVENTION", "ROLE_READ_CONVENTION", "ROLE_UPDATE_CONVENTION", "ROLE_DELETE_CONVENTION", "ROLE_CREATE_PIECEIDENTITE", "ROLE_READ_PIECEIDENTITE", "ROLE_UPDATE_PIECEIDENTITE", "ROLE_DELETE_PIECEIDENTITE", "ROLE_CREATE_PAYS", "ROLE_READ_PAYS", "ROLE_UPDATE_PAYS", "ROLE_DELETE_PAYS", "ROLE_CREATE_FORMEPRODUIT", "ROLE_READ_FORMEPRODUIT", "ROLE_UPDATE_FORMEPRODUIT", "ROLE_DELETE_FORMEPRODUIT", "ROLE_CREATE_ORGANISMEPROVENANCE", "ROLE_READ_ORGANISMEPROVENANCE", "ROLE_UPDATE_ORGANISMEPROVENANCE", "ROLE_DELETE_ORGANISMEPROVENANCE", "ROLE_CREATE_UNITEFACTURATION", "ROLE_READ_UNITEFACTURATION", "ROLE_UPDATE_UNITEFACTURATION", "ROLE_DELETE_UNITEFACTURATION", "ROLE_CREATE_FAMILLEPRODUIT", "ROLE_READ_FAMILLEPRODUIT", "ROLE_UPDATE_FAMILLEPRODUIT", "ROLE_DELETE_FAMILLEPRODUIT", "ROLE_CREATE_LIEUNAISSANCE", "ROLE_READ_LIEUNAISSANCE", "ROLE_UPDATE_LIEUNAISSANCE", "ROLE_DELETE_LIEUNAISSANCE", "ROLE_CREATE_PRODUIT", "ROLE_READ_PRODUIT", "ROLE_UPDATE_PRODUIT", "ROLE_DELETE_PRODUIT", "ROLE_CREATE_CATEGORIESOCIOPROF", "ROLE_READ_CATEGORIESOCIOPROF", "ROLE_UPDATE_CATEGORIESOCIOPROF", "ROLE_DELETE_CATEGORIESOCIOPROF", "ROLE_CREATE_BANQUE", "ROLE_READ_BANQUE", "ROLE_UPDATE_BANQUE", "ROLE_DELETE_BANQUE", "ROLE_CREATE_SOUSFAMILLEPRODUIT", "ROLE_READ_SOUSFAMILLEPRODUIT", "ROLE_UPDATE_SOUSFAMILLEPRODUIT", "ROLE_DELETE_SOUSFAMILLEPRODUIT", "ROLE_CREATE_TAUXPEC", "ROLE_READ_TAUXPEC", "ROLE_UPDATE_TAUXPEC", "ROLE_DELETE_TAUXPEC", "ROLE_CREATE_DIAGNOSTIQUE", "ROLE_READ_DIAGNOSTIQUE", "ROLE_UPDATE_DIAGNOSTIQUE", "ROLE_DELETE_DIAGNOSTIQUE", "ROLE_CREATE_MOTIFADMISSION", "ROLE_READ_MOTIFADMISSION", "ROLE_UPDATE_MOTIFADMISSION", "ROLE_DELETE_MOTIFADMISSION", "ROLE_CREATE_DCI", "ROLE_READ_DCI", "ROLE_UPDATE_DCI", "ROLE_DELETE_DCI", "ROLE_CREATE_TYPESORTIE", "ROLE_READ_TYPESORTIE", "ROLE_UPDATE_TYPESORTIE", "ROLE_DELETE_TYPESORTIE", "ROLE_CREATE_FAMILLEPRESTATION", "ROLE_READ_FAMILLEPRESTATION", "ROLE_UPDATE_FAMILLEPRESTATION", "ROLE_DELETE_FAMILLEPRESTATION", "ROLE_CREATE_CATEGORIEDOCUMENT", "ROLE_READ_CATEGORIEDOCUMENT", "ROLE_UPDATE_CATEGORIEDOCUMENT", "ROLE_DELETE_CATEGORIEDOCUMENT", "ROLE_CREATE_LABORATOIREESSAI", "ROLE_READ_LABORATOIREESSAI", "ROLE_UPDATE_LABORATOIREESSAI", "ROLE_CREATE_ETABLISSEMENTPROVENANCE", "ROLE_READ_ETABLISSEMENTPROVENANCE", "ROLE_UPDATE_ETABLISSEMENTPROVENANCE", "ROLE_DELETE_ETABLISSEMENTPROVENANCE", "ROLE_CREATE_TYPESEJOUR", "ROLE_READ_TYPESEJOUR", "ROLE_UPDATE_TYPESEJOUR", "ROLE_DELETE_TYPESEJOUR", "ROLE_CREATE_REFSEJOUR", "ROLE_READ_REFSEJOUR", "ROLE_UPDATE_REFSEJOUR", "ROLE_DELETE_REFSEJOUR", "ROLE_READ_PARAMETRAGE", "ROLE_UPDATE_PARAMETRAGE", "ROLE_CREATE_DEMANDERECOUVREMENT_PATIENT", "ROLE_READ_DEMANDERECOUVREMENT_PATIENT", "ROLE_UPDATE_DEMANDERECOUVREMENT_PATIENT", "ROLE_DELETE_DEMANDERECOUVREMENT_PATIENT", "ROLE_HIST_DEMANDERECOUVREMENT_PATIENT", "ROLE_DELETE_MOTIFANNULATION_ADMISSION", "ROLE_READ_MOTIFREFUSRECEPTION", "ROLE_WRITE_MOTIFREFUSRECEPTION", "ROLE_READ_MOTIFANNULATIONENCAISSEMENT", "ROLE_WRITE_MOTIFANNULATIONENCAISSEMENT", "ROLE_CREATE_MOTIFANNULATION_ADMISSION", "ROLE_READ_MOTIFANNULATION_ADMISSION", "ROLE_UPDATE_MOTIFANNULATION_ADMISSION", "ROLE_CREATE_MOTIFANNULATION_FACTURE", "ROLE_READ_MOTIFANNULATION_FACTURE", "ROLE_UPDATE_MOTIFANNULATION_FACTURE", "ROLE_DELETE_MOTIFANNULATION_FACTURE", "ROLE_READ_SITUATIONMATRIMONIALE", "ROLE_UPDATE_SITUATIONMATRIMONIALE", "ROLE_READ_STATUTBENEFICIAIRE", "ROLE_UPDATE_STATUTBENEFICIAIRE", "ROLE_READ_MUTUALISTE", "ROLE_UPDATE_MUTUALISTE", "ROLE_HIST_SITUATIONMATRIMONIALE", "ROLE_HIST_STATUTBENEFICIAIRE", "ROLE_HIST_MUTUALISTE", "ROLE_READ_CATEGORIEADMISSION", "ROLE_UPDATE_CATEGORIEADMISSION", "ROLE_READ_TYPEACCIDENT", "ROLE_UPDATE_TYPEACCIDENT", "ROLE_READ_COUVERTURE", "ROLE_UPDATE_COUVERTURE", "ROLE_UPDATE_MOTIFREJET", "ROLE_READ_MOTIFREJET", "ROLE_ENVOYER_FACTURE_CNSS", "ROLE_UPDATE_CATAGORIEMOTIFREJET", "ROLE_READ_CATAGORIEMOTIFREJET" ],
    "categorieRoles" : [ "ALLERGIE","ACTIVITESOCIOPROF", "AUTRES", "NATURE", "REFERENTIEL_DES_SEJOURS", "MOTIFANNULATION_FACTURE", "MOTIFANNULATIONENCAISSEMENT", "REFERENTIEL_ADMINISTRATIF", "STATUT_BENEFICIAIRE", "MUTUALISTE", "ORGANISME", "COMPTECOMPTABLE", "DEMANDEDISPENSATION_EBILLING", "CAISSE", "TVA_EBILLING", "DEVIS", "REFERENTIEL_MEDICO_ADMINISTRATIF", "LIEUNAISSANCE", "CATEGORIEADMISSION", "CONVENTION", "FACTURATION", "FORMEPRODUIT", "GESTION_DES_ADMISSIONS", "PANELPHARMACIE", "TAUXPEC", "TYPEADMISSION", "UNITEFACTURATION", "CATEGORIEREFERENTIELRECOUVREMENT", "REFERENTIEL_ORGANISATIONEL", "TYPESEJOUR", "ORIGINE", "TYPESORTIE", "SITUATION_MATRIMONIALE", "REFERENTIEL_DE_LA_PHARMACIE", "FAMILLEPRODUIT", "PARAMETRAGE", "LETTRECLE", "VILLE", "DCI", "MOTIFREFUSRECEPTION", "CLASSEDISPOSITIFMEDICAL_EBILLING", "TYPEPRESCRIPTEUR", "ETABLISSEMENTPROVENANCE", "DIAGNOSTIQUE", "PARAMETRAGE_CONF", "UNITEDOSAGE", "REFERENTIEL_DES_ACTES", "MOTIFREJET", "TABLEAUX_BORD", "COUVERTURE", "ENCAISSEMENT", "TYPEACCIDENT", "LABORATOIREESSAI", "CLASSETHERAPEUTIQUE", "VERSEMENT", "TYPEDOCUMENT", "REFERENTIEL_DEMOGRAPHIQUE", "ESSAICLINIQUE", "PANELPRESTATION", "CATEGORIEPARAMETRAGE", "LIENPARENTE", "PRODUIT", "SOUSFAMILLEPRODUIT", "PIECEIDENTITE", "REFERENTIEL_REGIE", "GESTION_DE_LA_REGIE", "CATEGORIEDOCUMENT", "CATAGORIEMOTIFREJET", "REFERENTIEL_GESTION_DES_PATIENTS", "FAMILLEPRESTATION", "TYPEPRODUIT", "ORGANISMEPROVENANCE", "ADMISSION", "CIVILITE", "REGION", "GROUPEPRESTATION", "ACTE", "CATEGORIESOCIOPROF", "GESTION_DES_PATIENTS", "MOTIFADMISSION", "GESTION_DU_RECOUVREMENT", "NATIONALITE", "CAISSIER", "PAYS", "COLLECTEURPAIEMENT", "PROVINCE", "CATEGORIECOMPTABLE", "DOSSIER_ADMINISTRATIF", "GESTION_DES_PRISES_EN_CHARGE", "BANQUE", "MOTIFANNULATION_ADMISSION", "REFSEJOUR" ],
    "codeCategoriePersonnel" : null,
    "libelleCategoriePersonnel" : null,
    "specialite" : null,
    "personnel" : {
      "id" : 496,
      "label" : "496",
      "createdBy" : "",
      "updatedBy" : "",
      "actif" : false
    },
    "nomCompletPersonnel" : null,
    "servicessList" : [ ],
    "uniteServ" : {
      "id" : 165,
      "label" : "165",
      "createdBy" : "",
      "updatedBy" : "",
      "code" : "Hospitalisation_chir_pédiatrie_uro_visc",
      "intitule" : "Hospitalisation",
      "actif" : false,
      "typeEntite" : {
        "name" : "SERVICE",
        "displayText" : "Service"
      },
      "bulletinHospit" : false
    },
    "unites" : [ ],
    "inactiveSessionTimeout" : null,
    "medecin" : false,
    "infirmier" : false,
    "uniteHospit" : null
  };
});


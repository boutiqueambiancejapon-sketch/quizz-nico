/* ============================================================
   HLT Academy — Contenu pédagogique
   Source : Livret HLT I (Fascicule I — Conducteur de train SNCB)
   Chapitres 1, 2 et 3 — Avis B-TO 2026
   ============================================================ */

/* ---- styles inline réutilisés dans le HTML des cours ---- */
const P  = 'margin:0 0 13px;';
const UL = 'margin:6px 0 14px;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:8px;';
const LIb = 'position:relative;padding-left:22px;';   // li avec puce custom (gérée en CSS ::before via classe? non) -> on met une puce inline
const li = (t) => `<li style="${LIb}"><span style="position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:currentColor;opacity:.4"></span>${t}</li>`;
const note = (t) => `<div style="background:#F2EEE4;border-left:3px solid currentColor;border-radius:0 10px 10px 0;padding:12px 15px;margin:6px 0 15px;font-size:.95em">${t}</div>`;
const sub = (t) => `<div style="font-weight:700;margin:18px 0 8px;font-size:1.02em">${t}</div>`;

export const COURSE = [
  {
    ch: 1,
    titre: "Structure des chemins de fer belges",
    accent: "#2B5C8A",
    resume: "Qui fait quoi sur le rail belge : le gestionnaire d'infrastructure Infrabel, l'entreprise ferroviaire SNCB, et la place du conducteur de train dans cet écosystème.",
    minutes: 22,
    sections: [
      { t: "Le paysage ferroviaire belge", h:
        `<p style="${P}">Le transport ferroviaire belge repose sur deux types d'acteurs :</p>
         <ul style="${UL}">
         ${li("un <strong>gestionnaire de l'infrastructure (GI)</strong>, chargé de la gestion et de la maintenance du réseau. <strong>Infrabel</strong> remplit ce rôle pour la quasi-totalité du réseau belge (« réseau Infrabel ») ;")}
         ${li("plusieurs <strong>entreprises ferroviaires (EF)</strong>, qui transportent voyageurs ou marchandises selon leur certificat de sécurité. On les appelle aussi « <strong>utilisateurs de l'infrastructure (UI)</strong> ». La <strong>SNCB</strong> est une EF.")}
         </ul>
         ${sub("Les 5 Areas (= districts)")}
         <p style="${P}">Le réseau Infrabel est divisé en régions appelées <strong>Areas</strong>, qui correspondent aux districts :</p>
         <ul style="${UL}">
         ${li("Area <strong>NW</strong> (Nord-Ouest)")}${li("Area <strong>NO</strong> (Nord-Est)")}${li("Area <strong>CE</strong> (Centre)")}${li("Area <strong>SE</strong> (Sud-Est)")}${li("Area <strong>SO</strong> (Sud-Ouest)")}
         </ul>` },
      { t: "Infrabel : le gestionnaire de l'infrastructure", h:
        `<p style="${P}">Infrabel comprend notamment deux directions clés :</p>
         <ul style="${UL}">
         ${li("<strong>I-CBE</strong> (Customer &amp; Business Excellence) : surveillance de la sécurité d'exploitation, attribution des sillons prévus, gestion de la ponctualité, coordination des travaux.")}
         ${li("<strong>I-O</strong> (Operation) : régulation du trafic, attribution des sillons imprévus (temps réel), publication des prescriptions de sécurité nationales, gestion des caténaires et de l'alimentation électrique, maintenance et modernisation de l'infrastructure.")}
         </ul>
         ${note("Le personnel employé par Infrabel est appelé « <strong>personnel Infrabel</strong> ».")}` },
      { t: "I-O : la gestion des trains sur le terrain", h:
        `<p style="${P}">La gestion des trains est assurée par les <strong>contrôleurs des circulations</strong>, répartis en niveaux selon leurs compétences. Le terme générique est « <strong>agent du mouvement</strong> ».</p>
         ${note("L'agent du mouvement est reconnaissable à son <strong>képi bleu</strong> et à son <strong>gilet fluorescent</strong> portant le logo Infrabel.")}
         ${sub("En cas d'incident")}
         <p style="${P}">Un <strong>Leader Infrabel</strong> intervient comme <strong>unique représentant (SPOC, Single Point Of Contact)</strong> pour les services présents sur place. Il est reconnaissable à son <strong>brassard orange</strong> « Leader Infrabel ». Pour les événements importants, il peut être assisté d'un ou plusieurs <strong>Adjoints Leader Infrabel</strong>, sous son autorité directe.</p>` },
      { t: "Central Dispatch & poste de signalisation", h:
        `${sub("Central Dispatch (CD / OCT / VCO)")}
         <p style="${P}">Organe national qui appuie les postes de signalisation pour coordonner le trafic en cas de perturbation. Il réunit :</p>
         <ul style="${UL}">
         ${li("<strong>Traffic Officer (TO)</strong> — gestion temps réel du CD ;")}
         ${li("<strong>Real Time Quality Officer (RT QO)</strong> — dossiers de retards ;")}
         ${li("<strong>Information Providers (IP)</strong> — collecte/diffusion d'infos sur incidents et perturbations ;")}
         ${li("<strong>Central Dispatchers (CDr)</strong> — gestion des incidents majeurs ;")}
         ${li("<strong>Train Path Managers (TPM)</strong> — attribution des sillons en temps réel ;")}
         ${li("<strong>Freight Supervisors (FSv)</strong> — suivi du trafic marchandises ;")}
         ${li("<strong>Realtime Analysts (RTA)</strong> — analyse des retards en temps réel.")}
         </ul>
         ${note("Le CD est hébergé à Bruxelles avec le <strong>RIOC</strong> (enregistrement des irrégularités à l'infrastructure et suivi des réparations).")}
         ${sub("Poste de signalisation")}
         <ul style="${UL}">
         ${li("<strong>Traffic Officer</strong> — organisation générale du poste ;")}
         ${li("<strong>Safety Supervisor</strong> — coordination des Safety Controllers ;")}
         ${li("<strong>Traffic Supervisor</strong> — coordination des Traffic Controllers ;")}
         ${li("<strong>Safety Controller</strong> — mesures de sécurité dans une zone définie ;")}
         ${li("<strong>Traffic Controller</strong> — régulation du trafic dans une zone définie.")}
         </ul>
         <p style="${P}">Chaque Area dispose d'un <strong>répartiteur courant-traction (répartiteur CT)</strong> : il gère sous-stations et postes de sectionnement et peut couper l'alimentation des caténaires à la demande du Safety Controller, d'un conducteur, ou de sa propre initiative.</p>` },
      { t: "La SNCB : l'entreprise ferroviaire", h:
        `<p style="${P}">La SNCB est l'opérateur historique du réseau belge (transport national de voyageurs + certaines relations internationales). Un <strong>contrat de gestion</strong> avec le gouvernement fédéral détermine ses prestations ; sur cette base elle établit un <strong>plan de transport</strong> avec le GI.</p>
         ${sub("Les directions de la SNCB")}
         <ul style="${UL}">
         ${li("<strong>B-TO</strong> — Transport Operations (dont B-TO.1/2/3 : personnel de conduite ; B-TO.4 : gestion opérationnelle du trafic) ;")}
         ${li("<strong>B-CS</strong> — Customer Services (dont B-CS.5 : accompagnateurs de train) ;")}
         ${li("<strong>B-PT</strong> — Passenger Transport &amp; Security (accueil, sécurité, plan de transport, info voyageurs) ;")}
         ${li("<strong>B-TC</strong> — Technics (maintenance du matériel roulant, études techniques, freinage) ;")}
         ${li("<strong>B-ST</strong> — Stations (gestion des gares).")}
         </ul>` },
      { t: "Le conducteur de train (CT)", h:
        `<p style="${P}">Le conducteur fait partie du <strong>personnel de sécurité</strong> réalisant des <strong>tâches critiques de sécurité</strong> (impact direct sur la sécurité ferroviaire). Il est légalement habilité à conduire de façon <strong>autonome, responsable et sécuritaire</strong>.</p>
         ${sub("Deux catégories")}
         <ul style="${UL}">
         ${li("<strong>Conducteur de manœuvre</strong> : mouvements de manœuvre et trains de voyageurs non commerciaux. Limité à <strong>25 km</strong> autour de l'installation et à <strong>60 km/h</strong>.")}
         ${li("<strong>Conducteur de train</strong> : manœuvre avec matériel voyageurs + trains commerciaux et non commerciaux.")}
         </ul>
         ${note("Un conducteur de manœuvre peut évacuer un train de voyageurs commercial s'il est accompagné d'un conducteur de train B1 ; il ne dépasse alors pas 60 km/h et doit être piloté sans la connaissance de ligne.")}
         ${sub("Encadrement")}
         <p style="${P}">Senior Manager District Transport Operations, Manager Competence &amp; Performance, Manager Drivers, Coordinators/Specialists/Experts, <strong>Instructors Drivers</strong> (et Instructor Team Lead Driver), Dispatchers Rolling Stock, Training Officers, Real-Time Specialists Train Drivers.</p>
         <p style="${P}">Le <strong>groupe instruction-traction</strong> assure aussi des fonctions spécifiques : <strong>API</strong> (assistant post-incident, après un événement traumatisant — ex. SPAD) et <strong>FI</strong> (first investigator, lors d'un SPAD, d'une circulation anormale, du non-respect d'une vitesse, d'une dérive).</p>` },
      { t: "Lieu de travail & contacts du conducteur", h:
        `<p style="${P}">Le conducteur dépend d'un <strong>dépôt</strong> : il y prend et termine son service, prélève des formulaires (IE.1, IN.21, E360, TC612…) et remet ses documents (ex. M510bis). Le local de prise de service est équipé de <strong>2 écrans DISCO</strong> (Driver Information and on Screen COmmunication).</p>
         ${note("Les dépôts sont regroupés en <strong>zones (13)</strong>, elles-mêmes rattachées aux <strong>5 districts</strong> (NO, NW, SO, SE, CE).")}
         ${sub("Services régulièrement en contact")}
         <ul style="${UL}">
         ${li("<strong>Permanence conduite</strong> — gestion temps réel des conducteurs (remplacements, services non planifiés) ;")}
         ${li("<strong>HR@YourService</strong> — RH (primes, mutations, congés, régime de travail) ;")}
         ${li("<strong>Gestion du matériel roulant</strong> — répartiteurs MR (B-TO.1) ;")}
         ${li("<strong>Helpdesk</strong> (B-TC) / <strong>Hotline</strong> (hors B-TC) — assistance technique ;")}
         ${li("<strong>Infodesk</strong> (B-TC) — dérangements et avaries secondaires ;")}
         ${li("<strong>CCT</strong> (Coordination Centrale Traction), hébergée au <strong>RCC</strong> ;")}
         ${li("<strong>Personnel d'accompagnement</strong> (chef de bord / agent contrôle), képi bleu logo SNCB ;")}
         ${li("<strong>Gestionnaire local de l'installation SNCB</strong> ;")}
         ${li("<strong>Leader SNCB</strong> — SPOC SNCB sur incident, sous l'autorité du Leader Infrabel.")}
         </ul>` }
    ]
  },
  {
    ch: 2,
    titre: "Connaissances du conducteur",
    accent: "#1C7C4A",
    resume: "Du recrutement au maintien des compétences : formation fondamentale, licence et attestation complémentaire, connaissance de ligne et du matériel, pilotage et séries.",
    minutes: 26,
    sections: [
      { t: "Devenir conducteur : la formation fondamentale", h:
        `<p style="${P}">Un candidat-conducteur est recruté après évaluation positive d'un <strong>entretien d'embauche</strong>, d'une <strong>épreuve psychotechnique</strong> et d'une <strong>visite médicale</strong>.</p>
         ${sub("Deux volets de formation")}
         <ul style="${UL}">
         ${li("une <strong>formation générale de 18 jours</strong> → <strong>licence</strong> de conducteur ;")}
         ${li("une <strong>formation spécifique</strong> → <strong>attestation complémentaire</strong>.")}
         </ul>
         <p style="${P}">Matières de la formation spécifique : signalisation et circulation, connaissance de ligne et infrastructure, sécurité, communication, organisation du travail, qualités et attitudes, frein, matériel roulant.</p>
         ${sub("Outils")}
         <p style="${P}">Cours magistraux avec le cursus <strong>ELAN</strong>, simulateur <strong>Simpact</strong>, simulateur <strong>Full Scale HLE13</strong>, exercices pratiques (formateur) et parcours pratiques (moniteur). L'<strong>examen final</strong> comporte une épreuve pratique, théorique et sur simulateur.</p>` },
      { t: "Candidat-conducteur & moniteur", h:
        `${sub("Le candidat-conducteur")}
         <p style="${P}">Il développe les compétences du métier dans un temps défini, fait preuve d'une attitude positive et constructive, met en pratique les acquis (compléter la fiche M355, le rapport M510e/M510, communiquer avec l'agent du mouvement). Le support <strong>ELAN</strong> est disponible sur l'eDrive-app. Il tient à jour son <strong>guide de pratique</strong>, présenté au président de jury à chaque examen.</p>
         ${note("En cas d'échec, tout le matériel et les documents sont rendus à l'encadrement.")}
         ${sub("Le moniteur")}
         <p style="${P}">Il permet au candidat d'acquérir les compétences pratiques (prise de service, préparation, essais, conduite, dépannage, rapports). Il laisse de préférence conduire le candidat tout en pouvant intervenir à temps, et complète <strong>au moins une fiche d'évaluation par semaine</strong>.</p>` },
      { t: "Maintenir ses connaissances", h:
        `<ul style="${UL}">
         ${li("<strong>Visite médicale</strong> chaque année ; examen approfondi tous les <strong>3 ans</strong> (annuel dès <strong>55 ans</strong>) ; <strong>tests psychotechniques tous les 10 ans</strong>.")}
         ${li("<strong>Accompagnement</strong> au moins <strong>1×/an</strong> par le personnel de maîtrise instruction-traction.")}
         ${li("<strong>Formation permanente</strong> chaque <strong>semestre</strong> (sécurité/réglementation, linguistique, infrastructure et matériel).")}
         ${li("<strong>Bilan périodique</strong> annuel (Instructor Team Lead Drivers), entretien de <strong>max. 60 minutes</strong>.")}
         </ul>
         ${sub("Les examens")}
         <ul style="${UL}">
         ${li("<strong>Extension</strong> des connaissances (examen complémentaire) lors d'un élargissement infrastructure / matériel / catégorie / langue ;")}
         ${li("<strong>Connaissances spécifiques</strong> : si bilan non satisfaisant, monitoring théorique non atteint, conduite interrompue &gt; 6 mois, faute grave… (théorie + pratique, ~1 h) ;")}
         ${li("<strong>Connaissances linguistiques</strong> : niveau requis <strong>B1</strong> depuis le 01/01/2016, questions types validées par le SSICF.")}
         </ul>
         ${note("Si le bilan n'est pas satisfaisant, le conducteur n'est pas autorisé à effectuer des tâches critiques de sécurité tant que l'examen spécifique n'a pas eu lieu.")}` },
      { t: "Licence & attestation complémentaire", h:
        `<ul style="${UL}">
         ${li("<strong>Licence</strong> (UE) : atteste la réussite de la formation générale, <strong>propriété du titulaire</strong>, valable <strong>10 ans</strong>, tant que les examens médicaux/psycho sont satisfaits.")}
         ${li("<strong>Attestation complémentaire</strong> : délivrée par l'<strong>UI</strong> employeuse, valable <strong>3 ans</strong>, reste propriété de l'UI. Une attestation par réseau connu, et par UI si l'on roule pour plusieurs.")}
         </ul>
         ${sub("Catégories de conduite (rubrique 3)")}
         <ul style="${UL}">
         ${li("<strong>A1</strong> : locomotives de manœuvre")}${li("<strong>A4</strong> : autres locomotives de manœuvre")}${li("<strong>B1</strong> : transport de personnes")}${li("<strong>B2</strong> : transport de marchandises")}
         </ul>
         <p style="${P}">Infos additionnelles (rubrique 4) : Connaissance <strong>TVM</strong>, <strong>ETCS</strong> 1/2 LAT/REP/LS, trains de relevage, évacuation PBA/PBKA, E300/E320, parcours d'essais… Langues (rubrique 5) : <strong>F / N / E / D</strong>. Suivent restrictions, matériel roulant et infrastructure.</p>
         ${sub("Interruption des tâches critiques de sécurité")}
         <p style="${P}">Possible si le conducteur constitue un risque (ex. alcool <strong>0,2 ‰</strong>, stupéfiants) ou si ses compétences sont mises en doute. Interruption par le GI, le FI, l'EF (retrait de l'attestation) ou le SSICF (retrait de la licence). Contrôles possibles par l'encadrement, le GI, le <strong>SSICF</strong>, l'enquêteur accidents, la police.</p>` },
      { t: "Connaissance de l'infrastructure (ligne)", h:
        `<p style="${P}">Pour circuler sur une ligne/gare, le conducteur doit en avoir la <strong>connaissance de ligne</strong> : voies principales et de garage, points d'arrêt, itinéraires en gare, voies de manœuvre, itinéraires de déviation et dispositions particulières.</p>
         ${sub("Étude de ligne en 2 phases")}
         <ul style="${UL}">
         ${li("<strong>Phase 1 (au dépôt)</strong> : étude de la carte du réseau, de la carte « <strong>SPAD-Hotspots</strong> » (icône INF), du <strong>PSS</strong>, des itinéraires de déviation et des fiches d'information.")}
         ${li("<strong>Phase 2 (terrain / film de ligne)</strong> : ordre des gares, points d'arrêt, bifurcations, tunnels, changements de voie, vitesses de référence et zones à vitesse réduite.")}
         </ul>
         ${note("Évaluation : le conducteur doit obtenir au moins <strong>60 %</strong> et n'avoir commis aucune faute grave contre la sécurité.")}
         ${sub("Maintien")}
         <p style="${P}">La connaissance reste acquise si le conducteur circule régulièrement. Plus de parcours depuis <strong>10 mois</strong> → notification au <strong>rapport M510e</strong>. Un parcours réalisé dans les <strong>12 mois</strong> prolonge la connaissance ; sinon une nouvelle évaluation est nécessaire.</p>` },
      { t: "Connaissance du matériel roulant", h:
        `<p style="${P}">Le <strong>matériel roulant</strong> regroupe les véhicules remorqués (voitures, wagons) et les <strong>engins moteurs</strong> :</p>
         <ul style="${UL}">
         ${li("locomotives (HL) : électriques <strong>HLE</strong>, diesel <strong>HLD/HLR</strong> ;")}
         ${li("éléments automoteurs : <strong>TGV</strong>, automotrices électriques <strong>AM</strong>, autorails diesel <strong>AR</strong> ;")}
         ${li("voiture pilote <strong>HVR(m)</strong> d'une rame réversible (<strong>RR</strong>) ;")}
         ${li("engins d'entretien/mesure et véhicules légers (tracteurs, draisines, rail-route).")}
         </ul>
         ${sub("Deux formations matériel")}
         <ul style="${UL}">
         ${li("<strong>Formation complète</strong> : conduite, fonctionnement et dépannage de l'engin ;")}
         ${li("<strong>Protection du matériel roulant</strong> : mesures de protection de l'engin stationné (gel, neige).")}
         </ul>
         ${note("Évaluation à <strong>60 %</strong> sans faute grave → le type est ajouté à l'attestation. Sans conduite depuis <strong>10 mois</strong>, notification au M510e ; maintien éventuel par préparation + parcours dans les 2 mois.")}` },
      { t: "Pilotage & séries", h:
        `${sub("Pilotage")}
         <p style="${P}">Le conducteur est <strong>piloté</strong> s'il ne dispose pas d'une attestation valable pour le réseau, ou de la connaissance de ligne requise. Le <strong>pilote</strong> possède une attestation valable, connaît suffisamment la langue du conducteur piloté et se tient à ses côtés pendant la conduite. Le GI est informé préalablement à chaque appel à un pilote.</p>
         ${sub("Séries")}
         <p style="${P}">Pour planifier ses prestations à long terme, un conducteur peut être intégré dans une <strong>série</strong> (grille où <strong>R1 = lundi … R7 = dimanche</strong>). Deux formes :</p>
         <ul style="${UL}">
         ${li("<strong>Alternement journalier</strong> : ligne suivante chaque jour ;")}
         ${li("<strong>Alternement hebdomadaire</strong> : même ligne sur la semaine, ligne suivante la semaine d'après.")}
         </ul>
         <p style="${P}">Un conducteur <strong>hors-série</strong> prend connaissance de ses prestations au jour le jour. Les conducteurs non affectés à une série forment le <strong>cadre flottant</strong>.</p>` }
    ]
  },
  {
    ch: 3,
    titre: "De la prise de service à la fin de service",
    accent: "#C0822E",
    resume: "Le déroulé concret d'une prestation : prescriptions et eDrive, prise de service et rapports, comportement pendant le service, situations exceptionnelles, accès en cabine et fin de service.",
    minutes: 30,
    sections: [
      { t: "Les prescriptions & l'appareil eDrive", h:
        `<p style="${P}">Le conducteur dispose de ses prescriptions sur une tablette appelée <strong>eDrive</strong>. Dans l'<strong>eDrive-app</strong>, l'icône <strong>Bibliothèque</strong> donne accès aux « <strong>Communications</strong> » (nouveautés/modifications) et aux « <strong>Documents</strong> » (versions adaptées). À chaque instruction papier remise personnellement, il signe la fiche de distribution <strong>D24</strong>.</p>
         ${sub("Le livret HLT")}
         <p style="${P}">Contient les prescriptions à respecter sur le réseau Infrabel (directives UE, RDEI et RGE d'Infrabel…). D'un point de vue STI, c'est le « <strong>Livret de procédures</strong> ». Il compte 8 fascicules (I à VIII) et est actualisé via le <strong>LO3</strong>.</p>
         ${note("L'<strong>application RID</strong> donne les directives en cas d'incident impliquant des marchandises dangereuses ; elle reste consultable sans réseau. Le <strong>Memento</strong> rappelle l'ordre des opérations, à consulter uniquement à l'arrêt — il ne remplace pas le HLT.")}` },
      { t: "Avis de sécurité & livres d'ordres", h:
        `${sub("Avis de sécurité Infrabel")}
         <ul style="${UL}">
         ${li("<strong>ART</strong> — réduction temporaire de vitesse ;")}
         ${li("<strong>ACPA</strong> — circulation pantographes abaissés ;")}
         ${li("<strong>ARQ</strong> — raccourcissement de quai (consultation du schéma obligatoire).")}
         </ul>
         ${sub("Livres d'ordres")}
         <ul style="${UL}">
         ${li("<strong>LO1</strong> : lien vers SEMES 2.0")}${li("<strong>LO2</strong> : avis liés à l'infrastructure (PSS, déviations, ART)")}${li("<strong>LO3</strong> : suppléments au livret HLT")}${li("<strong>LO4</strong> : rappels, REX, évolutions des prescriptions")}${li("<strong>LO5</strong> : avis administratifs B-TO")}${li("<strong>LO6</strong> : avis de l'encadrement (formations…)")}${li("<strong>iLO</strong> : réseaux étrangers / international")}
         </ul>
         ${sub("SEMES")}
         <p style="${P}"><strong>eSEMES</strong> est <strong>intégré</strong> à l'eDrive-app (publications SEMES + avis urgents de sécurité, filtrables). <strong>SEMES 2.0</strong> n'est <strong>pas intégré</strong> (accès via LO1/INF ou Driver-tools-app) — c'est le « Livret de ligne » au sens STI. Les autres avis urgents sont dans l'icône « <strong>U</strong> ».</p>` },
      { t: "La prise de service", h:
        `<p style="${P}">Le conducteur emporte le contenu de son <strong>sac à dos / trolley</strong>, démarre l'eDrive-app et vérifie la <strong>synchronisation</strong>. Via la tâche « <strong>Début de service</strong> », il consulte en priorité les communications et les publications SEMES / avis urgents non lus, puis l'icône « U ».</p>
         ${note("Si eSEMES est indisponible : consulter et télécharger via <strong>SEMES 2.0</strong> ; à défaut, contacter la <strong>permanence conduite</strong> et suivre les directives (retranscription dans un M510(bis)).")}
         ${sub("Rapport du conducteur — M510e / M510")}
         <p style="${P}">Document de communication entre le conducteur et son encadrement. Format digital <strong>M510e</strong> (via eDrive-app) ; format papier <strong>M510</strong> quand le M510e est impossible. Le numéro de tout engin moteur desservi doit figurer au rapport.</p>
         ${sub("Fiche de service / fiche de prestation")}
         <p style="${P}">La <strong>fiche de service</strong> (papier) détaille toutes les opérations à réaliser ; la <strong>fiche de prestation</strong> est son équivalent digital (eDrive-app). Le <strong>M510bis</strong> couvre les avis urgents et conditions météo exceptionnelles (parties A, B, C).</p>` },
      { t: "Pendant le service : comportement", h:
        `<p style="${P}">Le conducteur assure son service avec <strong>calme</strong>. Pendant la conduite :</p>
         <ul style="${UL}">
         ${li("pas de musique ;")}
         ${li("uniquement les appareils multimédia fournis par l'employeur (eDrive, GSM de service) ; tout autre appareil est éteint et hors du pupitre ;")}
         ${li("ne compléter le M510e/M510 qu'avec de brèves informations ;")}
         ${li("aucune action détournant l'attention ; observer la voie autant que possible.")}
         </ul>
         <p style="${P}">Il respecte le <strong>Compass PROS</strong> (code de conduite SNCB), reste joignable sur son <strong>GSM de service</strong>, et utilise ses temps libres (réserve, HLP) pour le maintien des compétences (relecture HLT, REX, e-learning, e-questions).</p>
         ${note("Engin en mouvement : l'eDrive est en <strong>Drivemode</strong> si disponible, sinon en veille, et placé dans son support ou sur le pupitre.")}
         ${sub("HLP, mémorisation, relais, cession")}
         <p style="${P}"><strong>HLP</strong> (haut le pied) : le conducteur voyage sans conduire (discrétion exigée). <strong>Mémorisation de ligne</strong> : parcours pour maintenir la connaissance. Lors d'un <strong>relais</strong>, il transmet documents/instructions (digitales et papier) au conducteur relayant et le notifie au M510e. Il peut <strong>céder la conduite</strong> au pilote, au conducteur en mémorisation/étude de ligne, ou à un titulaire de licence selon conditions.</p>` },
      { t: "Situations exceptionnelles", h:
        `<ul style="${UL}">
         ${li("<strong>Perturbations importantes</strong> (incendie poste, vol de câble, chaleur, hiver). Le <strong>Plan Hiver</strong> peut être activé ; le <strong>B-PII</strong> (Plan Interne d'Intervention) relève du SGS — le conducteur se présente alors au <strong>Leader SNCB</strong>.")}
         ${li("<strong>API</strong> : prise en charge après un événement traumatisant (ex. SPAD, suicide).")}
         ${li("<strong>Psychologue</strong> (partenaire externe) : entretiens sous secret professionnel, n'intervient pas sur le lieu de travail.")}
         ${li("<strong>FI</strong> : premières constatations pour certains événements (ex. dépassement de signal).")}
         ${li("<strong>SOC</strong> (Security Operations Center) en cas d'agression/vandalisme ; s'il ne répond pas, appeler le <strong>112</strong>.")}
         ${li("<strong>Audition</strong> : conforme à la loi <strong>Salduz Plus</strong> ; l'adresse fournie est celle de l'employeur (rubrique 1 de l'attestation).")}
         </ul>` },
      { t: "Accès aux cabines de conduite", h:
        `<p style="${P}">Peuvent accéder à la cabine, si prévu dans leur prestation : les personnes habilitées à contrôler licence/attestation, les titulaires d'un <strong>permis TR-X01/02</strong> (permanent) ou <strong>TR-X03/04</strong> (temporaire), les conducteurs et candidats avec un M510e/M510 valable, le gestionnaire local en gare, l'accompagnateur si requis, l'agent du mouvement…</p>
         ${note("Personne avec permis/licence restant en cabine hors gare : le conducteur prend une <strong>photo du permis/licence</strong>, jointe au M510e (au plus tard en fin de service). Les permis <strong>TR-X03/X04</strong> sont remis au conducteur en fin de parcours autorisé.")}
         ${sub("Attitude & restrictions")}
         <p style="${P}">Les personnes présentes veillent à leur sécurité, ne perturbent pas le conducteur, limitent les conversations au service, mettent leurs appareils en mode silencieux. L'accès à une cabine <strong>inoccupée</strong> est interdit (sauf raison de service). L'accès aux cabines d'<strong>autres EF</strong> est interdit aux conducteurs SNCB, sauf autorisation valable ou pilotage sous contrat (seul <strong>THI Factory</strong> a conclu pareil contrat).</p>` },
      { t: "Fin de service & absence", h:
        `<p style="${P}">En fin de service, le conducteur effectue la <strong>synchronisation</strong> de l'eDrive-app, prend connaissance de sa <strong>prochaine prestation</strong> (icône « Prestation suivante »), et complète soigneusement son <strong>M510e</strong> en y joignant par photos tous les documents, déposés à l'endroit prévu au dépôt.</p>
         ${note("Une modification communiquée par la permanence conduite (téléphone) <strong>prime</strong> sur l'info de l'eDrive-app.")}
         ${sub("Absence pour maladie ou accident")}
         <p style="${P}">Le conducteur informe au plus tôt sa <strong>permanence conduite</strong> dès qu'il ne peut assurer un service, ainsi que de toute prolongation. Apte à nouveau, il l'informe <strong>au plus tard pour midi le jour précédant</strong> la reprise.</p>
         ${sub("Eau réfrigérée")}
         <p style="${P}">Lors des périodes de chaleur (température extérieure &gt; <strong>25 °C</strong>), des bouteilles d'eau réfrigérées sont mises à disposition ; le conducteur les commande à temps en communiquant son numéro de train et son heure d'arrivée.</p>` }
    ]
  }
];

/* ============================================================
   QUESTIONS  — lvl: d (débutant) / m (moyen) / x (difficile)
   type: qcm (une réponse) / qrm (plusieurs réponses)
   ============================================================ */
export const QUESTIONS = [
  /* ===================== DÉBUTANT ===================== */
  { id:"q1", ch:1, lvl:"d", type:"qcm", q:"Qui est le gestionnaire de l'infrastructure (GI) pour la quasi-totalité du réseau belge ?", opts:["Infrabel","La SNCB","Le SSICF","HR Rail"], correct:[0], expOk:"Infrabel est le GI chargé de la gestion et de la maintenance de l'infrastructure ferroviaire.", expNo:"Le GI est Infrabel. La SNCB est une entreprise ferroviaire (EF), pas le gestionnaire d'infrastructure.", ref:"HLT I.1 – art. 1, p. 101" },
  { id:"q2", ch:1, lvl:"d", type:"qcm", q:"La SNCB est…", opts:["une entreprise ferroviaire (EF)","le gestionnaire d'infrastructure","une direction d'Infrabel","un poste de signalisation"], correct:[0], expOk:"La SNCB est une EF (aussi appelée utilisateur de l'infrastructure, UI), chargée du transport de voyageurs.", expNo:"La SNCB est une entreprise ferroviaire (EF/UI). Le gestionnaire d'infrastructure est Infrabel.", ref:"HLT I.1 – Introduction, p. 101" },
  { id:"q3", ch:1, lvl:"d", type:"qcm", q:"En combien d'Areas le réseau Infrabel est-il divisé ?", opts:["5","3","4","13"], correct:[0], expOk:"Le réseau est divisé en 5 Areas (NW, NO, CE, SE, SO), qui correspondent aux districts.", expNo:"Il y a 5 Areas (NW, NO, CE, SE, SO). 13 correspond au nombre de zones, pas d'Areas.", ref:"HLT I.1 – Introduction, p. 101" },
  { id:"q4", ch:1, lvl:"d", type:"qcm", q:"À quoi reconnaît-on un agent du mouvement sur le terrain ?", opts:["Képi bleu et gilet fluorescent au logo Infrabel","Brassard orange au logo Infrabel","Coiffe bleue au logo SNCB","Veste avec mentions Leader"], correct:[0], expOk:"L'agent du mouvement porte un képi bleu et un gilet fluorescent au logo Infrabel.", expNo:"Le brassard orange caractérise le Leader Infrabel ; la coiffe bleue logo SNCB, le personnel d'accompagnement.", ref:"HLT I.1 – art. 1.1, p. 102" },
  { id:"q5", ch:1, lvl:"d", type:"qcm", q:"Le conducteur de manœuvre est limité à quelle vitesse maximale ?", opts:["60 km/h","40 km/h","25 km/h","100 km/h"], correct:[0], expOk:"Le conducteur de manœuvre est limité à 60 km/h et à un rayon d'action de 25 km autour de l'installation.", expNo:"La vitesse maximale est de 60 km/h. 25 km correspond au rayon d'action maximal, pas à la vitesse.", ref:"HLT I.1 – art. 2.2.2, p. 202" },
  { id:"q6", ch:1, lvl:"d", type:"qrm", q:"Lesquelles sont des directions de la SNCB ? (plusieurs réponses)", opts:["B-TO","B-CS","B-PT","I-O"], correct:[0,1,2], expOk:"B-TO, B-CS, B-PT (ainsi que B-TC et B-ST) sont des directions SNCB. I-O est une direction d'Infrabel.", expNo:"I-O (Operation) est une direction d'Infrabel, pas de la SNCB. Les directions SNCB sont B-TO, B-CS, B-PT, B-TC, B-ST.", ref:"HLT I.1 – art. 2.1, p. 201" },
  { id:"q7", ch:1, lvl:"d", type:"qcm", q:"Le Leader Infrabel est reconnaissable à…", opts:["son brassard orange orné du logo Infrabel","son képi bleu","sa coiffe bleue SNCB","un gilet jaune"], correct:[0], expOk:"Le Leader Infrabel porte un brassard orange au logo Infrabel et fait fonction de SPOC (Single Point Of Contact).", expNo:"Le brassard orange au logo Infrabel identifie le Leader Infrabel.", ref:"HLT I.1 – art. 1.1, p. 102" },
  { id:"q8", ch:1, lvl:"d", type:"qcm", q:"Que signifie l'abréviation CT dans le HLT ?", opts:["Conducteur de train","Contrôleur de trafic","Coordination Traction","Central Team"], correct:[0], expOk:"CT désigne le conducteur de train.", expNo:"Dans le HLT, CT = conducteur de train.", ref:"HLT I.1 – art. 2.2.1, p. 202" },
  { id:"q9", ch:1, lvl:"d", type:"qcm", q:"Combien de districts compte le réseau pour les dépôts de conducteurs ?", opts:["5","13","3","6"], correct:[0], expOk:"Il y a 5 districts (NO, NW, SO, SE, CE) regroupant 13 zones.", expNo:"5 districts ; les 13 correspondent aux zones géographiques.", ref:"HLT I.1 – art. 2.2.4, p. 204" },
  { id:"q10", ch:1, lvl:"d", type:"qcm", q:"La permanence conduite a notamment pour mission…", opts:["d'assurer la gestion en temps réel des conducteurs (ex. remplacement d'un malade)","la maintenance des caténaires","le marketing clients","l'entretien des gares"], correct:[0], expOk:"La permanence conduite gère en temps réel les conducteurs : remplacements, suivi des services non planifiés.", expNo:"La gestion temps réel des conducteurs relève de la permanence conduite ; les caténaires relèvent du répartiteur courant-traction.", ref:"HLT I.1 – art. 2.3.1, p. 205" },
  { id:"q11", ch:2, lvl:"d", type:"qcm", q:"Quelle est la durée de validité de la licence de conducteur ?", opts:["10 ans","3 ans","5 ans","1 an"], correct:[0], expOk:"La licence de conducteur est valable 10 ans (tant que les examens médicaux/psycho sont à jour).", expNo:"La licence vaut 10 ans. 3 ans correspond à l'attestation complémentaire.", ref:"HLT I.2 – art. 3.1, p. 301" },
  { id:"q12", ch:2, lvl:"d", type:"qcm", q:"Quelle est la durée de validité de l'attestation complémentaire ?", opts:["3 ans","10 ans","5 ans","2 ans"], correct:[0], expOk:"L'attestation complémentaire, délivrée par l'UI employeur, est valable 3 ans.", expNo:"L'attestation complémentaire vaut 3 ans. 10 ans correspond à la licence.", ref:"HLT I.2 – art. 3.1, p. 301" },
  { id:"q13", ch:2, lvl:"d", type:"qcm", q:"À qui appartient la licence de conducteur ?", opts:["au titulaire (le conducteur)","à l'UI employeur","à Infrabel","au SSICF"], correct:[0], expOk:"La licence est la propriété de son titulaire. L'attestation complémentaire, elle, reste propriété de l'UI.", expNo:"La licence appartient au titulaire ; c'est l'attestation complémentaire qui reste la propriété de l'UI.", ref:"HLT I.2 – art. 3.1, p. 301" },
  { id:"q14", ch:2, lvl:"d", type:"qcm", q:"Tous les combien le conducteur passe-t-il des tests psychotechniques ?", opts:["tous les 10 ans","tous les ans","tous les 3 ans","tous les 5 ans"], correct:[0], expOk:"Les tests psychotechniques ont lieu tous les 10 ans.", expNo:"Tous les 10 ans pour les psychotechniques. La visite médicale est annuelle ; l'examen approfondi tous les 3 ans.", ref:"HLT I.2 – art. 2.2, p. 201" },
  { id:"q15", ch:2, lvl:"d", type:"qcm", q:"À quelle fréquence le conducteur passe-t-il une visite médicale ?", opts:["chaque année","tous les 3 ans","tous les 10 ans","tous les 6 mois"], correct:[0], expOk:"La visite médicale est annuelle. Tous les 3 ans (annuellement dès 55 ans), elle est plus approfondie.", expNo:"La visite médicale est annuelle. L'examen plus approfondi a lieu tous les 3 ans (annuellement dès 55 ans).", ref:"HLT I.2 – art. 2.2, p. 201" },
  { id:"q16", ch:2, lvl:"d", type:"qcm", q:"La formation générale qui permet d'obtenir la licence dure…", opts:["18 jours","6 jours","30 jours","3 mois"], correct:[0], expOk:"La formation générale dure 18 jours et mène à la licence de conducteur.", expNo:"La formation générale dure 18 jours.", ref:"HLT I.2 – art. 1.1, p. 101" },
  { id:"q17", ch:2, lvl:"d", type:"qcm", q:"Que code la lettre F dans la rubrique « connaissances linguistiques » ?", opts:["connaissance suffisante du français","connaissance du flamand","formation","fret"], correct:[0], expOk:"F = français, N = néerlandais, E = anglais, D = allemand.", expNo:"F désigne la connaissance suffisante du français.", ref:"HLT I.2 – art. 3.3.3, p. 304" },
  { id:"q18", ch:2, lvl:"d", type:"qrm", q:"Le candidat-conducteur est recruté après évaluation positive de… (plusieurs réponses)", opts:["un entretien d'embauche","une épreuve psychotechnique","une visite médicale","10 ans d'ancienneté"], correct:[0,1,2], expOk:"Les trois conditions sont : entretien d'embauche, épreuve psychotechnique et visite médicale.", expNo:"Le recrutement repose sur l'entretien, l'épreuve psychotechnique et la visite médicale — pas sur l'ancienneté.", ref:"HLT I.2 – art. 1.1, p. 101" },
  { id:"q19", ch:2, lvl:"d", type:"qcm", q:"Quel score minimal faut-il pour réussir l'évaluation de la connaissance de ligne ?", opts:["60 %","50 %","70 %","80 %"], correct:[0], expOk:"Il faut au moins 60 % des points et aucune faute grave contre la sécurité.", expNo:"Le seuil est de 60 % sans faute grave contre la sécurité.", ref:"HLT I.2 – art. 4.2.2, p. 402" },
  { id:"q20", ch:2, lvl:"d", type:"qcm", q:"La formation permanente est proposée…", opts:["chaque semestre","chaque mois","chaque année","chaque semaine"], correct:[0], expOk:"Le conducteur est invité à une formation permanente chaque semestre.", expNo:"La formation permanente est semestrielle.", ref:"HLT I.2 – art. 2.4, p. 201" },
  { id:"q21", ch:3, lvl:"d", type:"qcm", q:"Comment s'appelle la tablette sur laquelle le conducteur dispose de ses prescriptions ?", opts:["eDrive","DISCO","SEMES","ELAN"], correct:[0], expOk:"Les prescriptions sont disponibles sur la tablette eDrive (eDrive-app).", expNo:"La tablette s'appelle eDrive. DISCO désigne les écrans du local de prise de service.", ref:"HLT I.3 – art. 1.1, p. 101" },
  { id:"q22", ch:3, lvl:"d", type:"qcm", q:"Que signifie HLP ?", opts:["Haut le pied","Halte ligne principale","Heure limite de prestation","Hors-ligne prioritaire"], correct:[0], expOk:"HLP = haut le pied : le conducteur est dans un véhicule sans en assurer la conduite.", expNo:"HLP = haut le pied.", ref:"HLT I.3 – art. 3.4, p. 303" },
  { id:"q23", ch:3, lvl:"d", type:"qcm", q:"Le rapport du conducteur au format digital se nomme…", opts:["M510e","M510","M510bis","M355"], correct:[0], expOk:"Le M510e est le rapport digital (via eDrive-app) ; le M510 est sa version papier.", expNo:"Le format digital est le M510e ; le M510 est le format papier.", ref:"HLT I.3 – art. 2.3, p. 202" },
  { id:"q24", ch:3, lvl:"d", type:"qcm", q:"Quel livre d'ordres contient les suppléments au livret HLT ?", opts:["LO3","LO1","LO4","LO6"], correct:[0], expOk:"Le LO3 contient les suppléments provisoires et définitifs au livret HLT.", expNo:"C'est le LO3. Le LO1 contient un lien vers SEMES 2.0 ; le LO4, les REX.", ref:"HLT I.3 – art. 1.8.3, p. 104" },
  { id:"q25", ch:3, lvl:"d", type:"qcm", q:"Pendant la conduite, le conducteur…", opts:["n'écoute pas de musique","peut écouter la radio à faible volume","peut utiliser son téléphone personnel","peut regarder une vidéo"], correct:[0], expOk:"Pendant la conduite, le conducteur n'écoute pas de musique et n'utilise que les appareils fournis par l'employeur.", expNo:"La musique est interdite pendant la conduite, comme tout appareil non fourni par l'employeur.", ref:"HLT I.3 – art. 3.1, p. 301" },
  { id:"q26", ch:3, lvl:"d", type:"qcm", q:"Que contient l'application RID ?", opts:["les directives en cas d'incident avec des marchandises dangereuses","les fiches de ligne","les avis de sécurité ART","le calendrier des formations"], correct:[0], expOk:"La RID-app fournit les directives lors d'un incident avec wagons de marchandises dangereuses ; consultable sans réseau.", expNo:"La RID-app concerne les marchandises dangereuses.", ref:"HLT I.3 – art. 1.5, p. 103" },
  { id:"q27", ch:3, lvl:"d", type:"qcm", q:"Au-delà de quelle température extérieure des bouteilles d'eau réfrigérées sont-elles mises à disposition ?", opts:["25 °C","30 °C","20 °C","28 °C"], correct:[0], expOk:"Des bouteilles d'eau réfrigérées sont mises à disposition si la température extérieure dépasse 25°.", expNo:"Le seuil est de 25 °C.", ref:"HLT I.3 – art. 3.10, p. 309" },
  { id:"q28", ch:3, lvl:"d", type:"qcm", q:"En fin de service, où le conducteur prend-il connaissance de sa prochaine prestation ?", opts:["via l'icône « Prestation suivante » dans l'« Aperçu » de l'eDrive-app","par courrier au dépôt","auprès du chef de bord","sur le PSS"], correct:[0], expOk:"La prochaine prestation se consulte via l'icône « Prestation suivante » de l'eDrive-app.", expNo:"C'est via l'icône « Prestation suivante » de l'eDrive-app. Une info de la permanence conduite par téléphone primerait toutefois.", ref:"HLT I.3 – art. 4, p. 401" },
  { id:"q29", ch:3, lvl:"d", type:"qcm", q:"En cas d'agression ou de vandalisme, le conducteur contacte…", opts:["le SOC (Security Operations Center)","le Helpdesk","l'Infodesk","la CCT"], correct:[0], expOk:"Le conducteur contacte le SOC ; si le SOC ne répond pas, il appelle le 112.", expNo:"En cas d'agression/vandalisme, on contacte le SOC (puis le 112 si pas de réponse).", ref:"HLT I.3 – art. 3.7.5, p. 306" },
  { id:"q30", ch:3, lvl:"d", type:"qcm", q:"Le Memento doit être consulté…", opts:["uniquement à l'arrêt lors d'incidents","en roulant","avant chaque départ","une fois par semaine"], correct:[0], expOk:"Le Memento est conçu pour être consulté uniquement à l'arrêt lors d'incidents ; il ne remplace pas le HLT.", expNo:"Le Memento se consulte uniquement à l'arrêt, jamais en roulant. Il ne remplace pas le HLT.", ref:"HLT I.3 – art. 1.19, p. 109" },
  { id:"q31", ch:2, lvl:"d", type:"qcm", q:"En cas de PERTE de la licence ou de l'attestation, le conducteur informe son encadrement en rédigeant…", opts:["un D233","un P1103","un M355","un D24"], correct:[0], expOk:"Une perte se signale via un D233 ; un vol, en transmettant le procès-verbal de police.", expNo:"La perte se signale par un D233. Le P1103 concerne le port de lunettes/lentilles/appareil auditif.", ref:"HLT I.2 – art. 3.5, p. 305" },
  { id:"q32", ch:1, lvl:"d", type:"qcm", q:"Quel organe national intervient en appui des postes de signalisation pour la coordination du trafic en cas de perturbations ?", opts:["le Central Dispatch","le RIOC","la CCT","le SOC"], correct:[0], expOk:"Le Central Dispatch (CD, OCT, VCO) appuie les postes de signalisation pour coordonner le trafic en cas de perturbations.", expNo:"C'est le Central Dispatch. Le RIOC s'occupe des irrégularités à l'infrastructure.", ref:"HLT I.1 – art. 1.1.1, p. 104" },
  { id:"q33", ch:3, lvl:"d", type:"qcm", q:"Quel document indépendant du M510 sert pour les avis urgents et conditions météo exceptionnelles ?", opts:["le M510bis","le M510e","le TC612","le D24"], correct:[0], expOk:"Le M510bis est un document indépendant du M510, à compléter pour les avis urgents et conditions météo exceptionnelles.", expNo:"Il s'agit du M510bis.", ref:"HLT I.3 – art. 2.6, p. 205" },
  { id:"q34", ch:1, lvl:"d", type:"qcm", q:"Le personnel d'accompagnement (accompagnateur de train) est reconnaissable à…", opts:["son képi ou sa coiffe bleue ornés du logo SNCB","son brassard orange","son gilet orange fluo","son képi rouge"], correct:[0], expOk:"L'accompagnateur de train porte un képi ou une coiffe bleue au logo SNCB.", expNo:"Le logo SNCB sur képi/coiffe bleue identifie l'accompagnateur ; le brassard orange, le Leader Infrabel.", ref:"HLT I.1 – art. 2.3.7, p. 207" },
  { id:"q35", ch:2, lvl:"d", type:"qcm", q:"Quelle catégorie de conduite correspond au transport de personnes ?", opts:["B1","A1","A4","B2"], correct:[0], expOk:"B1 = transport de personnes. A1/A4 = locomotives de manœuvre, B2 = marchandises.", expNo:"B1 correspond au transport de personnes.", ref:"HLT I.2 – art. 3.3.1, p. 303" },
  /* ===================== INTERMÉDIAIRE ===================== */
  { id:"q36", ch:1, lvl:"m", type:"qrm", q:"Quels rôles relèvent de la direction I-O d'Infrabel ? (plusieurs réponses)", opts:["la régulation du trafic ferroviaire","l'attribution des sillons imprévus en temps réel","la gestion des caténaires et de l'alimentation électrique","l'attribution des sillons prévus"], correct:[0,1,2], expOk:"I-O gère la régulation du trafic, les sillons imprévus (realtime), les caténaires/alimentation et la maintenance.", expNo:"L'attribution des sillons PRÉVUS relève d'I-CBE, pas d'I-O. I-O gère les sillons IMPRÉVUS en temps réel.", ref:"HLT I.1 – art. 1, p. 101" },
  { id:"q37", ch:1, lvl:"m", type:"qcm", q:"Au Central Dispatch, qui est responsable de l'attribution des sillons en temps réel ?", opts:["le Train Path Manager (TPM)","le Traffic Officer (TO)","le Freight Supervisor (FSv)","le Realtime Analyst (RTA)"], correct:[0], expOk:"Le Train Path Manager (TPM) attribue les sillons en temps réel.", expNo:"C'est le TPM. Le TO gère le CD en temps réel ; le FSv suit le trafic marchandises ; le RTA analyse les retards.", ref:"HLT I.1 – art. 1.1.1, p. 104" },
  { id:"q38", ch:1, lvl:"m", type:"qcm", q:"Dans un poste de signalisation, qui coordonne les Safety Controllers ?", opts:["le Safety Supervisor","le Traffic Supervisor","le Traffic Officer","le Traffic Controller"], correct:[0], expOk:"Le Safety Supervisor coordonne les Safety Controllers ; le Traffic Supervisor coordonne les Traffic Controllers.", expNo:"Le Safety Supervisor coordonne les Safety Controllers. Le Traffic Supervisor coordonne les Traffic Controllers.", ref:"HLT I.1 – art. 1.1.2, p. 105" },
  { id:"q39", ch:1, lvl:"m", type:"qrm", q:"Le répartiteur courant-traction peut interrompre l'alimentation des caténaires à la demande… (plusieurs réponses)", opts:["du Safety Controller","d'un conducteur de train","de sa propre initiative","d'un accompagnateur de train"], correct:[0,1,2], expOk:"Il peut couper l'alimentation à la demande du Safety Controller, d'un conducteur, ou de sa propre initiative.", expNo:"L'accompagnateur de train ne figure pas parmi les demandeurs : ce sont le Safety Controller, le conducteur, ou sa propre initiative.", ref:"HLT I.1 – art. 1.1.3, p. 105" },
  { id:"q40", ch:1, lvl:"m", type:"qcm", q:"Quelle entité assiste le conducteur victime d'un événement choquant ou traumatisant (ex. SPAD) ?", opts:["l'API (assistant post incident)","le FI (first investigator)","le SOC","le Leader SNCB"], correct:[0], expOk:"L'API assiste le conducteur victime d'un événement choquant/traumatisant. Le FI réalise les premières constatations.", expNo:"C'est l'API qui assiste le conducteur. Le FI intervient pour les constatations (SPAD, dérive, etc.).", ref:"HLT I.1 – art. 2.2.3, p. 203" },
  { id:"q41", ch:1, lvl:"m", type:"qcm", q:"Que signifie SPAD ?", opts:["Signal Passed At Danger (dépassement de signal)","Safety Protection And Defense","Service Permanent d'Assistance au Dépôt","Signal Position À Distance"], correct:[0], expOk:"SPAD = Signal Passed At Danger, soit un dépassement de signal.", expNo:"SPAD = Signal Passed At Danger (dépassement de signal).", ref:"HLT I.1 – art. 2.2.3, p. 203" },
  { id:"q42", ch:1, lvl:"m", type:"qcm", q:"Le gestionnaire local de l'installation SNCB au niveau des ateliers de traction appartient à…", opts:["B-TC","B-TO","B-PT","B-CS"], correct:[0], expOk:"Aux ateliers de traction, il appartient à B-TC (ex. agent du service de cour). Grands faisceaux → B-TO ; petits faisceaux/quais → B-PT.", expNo:"Aux ateliers de traction, c'est B-TC. B-TO gère les grands faisceaux ; B-PT les petits faisceaux et quais.", ref:"HLT I.1 – art. 2.3.8, p. 208" },
  { id:"q43", ch:1, lvl:"m", type:"qcm", q:"Le service d'assistance technique qui NE dépend PAS de la direction B-TC s'appelle…", opts:["la Hotline","le Helpdesk","l'Infodesk","la CCT"], correct:[0], expOk:"Le Helpdesk dépend de B-TC ; la Hotline n'en dépend pas.", expNo:"La Hotline ne dépend pas de B-TC ; le Helpdesk en dépend.", ref:"HLT I.1 – art. 2.3.4, p. 205" },
  { id:"q44", ch:2, lvl:"m", type:"qrm", q:"Un examen des connaissances professionnelles spécifiques est requis lorsque… (plusieurs réponses)", opts:["le bilan périodique n'est pas satisfaisant","la conduite a été interrompue plus de 6 mois","le critère de monitoring théorique n'est pas atteint","le conducteur change de dépôt"], correct:[0,1,2], expOk:"Bilan non satisfaisant, interruption > 6 mois, critère monitoring non atteint, ou décision de l'encadrement (faute grave, lacunes).", expNo:"Un changement de dépôt n'impose pas cet examen ; les motifs sont le bilan, l'interruption > 6 mois, le monitoring, ou une décision de l'encadrement.", ref:"HLT I.2 – art. 2.7, p. 202" },
  { id:"q45", ch:2, lvl:"m", type:"qcm", q:"Depuis 2016, quel niveau de connaissances linguistiques est requis pour les conducteurs ?", opts:["B1","A2","B2","C1"], correct:[0], expOk:"Depuis le 01/01/2016, le niveau requis est B1.", expNo:"Le niveau requis est B1.", ref:"HLT I.2 – art. 2.8, p. 203" },
  { id:"q46", ch:2, lvl:"m", type:"qcm", q:"Le conducteur qui n'a plus parcouru une ligne depuis combien de temps doit le notifier à son M510e ?", opts:["10 mois","12 mois","6 mois","3 mois"], correct:[0], expOk:"Au-delà de 10 mois sans parcours, le conducteur le notifie à son M510e. Un parcours dans les 12 mois prolonge la connaissance.", expNo:"Le seuil de notification est de 10 mois. Les 12 mois concernent le délai pour prolonger la connaissance par un parcours.", ref:"HLT I.2 – art. 4.2.3, p. 403" },
  { id:"q47", ch:2, lvl:"m", type:"qcm", q:"Qui interrompt les tâches critiques de sécurité en retirant/suspendant la LICENCE ?", opts:["le SSICF","l'EF qui a émis l'attestation","le GI","le FI"], correct:[0], expOk:"Le SSICF retire/suspend la licence. L'EF émettrice retire/suspend l'attestation complémentaire.", expNo:"La licence est retirée par le SSICF ; l'attestation complémentaire l'est par l'EF émettrice.", ref:"HLT I.2 – art. 3.6.2, p. 306" },
  { id:"q48", ch:2, lvl:"m", type:"qcm", q:"Que doit faire le conducteur s'il doit désormais porter des lunettes pendant la validité de sa licence ?", opts:["rédiger un P1103","rédiger un D233","rédiger un M355","ne rien faire"], correct:[0], expOk:"Il rédige un P1103 pour informer son encadrement (de même s'il n'est plus tenu d'en porter).", expNo:"Le port de lunettes/lentilles/appareil auditif se signale par un P1103. Le D233 concerne la perte d'un document.", ref:"HLT I.2 – art. 3.4, p. 304" },
  { id:"q49", ch:2, lvl:"m", type:"qcm", q:"La catégorie de conduite A1 correspond à…", opts:["locomotives de manœuvre","autres locomotives de manœuvre","transport de personnes","transport de marchandises"], correct:[0], expOk:"A1 = locomotives de manœuvre ; A4 = autres locomotives de manœuvre ; B1 = personnes ; B2 = marchandises.", expNo:"A1 = locomotives de manœuvre. B1 = personnes, B2 = marchandises.", ref:"HLT I.2 – art. 3.3.1, p. 303" },
  { id:"q50", ch:2, lvl:"m", type:"qrm", q:"Quelles entités peuvent contrôler la licence et l'attestation ? (plusieurs réponses)", opts:["le personnel du GI habilité","le SSICF","les forces de police","l'accompagnateur de train"], correct:[0,1,2], expOk:"GI habilité, SSICF, enquêteur de l'organisme d'enquête, forces de police, et l'encadrement du conducteur.", expNo:"L'accompagnateur de train ne contrôle pas la licence. Le contrôle revient à l'encadrement, au GI habilité, au SSICF, à l'enquêteur et à la police.", ref:"HLT I.2 – art. 3.5, p. 305" },
  { id:"q51", ch:2, lvl:"m", type:"qcm", q:"Quelle formation matériel traite de la protection de l'engin stationné contre le gel et la neige ?", opts:["la formation « Protection du matériel roulant »","la formation complète","la formation fondamentale","la formation permanente"], correct:[0], expOk:"La formation « Protection du matériel roulant » couvre la protection de l'engin stationné. La formation complète couvre conduite, fonctionnement et dépannage.", expNo:"C'est la formation « Protection du matériel roulant ». La formation complète couvre la conduite et le dépannage.", ref:"HLT I.2 – art. 5.2.1, p. 501" },
  { id:"q52", ch:2, lvl:"m", type:"qcm", q:"Dans une série, à quel jour correspond la colonne R1 ?", opts:["lundi","dimanche","le premier jour de service","un jour de repos"], correct:[0], expOk:"R1 = lundi et R7 = dimanche dans la grille de série.", expNo:"R1 = lundi (R7 = dimanche).", ref:"HLT I.2 – art. 6.2, p. 602" },
  { id:"q53", ch:2, lvl:"m", type:"qcm", q:"Le bilan périodique est un entretien d'une durée maximale de…", opts:["60 minutes","30 minutes","90 minutes","120 minutes"], correct:[0], expOk:"L'entretien de bilan périodique dure au maximum 60 minutes.", expNo:"La durée maximale est de 60 minutes.", ref:"HLT I.2 – art. 2.5, p. 202" },
  { id:"q54", ch:3, lvl:"m", type:"qcm", q:"Quel livre d'ordres contient les communications B-TO relatives aux REX ?", opts:["le LO4","le LO2","le LO5","le LO6"], correct:[0], expOk:"Le LO4 contient les rappels HLT et les communications B-TO (REX, évolutions des prescriptions).", expNo:"Les REX sont au LO4. Le LO2 concerne l'infrastructure ; le LO5/LO6, les avis administratifs.", ref:"HLT I.3 – art. 1.8.4, p. 104" },
  { id:"q55", ch:3, lvl:"m", type:"qcm", q:"Lequel de ces avis de sécurité impose obligatoirement de consulter le schéma ?", opts:["l'ARQ (raccourcissement de quai)","l'ART","l'ACPA","le REX"], correct:[0], expOk:"Pour un ARQ, le conducteur doit obligatoirement consulter le schéma.", expNo:"C'est l'ARQ qui impose la consultation du schéma. ART = réduction de vitesse, ACPA = pantographes abaissés.", ref:"HLT I.3 – art. 1.7, p. 103" },
  { id:"q56", ch:3, lvl:"m", type:"qcm", q:"Quelle différence majeure existe entre eSEMES et SEMES 2.0 ?", opts:["eSEMES est intégré à l'eDrive-app, pas SEMES 2.0","SEMES 2.0 est intégré à l'eDrive-app, pas eSEMES","les deux sont sur papier","aucune différence"], correct:[0], expOk:"eSEMES est intégré dans l'eDrive-app ; SEMES 2.0 ne l'est pas (accès via lien LO1/INF ou Driver-tools-app).", expNo:"C'est eSEMES qui est intégré à l'eDrive-app ; SEMES 2.0 ne l'est pas.", ref:"HLT I.3 – art. 1.10–1.11, p. 106" },
  { id:"q57", ch:3, lvl:"m", type:"qcm", q:"En cas de dérangement de l'appareil eDrive pendant le service, quel appareil sert de remplacement ?", opts:["le GSM de service","le téléphone personnel","un écran DISCO","la RID-app"], correct:[0], expOk:"Le GSM de service sert de système de remplacement, en respectant les mêmes prescriptions.", expNo:"C'est le GSM de service. L'appareil personnel n'est jamais autorisé.", ref:"HLT I.3 – art. 3.2.2, p. 302" },
  { id:"q58", ch:3, lvl:"m", type:"qcm", q:"Le franchissement des signaux permissifs se note dans quelle rubrique du M510 ?", opts:["rubrique 2","rubrique 1","rubrique 3","rubrique 5"], correct:[0], expOk:"Rubrique 2 = franchissement des signaux permissifs. Rubrique 1 = incidents/retards, 3 = annexes, 5 = présence de personnes en cabine.", expNo:"C'est la rubrique 2. La rubrique 1 concerne les incidents/retards/irrégularités.", ref:"HLT I.3 – art. 2.3.3, p. 202" },
  { id:"q59", ch:3, lvl:"m", type:"qcm", q:"À quoi correspond le classement « 2XX » des fiches de déviation ?", opts:["axe Bruxelles – Pays-Bas (Prorail)","Bruxelles Nord","Dorsale Nord","axe Bruxelles – Allemagne"], correct:[0], expOk:"2XX = axe Bruxelles–Pays-Bas (Prorail). 1XX = Bruxelles Nord, 3XX = Dorsale Nord, 4XX = Bruxelles–Allemagne.", expNo:"2XX correspond à l'axe Bruxelles–Pays-Bas (Prorail).", ref:"HLT I.3 – art. 1.15, p. 108" },
  { id:"q60", ch:3, lvl:"m", type:"qcm", q:"Qui le conducteur contacte-t-il pour le remplacement d'un appareil eDrive dérangé ?", opts:["le Helpdesk Mobile Devices","la permanence conduite","l'Infodesk","la CCT"], correct:[0], expOk:"Le Helpdesk Mobile Devices donne les directives et indique le Smartlocker contenant les appareils de remplacement.", expNo:"C'est le Helpdesk Mobile Devices qui gère le remplacement (Smartlocker).", ref:"HLT I.3 – art. 3.2.2, p. 302" },
  { id:"q61", ch:3, lvl:"m", type:"qrm", q:"Quels titulaires de permis peuvent accéder à la cabine de conduite ? (plusieurs réponses)", opts:["TR-X01 (maîtrise instruction-traction)","TR-X02 (DMR)","TR-X03 (Securail)","TR-X07"], correct:[0,1,2], expOk:"TR-X01/X02 (permis permanents) et TR-X03/X04 (permis temporaires) autorisent l'accès. TR-X07 est le code de reconnaissance comme formateur, pas un permis d'accès.", expNo:"TR-X07 n'est pas un permis d'accès cabine mais la reconnaissance comme formateur du centre SNCB. Les permis d'accès sont TR-X01 à X04.", ref:"HLT I.3 – art. 3.8.1, p. 306" },
  { id:"q62", ch:3, lvl:"m", type:"qcm", q:"En cas de perturbation importante, le conducteur en HLP se présente d'office…", opts:["au gestionnaire local de l'installation SNCB","au Leader Infrabel","à la CCT","au SOC"], correct:[0], expOk:"En perturbation importante, le conducteur HLP (ou réserve/stand-by sans opération dans la demi-heure) se présente au gestionnaire local de l'installation SNCB.", expNo:"Il se présente au gestionnaire local de l'installation SNCB.", ref:"HLT I.3 – art. 3.7.1, p. 305" },
  { id:"q63", ch:1, lvl:"m", type:"qcm", q:"Quelle direction d'Infrabel est responsable de l'attribution des sillons prévus ?", opts:["I-CBE","I-O","B-TO","RIOC"], correct:[0], expOk:"I-CBE (Customer & Business Excellence) attribue les sillons prévus ; I-O attribue les sillons imprévus en temps réel.", expNo:"Les sillons prévus relèvent d'I-CBE ; les imprévus (realtime) d'I-O.", ref:"HLT I.1 – art. 1, p. 101" },
  { id:"q64", ch:1, lvl:"m", type:"qcm", q:"Avec quel organe le Central Dispatch est-il hébergé conjointement à Bruxelles ?", opts:["le RIOC (Rail Infrastructure Operation Center)","le RCC","le SOC","le Helpdesk"], correct:[0], expOk:"Le CD est hébergé à Bruxelles avec le RIOC, responsable de l'enregistrement des irrégularités à l'infrastructure.", expNo:"Le CD est hébergé avec le RIOC. Le RCC héberge la CCT côté SNCB.", ref:"HLT I.1 – art. 1.1.1, p. 104" },
  { id:"q65", ch:2, lvl:"m", type:"qcm", q:"Pour assurer un train de voyageurs commercial, un conducteur de manœuvre doit…", opts:["être accompagné d'un conducteur de train B1 connaissant suffisamment sa langue","obtenir l'accord du SSICF","passer un examen linguistique","rien, c'est interdit en toutes circonstances"], correct:[0], expOk:"Il peut évacuer un train de voyageurs commercial s'il est accompagné d'un conducteur de train B1 maîtrisant suffisamment sa langue, sans dépasser 60 km/h, et piloté s'il n'a pas la connaissance de ligne.", expNo:"Il le peut uniquement accompagné d'un conducteur de train B1, à 60 km/h max, et piloté si pas de connaissance de ligne.", ref:"HLT I.1 – art. 2.2.2, p. 202" },
  { id:"q66", ch:2, lvl:"m", type:"qcm", q:"Lors de l'année de renouvellement, quand l'examen des connaissances linguistiques doit-il avoir lieu ?", opts:["au plus tôt 3 mois avant la fin de validité et avant l'entretien du bilan","le jour de l'examen final","6 mois après le renouvellement","après l'entretien du bilan"], correct:[0], expOk:"Lors de l'année de renouvellement, l'examen linguistique se tient au plus tôt 3 mois avant la fin de validité et avant l'entretien du bilan.", expNo:"C'est au plus tôt 3 mois avant la fin de validité et AVANT l'entretien du bilan.", ref:"HLT I.2 – art. 2.8, p. 203" },
  { id:"q67", ch:3, lvl:"m", type:"qcm", q:"Que doit faire le conducteur si les publications SEMES ne sont pas consultables via eSEMES ?", opts:["les consulter via SEMES 2.0 et les télécharger, puis contacter la permanence conduite si impossible","poursuivre sans les consulter","attendre la fin de service","contacter le SOC"], correct:[0], expOk:"Il prend connaissance des publications via SEMES 2.0 et les télécharge ; à défaut, il contacte la permanence conduite et suit les directives.", expNo:"Il bascule sur SEMES 2.0 (téléchargement) et, à défaut, contacte la permanence conduite — il ne poursuit jamais sans en avoir pris connaissance.", ref:"HLT I.3 – art. 2.2, p. 201" },
  { id:"q68", ch:3, lvl:"m", type:"qcm", q:"Lors d'une audition de police, l'adresse que le conducteur doit fournir est…", opts:["celle de l'employeur (rubrique 1 de l'attestation complémentaire)","son adresse personnelle","celle du dépôt","celle d'Infrabel"], correct:[0], expOk:"Pour préserver sa confidentialité, le conducteur fournit l'adresse de l'employeur, reprise à la rubrique 1 de l'attestation complémentaire.", expNo:"Il fournit l'adresse de l'employeur (rubrique 1 de l'attestation), pas son adresse personnelle.", ref:"HLT I.3 – art. 3.7.6, p. 306" },
  { id:"q69", ch:3, lvl:"m", type:"qcm", q:"D'un point de vue STI, comment le livret HLT est-il appelé ?", opts:["Livret de procédures","Livret de ligne","Livret de bord","Livret de sécurité"], correct:[0], expOk:"D'un point de vue STI, le HLT est le « Livret de procédures ». SEMES 2.0 et les fiches de ligne forment le « Livret de ligne ».", expNo:"Le HLT = « Livret de procédures ». Le « Livret de ligne » désigne SEMES 2.0 et les fiches de ligne.", ref:"HLT I.3 – art. 1.2, p. 101" },
  { id:"q70", ch:3, lvl:"m", type:"qcm", q:"Le conducteur HLP qui prend place dans un compartiment voyageur doit…", opts:["informer le personnel de bord de sa présence, de préférence avant le départ","s'installer obligatoirement en cabine","rester debout","présenter son rapport M510 aux voyageurs"], correct:[0], expOk:"Il informe le personnel de bord (qui peut demander un document d'identité) et cède la priorité d'une place assise à un voyageur muni d'un titre.", expNo:"Il doit informer le personnel de bord de sa présence, de préférence avant le départ.", ref:"HLT I.3 – art. 3.4, p. 303" },
  /* ===================== AVANCÉ ===================== */
  { id:"q71", ch:1, lvl:"x", type:"qcm", q:"Au Central Dispatch, qui traite les dossiers de retards ?", opts:["le Real Time Quality Officer (RT QO)","le Realtime Analyst (RTA)","l'Information Provider (IP)","le Central Dispatcher (CDr)"], correct:[0], expOk:"Le RT QO traite les dossiers de retards. Le RTA analyse les retards en temps réel ; l'IP diffuse les infos ; le CDr gère les incidents majeurs.", expNo:"C'est le RT QO. Attention à ne pas le confondre avec le RTA (analyse en temps réel) ou le CDr (incidents majeurs).", ref:"HLT I.1 – art. 1.1.1, p. 104" },
  { id:"q72", ch:1, lvl:"x", type:"qrm", q:"Quelles zones appartiennent au district SE ? (plusieurs réponses)", opts:["Arlon","Liège","Namur","Mons"], correct:[0,1,2], expOk:"Le district SE regroupe Arlon, Liège et Namur. Mons (avec Charleroi) appartient au district SO.", expNo:"Mons relève du district SO (avec Charleroi). Le SE comprend Arlon, Liège et Namur.", ref:"HLT I.1 – art. 2.2.4, p. 204" },
  { id:"q73", ch:1, lvl:"x", type:"qrm", q:"Le FI (first investigator) intervient notamment lors… (plusieurs réponses)", opts:["d'un SPAD","du non-respect d'une vitesse signalisée","du déplacement intempestif d'un engin moteur (dérive)","d'une visite médicale d'inaptitude"], correct:[0,1,2], expOk:"Le FI intervient lors d'un SPAD, d'une circulation anormale, du non-respect d'une vitesse signalisée et d'une dérive.", expNo:"L'inaptitude médicale ne concerne pas le FI. Le FI intervient pour SPAD, circulation anormale, non-respect de vitesse, dérive.", ref:"HLT I.1 – art. 2.2.3, p. 203–204" },
  { id:"q74", ch:1, lvl:"x", type:"qrm", q:"Pour faire partie du groupe instruction-traction, un agent doit notamment… (plusieurs réponses)", opts:["exercer une des fonctions d'encadrement listées","posséder au minimum le grade de sous-chef de secteur technique instruction-traction (faisant fonctions)","être reconnu formateur du centre de formation SNCB (TR-X07)","avoir 10 ans d'ancienneté"], correct:[0,1,2], expOk:"Les trois conditions cumulatives : exercer une fonction listée, avoir au moins le grade de sous-chef de secteur technique instruction-traction, et être reconnu formateur (TR-X07).", expNo:"L'ancienneté n'est pas un critère ; ce sont la fonction, le grade minimal et la reconnaissance TR-X07.", ref:"HLT I.1 – art. 2.2.3, p. 203" },
  { id:"q75", ch:1, lvl:"x", type:"qcm", q:"La gestion en temps réel de l'ICE3 est assurée par…", opts:["le Transportleitung de Duisbourg","B-TO.1","la CCT","le Central Dispatch"], correct:[0], expOk:"Selon la nature du matériel, la gestion temps réel peut être confiée à des tiers : le Transportleitung de Duisbourg gère l'ICE3.", expNo:"L'ICE3 est géré en temps réel par le Transportleitung de Duisbourg (un tiers), pas par B-TO.1.", ref:"HLT I.1 – art. 2.3.3, p. 205" },
  { id:"q76", ch:1, lvl:"x", type:"qcm", q:"La CCT (Coordination Centrale Traction) est hébergée au sein du…", opts:["RCC (Realtime Coordination Center)","RIOC","Central Dispatch","SOC"], correct:[0], expOk:"La CCT est hébergée au RCC, avec le Helpdesk, la gestion du MR de SNCB Transport et les RTS-RCC.", expNo:"La CCT est au RCC. Le RIOC accompagne le Central Dispatch côté infrastructure.", ref:"HLT I.1 – art. 2.3.6, p. 206" },
  { id:"q77", ch:2, lvl:"x", type:"qcm", q:"Quelle information additionnelle (rubrique 4) certifie la conduite sur lignes à repères d'arrêt en ETCS niveau 2 ?", opts:["Connaissance ETCS 2 REP","Connaissance ETCS 2 LAT","Connaissance ETCS 1 REP","Connaissance TVM"], correct:[0], expOk:"« ETCS 2 REP » certifie l'ETCS niveau 2 sur les lignes à repères d'arrêt. « LAT » = signalisation latérale.", expNo:"REP = repères d'arrêt, LAT = signalisation latérale. ETCS 2 REP est la bonne combinaison.", ref:"HLT I.2 – art. 3.3.2, p. 303" },
  { id:"q78", ch:2, lvl:"x", type:"qcm", q:"Pour maintenir la connaissance d'un type d'engin resté plus de 10 mois sans conduite, le bureau du tableau de service organise…", opts:["une préparation complète et un parcours dans un délai de 2 mois","une nouvelle formation complète","un examen théorique sous 6 mois","rien"], correct:[0], expOk:"Si la connaissance doit être maintenue, une préparation complète et un parcours avec cet engin sont organisés dans un délai de 2 mois.", expNo:"Le délai est de 2 mois pour une préparation complète et un parcours ; à défaut, l'attestation est adaptée.", ref:"HLT I.2 – art. 5.2.3, p. 502" },
  { id:"q79", ch:2, lvl:"x", type:"qcm", q:"Dans le cas d'un pilotage pour défaut de connaissance de ligne (art. 6.1.2), qui reste responsable du freinage du convoi ?", opts:["le conducteur piloté","le pilote","le GI","le Safety Controller"], correct:[0], expOk:"Quand le motif est le défaut de connaissance de ligne, le conducteur piloté indique la vitesse max et reste responsable du freinage ; le pilote gère signalisation et circulation.", expNo:"Pour un pilotage « connaissance de ligne », le conducteur piloté reste responsable du freinage ; le pilote couvre signalisation/circulation.", ref:"HLT I.2 – art. 6.1.2, p. 602" },
  { id:"q80", ch:2, lvl:"x", type:"qrm", q:"Quels éléments figurent au VERSO de la licence de conducteur ? (plusieurs réponses)", opts:["la langue maternelle (rubrique 9a.1)","des particularités d'ordre médical (rubrique 9b)","l'adresse du titulaire, facultative (rubrique 8)","le numéro de licence en rubrique 5"], correct:[0,1,2], expOk:"Le verso reprend l'adresse (8, facultative), la langue maternelle (9a.1), le n° de licence (9a.2) et les particularités médicales (9b). La rubrique 5 est au recto.", expNo:"La rubrique 5 (n° de licence) figure au RECTO. Le verso contient les rubriques 8 et 9.", ref:"HLT I.2 – art. 3.2, p. 302" },
  { id:"q81", ch:2, lvl:"x", type:"qcm", q:"Sur le verso de la licence, que signifie la case 2 des particularités médicales (9b) ?", opts:["le port d'un appareil auditif","le port de lunettes ou lentilles","une restriction de conduite de jour","une dispense médicale"], correct:[0], expOk:"Case 1 = lunettes/lentilles ; case 2 = appareil auditif.", expNo:"La case 2 = appareil auditif ; la case 1 = lunettes ou lentilles.", ref:"HLT I.2 – art. 3.2, p. 302" },
  { id:"q82", ch:2, lvl:"x", type:"qcm", q:"Lors de l'étude de ligne, la carte « SPAD-Hotspots » est consultée via quelle icône de l'eDrive-app ?", opts:["l'icône « INF »","l'icône « HLT »","l'icône « U »","l'icône « LO1 »"], correct:[0], expOk:"La carte « SPAD-Hotspots » est disponible sur l'eDrive-app via l'icône « INF », si un signal d'arrêt y est référencé.", expNo:"C'est l'icône « INF » (infrastructure). L'icône « U » concerne les avis urgents.", ref:"HLT I.2 – art. 4.2.1, p. 401" },
  { id:"q83", ch:2, lvl:"x", type:"qcm", q:"Quelle est la durée approximative de la partie réglementation organisée sur simulateur lors de l'examen des connaissances professionnelles spécifiques ?", opts:["environ 1 heure","environ 30 minutes","environ 2 heures","environ 90 minutes"], correct:[0], expOk:"À la demande du conducteur, la partie réglementation peut se faire sur simulateur, pour une durée d'environ 1 heure.", expNo:"La durée est d'environ 1 heure.", ref:"HLT I.2 – art. 2.7, p. 203" },
  { id:"q84", ch:3, lvl:"x", type:"qcm", q:"Dans le code locomotive, que signifie la lettre « U » ?", opts:["HL en unité multiple (un seul conducteur)","HL d'allège","HL comme véhicule","deux HL chacune desservie par un conducteur"], correct:[0], expOk:"U = HL en unité multiple avec un seul conducteur (chiffre 4). « D » = deux HL, chacune avec son conducteur.", expNo:"U = unité multiple, un seul conducteur. « D » correspond à deux HL avec chacune un conducteur.", ref:"HLT I.3 – annexe II, art. 1.3" },
  { id:"q85", ch:3, lvl:"x", type:"qcm", q:"Sur la fiche de prestation, que signifie l'abréviation « VK.PC » ?", opts:["préparation complète d'engin(s) moteur(s)","préparation réduite","prise en charge INMAIN","passage au carwash"], correct:[0], expOk:"VK.PC = préparation complète (ou préparation courante – essais journaliers pour les TGV autres qu'ICE). BK.PR = préparation réduite.", expNo:"VK.PC = préparation complète. BK.PR désigne la préparation réduite.", ref:"HLT I.3 – annexe II, art. 1.4" },
  { id:"q86", ch:3, lvl:"x", type:"qcm", q:"Que signifie « INMAIN » sur la fiche de prestation ?", opts:["la mise en « maintien de service » d'un engin moteur","la prise en charge d'un engin en maintien de service","une préparation réduite","un mouvement de manœuvre"], correct:[0], expOk:"INMAIN = mise en « maintien de service » d'un engin moteur. IDREM = prise en charge d'un engin déjà mis en INMAIN.", expNo:"INMAIN = mise en maintien de service. La prise en charge d'un tel engin est l'IDREM.", ref:"HLT I.3 – annexe II, art. 1.4" },
  { id:"q87", ch:3, lvl:"x", type:"qcm", q:"Le symbole « < » sur la fiche de prestation/service indique…", opts:["un arrêt de service qui doit toujours être respecté","un arrêt respecté seulement si le signal de couverture l'impose","une vitesse conseillée","l'absence de vitesse conseillée"], correct:[0], expOk:"« < » = arrêt de service toujours à respecter ; « > » = arrêt à respecter seulement si le signal de couverture impose l'arrêt.", expNo:"« < » impose toujours l'arrêt ; c'est « > » qui dépend du signal de couverture.", ref:"HLT I.3 – annexe II, art. 1.4" },
  { id:"q88", ch:3, lvl:"x", type:"qcm", q:"À quelle série de numéros correspondent les trains Eurostar Londres – Bruxelles – Amsterdam ?", opts:["9100-9199","9800-9899","9300-9399","9500-9599"], correct:[0], expOk:"9100-9199 = Eurostar Londres–Bruxelles–Amsterdam. 9800-9899 = TGV ; 9300-9399 = Eurostar Paris–Bruxelles–Amsterdam.", expNo:"C'est 9100-9199. 9800-9899 désigne les TGV.", ref:"HLT I.3 – annexe II, art. 1.2.2" },
  { id:"q89", ch:3, lvl:"x", type:"qrm", q:"Quels formulaires le conducteur emporte-t-il à 5 exemplaires à la prise de service ? (plusieurs réponses)", opts:["IE.1 à IE.9","IN.31 à IN.34","E360","M355"], correct:[0,1,2], expOk:"5 exemplaires de IE.1–IE.9, IN.21/22/23 et IN.31–34, E360, TC286 MOBI, TC612, TC431.1, M510, M510bis. Le M355 n'en fait pas partie.", expNo:"Le M355 est la fiche suiveuse du candidat, pas un formulaire emporté à 5 exemplaires. Les bons sont les IE, IN, E360, TC…, M510/M510bis.", ref:"HLT I.3 – annexe I, art. 2" },
  { id:"q90", ch:3, lvl:"x", type:"qcm", q:"Pour une locomotive électrique, dans le numéro de service, la lettre « B » indique…", opts:["une bitension","une monotension","une polytension","un diagramme spécial"], correct:[0], expOk:"A = monotension, B = bitension, C = polytension, D et E = diagrammes spéciaux.", expNo:"B = bitension. A = monotension, C = polytension.", ref:"HLT I.3 – annexe II, art. 2.2" },
  { id:"q91", ch:3, lvl:"x", type:"qcm", q:"Les appareils multimédia des personnes en cabine doivent être en mode silencieux, à l'exception de ceux encodés dans…", opts:["la base de données ALASCA","la base ATLAS","la base ALACRA","la RID-app"], correct:[0], expOk:"Seuls les appareils encodés dans la base ALASCA échappent à l'obligation de mode silencieux en cabine.", expNo:"L'exception concerne la base de données ALASCA.", ref:"HLT I.3 – art. 3.8.3, p. 308" },
  { id:"q92", ch:1, lvl:"x", type:"qcm", q:"Quel grade fonctionnel est chargé de l'organisation générale du poste de signalisation ?", opts:["le Traffic Officer","le Traffic Supervisor","le Safety Supervisor","le Traffic Controller"], correct:[0], expOk:"Dans un poste de signalisation, le Traffic Officer est chargé de l'organisation générale.", expNo:"C'est le Traffic Officer. Le Traffic Supervisor coordonne les Traffic Controllers.", ref:"HLT I.1 – art. 1.1.2, p. 105" },
  { id:"q93", ch:1, lvl:"x", type:"qcm", q:"Quel service de la SNCB est en charge des prescriptions de conduite relatives au freinage des trains ?", opts:["B-TC.4","B-TO.4","B-PT.4","B-CS.1"], correct:[0], expOk:"B-TC.4 est en charge des études techniques du matériel roulant et des prescriptions de conduite relatives au freinage.", expNo:"Le freinage relève de B-TC.4. B-TO.4 gère la gestion opérationnelle du trafic.", ref:"HLT I.1 – art. 2.1.4, p. 201" },
  { id:"q94", ch:1, lvl:"x", type:"qcm", q:"Le personnel d'accompagnement assure principalement la fonction de chef de bord lorsqu'il…", opts:["dirige et confie des tâches aux autres membres du personnel d'accompagnement","réalise des tâches assignées par un autre agent","contrôle les titres de transport uniquement","conduit le train"], correct:[0], expOk:"Il est chef de bord quand il dirige et répartit les tâches ; agent contrôle quand il exécute les tâches assignées par le chef de bord.", expNo:"Le chef de bord dirige et confie les tâches ; l'agent contrôle exécute les tâches assignées.", ref:"HLT I.1 – art. 2.3.7, p. 207" },
  { id:"q95", ch:2, lvl:"x", type:"qcm", q:"Quel est le statut de connaissance d'un itinéraire de déviation repris à l'attestation complémentaire ?", opts:["il est assimilé aux lignes connues (niveau équivalent)","il exige toujours un pilotage","il n'est jamais autorisé","il requiert un nouvel examen à chaque usage"], correct:[0], expOk:"La connaissance des itinéraires de déviation repris à l'attestation est assimilée aux lignes connues ; le conducteur peut donc assurer ce train.", expNo:"Un itinéraire de déviation repris à l'attestation est assimilé à une ligne connue — pas de pilotage ni d'examen requis.", ref:"HLT I.2 – art. 4.1, p. 401" },
  { id:"q96", ch:2, lvl:"x", type:"qcm", q:"Le moniteur doit compléter au minimum combien de fiches d'évaluation ?", opts:["au moins une par semaine","une par mois","une par jour","une à la fin de la formation"], correct:[0], expOk:"Le moniteur complète au moins une fiche d'évaluation par semaine, renseignant progrès et lacunes du candidat.", expNo:"C'est au moins une fiche par semaine.", ref:"HLT I.2 – art. 1.3, p. 102" },
  { id:"q97", ch:2, lvl:"x", type:"qrm", q:"La connaissance du matériel remorqué (formation de base) inclut l'aptitude à… (plusieurs réponses)", opts:["purger ou isoler l'équipement de frein","remplacer un boyau de frein","isoler la suspension pneumatique","homologuer un nouvel engin moteur"], correct:[0,1,2], expOk:"Elle inclut : purger/isoler le frein, remplacer un boyau, desservir les freins d'immobilisation, isoler la suspension pneumatique, remédier aux fuites d'air, juger la poursuite après anomalie MR.", expNo:"L'homologation d'un engin n'en fait pas partie. Les aptitudes visent le frein, les boyaux, la suspension, les fuites d'air, etc.", ref:"HLT I.2 – art. 5.1, p. 501" },
  { id:"q98", ch:3, lvl:"x", type:"qcm", q:"Quel livre d'ordres contient le calendrier des formations permanentes ?", opts:["le LO6","le LO5","le LO4","le LO2"], correct:[0], expOk:"Le LO6 (avis administratifs de l'encadrement du conducteur) contient le calendrier des formations permanentes et les avis du Senior Manager District.", expNo:"C'est le LO6. Le LO5 contient les avis administratifs de la direction B-TO.", ref:"HLT I.3 – art. 1.8.6, p. 105" },
  { id:"q99", ch:3, lvl:"x", type:"qcm", q:"En l'absence de relais et en situation INMAIN, le conducteur notifie les instructions via…", opts:["la partie D du TC612","les pages de communication du livre de bord","un D233","un M355"], correct:[0], expOk:"En INMAIN sans relais, les instructions/documents se notifient via la partie D du TC612. Dans les autres cas (ex. mise à plat), via les pages de communication du livre de bord.", expNo:"En INMAIN, c'est la partie D du TC612 ; les pages du livre de bord servent dans les autres cas (mise à plat).", ref:"HLT I.3 – art. 3.6.1, p. 304" },
  { id:"q100", ch:3, lvl:"x", type:"qrm", q:"Un agent Infrabel a toujours priorité en cabine lorsqu'il transmet… (plusieurs réponses)", opts:["une IE.5 avec champ x.91 « Reconnaissance météo »","une IE.6 avec champ x.91 « Avarie probable à l'infrastructure »","une IE.1 de perte de document","un TC612 d'INMAIN"], correct:[0,1], expOk:"L'agent Infrabel prenant part à un parcours pour une IE.5 (reconnaissance météo) ou une IE.6 (avarie probable à l'infrastructure) a toujours priorité en cabine.", expNo:"La priorité s'applique aux parcours liés à une IE.5 (reconnaissance météo) ou une IE.6 (avarie probable). Ni l'IE.1 ni le TC612 ne donnent cette priorité.", ref:"HLT I.3 – art. 3.8.1, p. 307" },
  { id:"q101", ch:3, lvl:"x", type:"qcm", q:"Sur le réseau Infrabel, à quoi correspond l'avis de sécurité « ACPA » ?", opts:["circulation avec pantographes abaissés","réduction temporaire de vitesse","raccourcissement de quai","arrêt exceptionnel"], correct:[0], expOk:"ACPA = avis de circulation avec pantographes abaissés. ART = réduction de vitesse, ARQ = raccourcissement de quai.", expNo:"ACPA = pantographes abaissés. ART = vitesse, ARQ = quai.", ref:"HLT I.3 – art. 1.7, p. 103" },
  { id:"q102", ch:3, lvl:"x", type:"qcm", q:"Quelle clef est remise au conducteur appelé à desservir les locomotives TRAXX ?", opts:["une clef d'accès aux cabines TRAXX accompagnée d'une clef DOM","une clef LITTO","une clef WILKA G","une clef à trois branches"], correct:[0], expOk:"Le conducteur desservant les TRAXX reçoit une clef d'accès à leurs cabines, accompagnée d'une clef DOM. La clef LITTO concerne l'armoire à outillage des AM/AR.", expNo:"Pour les TRAXX : clef d'accès cabine + clef DOM. La clef LITTO sert pour les AM/AR.", ref:"HLT I.3 – annexe I, art. 1" },
  { id:"q103", ch:3, lvl:"x", type:"qcm", q:"Le conducteur cède la conduite à un candidat-conducteur en possession d'une licence. Dans ce cas…", opts:["le conducteur qui cède la conduite en reste le responsable","le candidat devient seul responsable","une autorisation du SSICF est requise","c'est interdit"], correct:[0], expOk:"En cédant la conduite à un candidat-conducteur (licence) ou à un conducteur en étude de ligne, le conducteur qui cède en reste responsable.", expNo:"Le conducteur qui cède la conduite à un candidat en reste responsable.", ref:"HLT I.3 – art. 3.9, p. 308" },
  { id:"q104", ch:1, lvl:"x", type:"qrm", q:"Que gère HR@YourService pour les conducteurs ? (plusieurs réponses)", opts:["les primes","les mutations","les congés de circonstance","l'attribution des sillons"], correct:[0,1,2], expOk:"HR@YourService gère primes, mutations, outillage personnel, congés de circonstance, régime de travail.", expNo:"L'attribution des sillons relève d'Infrabel (I-CBE/I-O), pas de HR@YourService.", ref:"HLT I.1 – art. 2.3.2, p. 205" },
  { id:"q105", ch:3, lvl:"x", type:"qcm", q:"Que deviennent les données sauvées dans la mémoire de l'appareil eDrive lors de son remplacement ?", opts:["elles sont perdues","elles sont automatiquement transférées","elles sont sauvegardées par le Helpdesk","elles restent sur le Smartlocker"], correct:[0], expOk:"Attention : toutes les données sauvées dans la mémoire même de l'appareil eDrive sont perdues lors du remplacement.", expNo:"Les données en mémoire locale de l'eDrive sont perdues au remplacement — d'où l'importance de la synchronisation.", ref:"HLT I.3 – art. 3.2.2, p. 302" }
];

/* ============================================================
   FLASHCARDS  — f: recto (terme/question) / b: verso (réponse)
   ============================================================ */
export const FLASHCARDS = [
  // Ch.1
  { ch:1, f:"Que signifie GI ?", b:"Gestionnaire de l'Infrastructure — Infrabel pour la quasi-totalité du réseau belge." },
  { ch:1, f:"Que signifie EF ? Et son autre nom ?", b:"Entreprise Ferroviaire, aussi appelée Utilisateur de l'Infrastructure (UI). La SNCB en est une." },
  { ch:1, f:"Les 5 Areas du réseau Infrabel", b:"NW (Nord-Ouest), NO (Nord-Est), CE (Centre), SE (Sud-Est), SO (Sud-Ouest) — elles correspondent aux districts." },
  { ch:1, f:"Reconnaître un agent du mouvement", b:"Képi bleu + gilet fluorescent au logo Infrabel." },
  { ch:1, f:"Qui est le SPOC sur un incident ?", b:"Le Leader Infrabel (brassard orange), assisté au besoin d'Adjoints Leader Infrabel." },
  { ch:1, f:"Que signifie SPAD ?", b:"Signal Passed At Danger — dépassement de signal (franchissement d'un signal fermé)." },
  { ch:1, f:"Limites du conducteur de manœuvre", b:"Rayon de 25 km autour de l'installation et vitesse maximale de 60 km/h." },
  { ch:1, f:"Rôle de l'API", b:"Assistant Post Incident : assiste le conducteur après un événement choquant/traumatisant (ex. SPAD)." },
  { ch:1, f:"Rôle du FI", b:"First Investigator : premières constatations lors d'un SPAD, d'une circulation anormale, du non-respect d'une vitesse ou d'une dérive." },
  { ch:1, f:"Que sont les écrans DISCO ?", b:"Driver Information and on Screen COmmunication — 2 écrans dans le local de prise de service (infos générales + infos CT)." },
  { ch:1, f:"Les 5 directions de la SNCB", b:"B-TO (Transport Operations), B-CS (Customer Services), B-PT (Passenger Transport & Security), B-TC (Technics), B-ST (Stations)." },
  { ch:1, f:"Rôle de la permanence conduite", b:"Gestion en temps réel des conducteurs : remplacements, suivi des services non planifiés." },

  // Ch.2
  { ch:2, f:"Formation générale → quoi ? Combien de jours ?", b:"18 jours, menant à la licence de conducteur de train." },
  { ch:2, f:"Validité de la licence", b:"10 ans (propriété du titulaire), tant que les examens médicaux/psycho sont satisfaits." },
  { ch:2, f:"Validité de l'attestation complémentaire", b:"3 ans. Délivrée par l'UI employeuse, dont elle reste la propriété." },
  { ch:2, f:"Catégories de conduite A1 / A4 / B1 / B2", b:"A1 : locos de manœuvre · A4 : autres locos de manœuvre · B1 : transport de personnes · B2 : marchandises." },
  { ch:2, f:"Seuil de réussite des évaluations (ligne & matériel)", b:"60 % minimum, sans faute grave contre la sécurité." },
  { ch:2, f:"Niveau linguistique requis (depuis 2016)", b:"Niveau B1, avec des questions types validées par le SSICF." },
  { ch:2, f:"Périodicité visite médicale / psychotechnique", b:"Médicale : chaque année (approfondie tous les 3 ans, annuelle dès 55 ans). Psychotechnique : tous les 10 ans." },
  { ch:2, f:"Codes langues sur l'attestation", b:"F (français), N (néerlandais), E (anglais), D (allemand)." },
  { ch:2, f:"Seuil alcool / interruption tâches critiques", b:"0,2 ‰ d'alcool (ou stupéfiants) → risque justifiant l'interruption des tâches critiques de sécurité." },
  { ch:2, f:"Connaissance de ligne : délai de notification au M510e", b:"Plus de parcours depuis 10 mois → notification au M510e. Un parcours dans les 12 mois prolonge la connaissance." },
  { ch:2, f:"Engins moteurs : familles principales", b:"Locomotives HL (HLE électrique, HLD/HLR diesel), automoteurs (TGV, AM, AR) et voiture pilote HVR(m)." },
  { ch:2, f:"Quand le conducteur est-il piloté ?", b:"S'il n'a pas d'attestation valable pour le réseau, ou pas la connaissance de ligne requise." },

  // Ch.3
  { ch:3, f:"Qu'est-ce que l'eDrive ?", b:"La tablette du conducteur ; l'eDrive-app contient ses prescriptions (icône Bibliothèque : Communications + Documents)." },
  { ch:3, f:"eSEMES vs SEMES 2.0", b:"eSEMES est intégré à l'eDrive-app ; SEMES 2.0 ne l'est pas (accès via LO1/INF ou Driver-tools-app)." },
  { ch:3, f:"Les 3 avis de sécurité Infrabel", b:"ART (réduction temporaire de vitesse), ACPA (pantographes abaissés), ARQ (raccourcissement de quai)." },
  { ch:3, f:"Pour quel avis le schéma est-il obligatoire ?", b:"Pour un ARQ (raccourcissement de quai)." },
  { ch:3, f:"M510e vs M510 vs M510bis", b:"M510e = rapport digital · M510 = version papier · M510bis = avis urgents / conditions météo exceptionnelles." },
  { ch:3, f:"Que contient le LO3 ?", b:"Les suppléments (provisoires et définitifs) au livret HLT I à VIII." },
  { ch:3, f:"À quoi sert le Memento ?", b:"Rappeler l'ordre chronologique des opérations, à consulter uniquement à l'arrêt. Il ne remplace pas le HLT." },
  { ch:3, f:"Comportements interdits pendant la conduite", b:"Pas de musique, pas d'appareil multimédia personnel sur le pupitre ; rapport limité à de brèves infos." },
  { ch:3, f:"Qu'est-ce qu'un parcours HLP ?", b:"Haut Le Pied : le conducteur est transporté dans un véhicule sans en assurer la conduite." },
  { ch:3, f:"SOC injoignable lors d'une agression →", b:"Contacter le 112." },
  { ch:3, f:"Permis d'accès en cabine de conduite", b:"Permanents : TR-X01, TR-X02. Temporaires : TR-X03, TR-X04 (avec n° de train et date)." },
  { ch:3, f:"Reprise après maladie : délai d'info", b:"Prévenir la permanence conduite au plus tard pour midi le jour précédant la reprise." }
];

/* ============================================================
   GLOSSAIRE — t: sigle · d: définition · ch: chapitre principal
   ============================================================ */
export const GLOSSARY = [
  { t:"GI", ch:1, d:"Gestionnaire de l'Infrastructure (Infrabel pour le réseau belge)." },
  { t:"EF", ch:1, d:"Entreprise Ferroviaire, aussi appelée Utilisateur de l'Infrastructure (UI)." },
  { t:"UI", ch:1, d:"Utilisateur de l'Infrastructure — autre nom d'une entreprise ferroviaire." },
  { t:"I-CBE", ch:1, d:"Infrabel — Customer & Business Excellence (sécurité d'exploitation, sillons prévus, ponctualité)." },
  { t:"I-O", ch:1, d:"Infrabel — Operation : régulation du trafic, sillons imprévus, caténaires, maintenance." },
  { t:"CD / OCT / VCO", ch:1, d:"Central Dispatch : organe national d'appui aux postes de signalisation en cas de perturbation." },
  { t:"TO", ch:1, d:"Traffic Officer — responsable de la gestion temps réel du CD / organisation du poste de signalisation." },
  { t:"RT QO", ch:1, d:"Real Time Quality Officer — traitement des dossiers de retards." },
  { t:"IP", ch:1, d:"Information Provider — collecte et diffusion d'infos sur incidents et perturbations." },
  { t:"CDr", ch:1, d:"Central Dispatcher — gestion des incidents majeurs." },
  { t:"TPM", ch:1, d:"Train Path Manager — attribution des sillons en temps réel." },
  { t:"FSv", ch:1, d:"Freight Supervisor — suivi et ajustement du trafic marchandises." },
  { t:"RTA", ch:1, d:"Realtime Analyst — analyse des retards en temps réel." },
  { t:"RIOC", ch:1, d:"Rail Infrastructure Operation Center — irrégularités à l'infrastructure et suivi des réparations." },
  { t:"SPOC", ch:1, d:"Single Point Of Contact — représentant unique (ex. Leader Infrabel) sur un incident." },
  { t:"Répartiteur CT", ch:1, d:"Répartiteur courant-traction : gère sous-stations et postes de sectionnement, peut couper la caténaire." },
  { t:"B-TO", ch:1, d:"SNCB Transport Operations — dont le personnel de conduite (B-TO.1/2/3) et la gestion du trafic (B-TO.4)." },
  { t:"B-CS", ch:1, d:"SNCB Customer Services — dont les accompagnateurs de train (B-CS.5)." },
  { t:"B-PT", ch:1, d:"SNCB Passenger Transport & Security — accueil, sécurité, plan de transport, info voyageurs." },
  { t:"B-TC", ch:1, d:"SNCB Technics — maintenance du matériel roulant, études techniques, freinage." },
  { t:"B-ST", ch:1, d:"SNCB Stations — gestion des gares." },
  { t:"CT", ch:1, d:"Conducteur de Train — personnel de sécurité réalisant des tâches critiques de sécurité." },
  { t:"SPAD", ch:1, d:"Signal Passed At Danger — dépassement (franchissement) d'un signal fermé." },
  { t:"API", ch:1, d:"Assistant Post Incident — assiste le conducteur après un événement traumatisant." },
  { t:"FI", ch:1, d:"First Investigator — premières constatations (SPAD, circulation anormale, dérive…)." },
  { t:"DISCO", ch:1, d:"Driver Information and on Screen COmmunication — écrans du local de prise de service." },
  { t:"CCT", ch:1, d:"Coordination Centrale Traction — sillons temps réel, trains de relevage, avis de sécurité urgents." },
  { t:"RCC", ch:1, d:"Realtime Coordination Center — héberge la CCT, le Helpdesk, la gestion MR." },
  { t:"SSICF", ch:2, d:"Service de Sécurité du gouvernement fédéral habilité à contrôler licence et attestation." },
  { t:"TVM", ch:2, d:"Transmission Voie-Machine — système de signalisation en cabine (mention sur l'attestation)." },
  { t:"ETCS", ch:2, d:"European Train Control System — niveaux 1/2, lignes LAT (latérale) ou REP (repères d'arrêt)." },
  { t:"A1 / A4", ch:2, d:"Catégories de conduite — locomotives de manœuvre." },
  { t:"B1 / B2", ch:2, d:"Catégories de conduite — B1 : transport de personnes · B2 : marchandises." },
  { t:"ELAN", ch:2, d:"Cursus de formation mis à disposition sur l'eDrive-app." },
  { t:"MR", ch:2, d:"Matériel Roulant — véhicules remorqués et engins moteurs." },
  { t:"HLE / HLD / HLR", ch:2, d:"Locomotives électrique (HLE) et diesel (HLD/HLR)." },
  { t:"AM / AR", ch:2, d:"Automotrice électrique (AM) et autorail diesel (AR)." },
  { t:"HVR(m)", ch:2, d:"Voiture pilote (motorisée) d'une rame réversible (RR)." },
  { t:"eDrive", ch:3, d:"Tablette du conducteur ; l'eDrive-app contient prescriptions, rapports et outils." },
  { t:"HLT", ch:3, d:"Livret de prescriptions du conducteur (8 fascicules) ; « Livret de procédures » au sens STI." },
  { t:"RDEI / RGE", ch:3, d:"Prescriptions Infrabel : Réglementation et Documentation pour l'Exploitation (RDEI) et Règlement Général (RGE)." },
  { t:"REX", ch:3, d:"Retour d'EXpérience — communications B-TO publiées au LO4." },
  { t:"LO1…LO6 / iLO", ch:3, d:"Livres d'ordres : LO1 (SEMES 2.0), LO2 (infra), LO3 (suppléments HLT), LO4 (REX), LO5/LO6 (admin), iLO (international)." },
  { t:"SEMES / eSEMES", ch:3, d:"Publications de sécurité Infrabel ; eSEMES est intégré à l'eDrive-app." },
  { t:"SEMES 2.0", ch:3, d:"Version non intégrée à l'eDrive-app (accès via LO1/INF ou Driver-tools) ; « Livret de ligne » au sens STI." },
  { t:"ART", ch:3, d:"Avis de Réduction Temporaire de vitesse." },
  { t:"ACPA", ch:3, d:"Avis de Circulation avec Pantographes Abaissés." },
  { t:"ARQ", ch:3, d:"Avis de Raccourcissement de Quai (consultation du schéma obligatoire)." },
  { t:"PSS", ch:3, d:"Plan Schématique de Signalisation — signaux, gares et lignes de façon schématique." },
  { t:"M510 / M510e", ch:3, d:"Rapport du conducteur — papier (M510) ou digital (M510e)." },
  { t:"M510bis", ch:3, d:"Document pour avis urgents et conditions météorologiques exceptionnelles (parties A, B, C)." },
  { t:"HLP", ch:3, d:"Haut Le Pied — le conducteur est transporté sans assurer la conduite." },
  { t:"VK.PC", ch:3, d:"Préparation complète d'un engin moteur (ou PC-EJ pour certains TGV)." },
  { t:"BK.PR", ch:3, d:"Préparation réduite d'un engin moteur." },
  { t:"INMAIN", ch:3, d:"Mise en « maintien de service » d'un engin moteur." },
  { t:"IDREM", ch:3, d:"Prise en charge d'un engin moteur mis en maintien de service (INMAIN)." },
  { t:"RAMAN", ch:3, d:"Mouvement de manœuvre (le code XX indique le client)." },
  { t:"B-PII", ch:3, d:"Plan Interne d'Intervention de la SNCB, intégré au Système de Gestion de la Sécurité (SGS)." },
  { t:"SOC", ch:3, d:"Security Operations Center — contact en cas d'agression/vandalisme (sinon 112)." },
  { t:"TR-X01…04", ch:3, d:"Permis d'accès en cabine : TR-X01/02 permanents, TR-X03/04 temporaires." },
  { t:"D24", ch:3, d:"Fiche de distribution des instructions, signée à chaque remise personnelle." }
];

/* ============================================================
   ANNEXES & RÉFÉRENCES  — matériel de consultation exhaustif
   (cas d'appel, tables d'abréviations, codes…)
   ============================================================ */
const thS='padding:8px 11px;text-align:left;background:#F2EEE4;font-weight:700;border-bottom:2px solid #E4DBC9;font-size:.74em;text-transform:uppercase;letter-spacing:.5px;color:#5C6860';
const tdS='padding:8px 11px;border-bottom:1px solid #EFE9DC;vertical-align:top;line-height:1.45';
const tbl=(head,rows)=>'<div style="overflow-x:auto;margin:8px 0 14px;border:1px solid #ECE4D6;border-radius:12px">'+
  '<table style="width:100%;border-collapse:collapse;font-size:.92em">'+
  '<thead><tr>'+head.map(h=>'<th style="'+thS+'">'+h+'</th>').join('')+'</tr></thead><tbody>'+
  rows.map(r=>'<tr>'+r.map((c,ci)=>'<td style="'+tdS+(ci===0?';font-weight:700;white-space:nowrap;color:#19273D':'')+'">'+c+'</td>').join('')+'</tr>').join('')+
  '</tbody></table></div>';

const ANNEXES = {
  1: [
    { t:"Organisation détaillée des directions SNCB", h:
      `${sub("B-TO — Transport Operations")}<ul style="${UL}">${li("<strong>B-TO.1 / .2 / .3</strong> : personnel de conduite (suivi, planning matériel et personnel, formation, prescriptions de conduite)")}${li("<strong>B-TO.4</strong> : gestion opérationnelle du trafic")}</ul>
       ${sub("B-CS — Customer Services")}<ul style="${UL}">${li("<strong>B-CS.1</strong> : opérations commerciales clients")}${li("<strong>B-CS.3</strong> : marketing clients")}${li("<strong>B-CS.5</strong> : personnel d'accompagnement des trains")}</ul>
       ${sub("B-PT — Passenger Transport & Security")}<ul style="${UL}">${li("<strong>B-PT.2</strong> : accueil voyageurs et opérations gares")}${li("<strong>B-PT.3</strong> : personnel de sécurité")}${li("<strong>B-PT.4</strong> : plan de transport")}${li("<strong>B-PT.5</strong> : information aux voyageurs")}</ul>
       ${sub("B-TC — Technics")}<ul style="${UL}">${li("<strong>B-TC.2</strong> : maintenance du matériel roulant et gestion des DMR")}${li("<strong>B-TC.4</strong> : études techniques du matériel roulant et prescriptions de freinage")}</ul>
       ${sub("B-ST — Stations")}<p style="${P}">Gestion des gares (ex. maintenance).</p>` },
    { t:"Districts & zones (5 districts · 13 zones)", h:
      `<p style="${P}">Les dépôts sont regroupés en zones géographiques, rattachées aux 5 districts.</p>
       ${tbl(["District","Zones"],[
         ["NO","Antwerpen · Hasselt · Leuven"],
         ["NW","Brugge · Gent-Oudenaarde · Kortrijk · Waasland-Dender"],
         ["SO","Charleroi · Mons"],
         ["SE","Arlon · Liège · Namur"],
         ["CE","Bruxelles"]])}` },
    { t:"Annexe II — Cas d'appel de la permanence conduite", h:
      `<p style="${P}">Le conducteur contacte la <strong>permanence conduite</strong>, entre autres, lorsqu'il :</p>
       <ul style="${UL}">
       ${li("est reconnu inapte (visite médicale, tests psychotechniques), ou doute de son aptitude hors visite annuelle ;")}
       ${li("lors d'un contrôle, l'employé du SSICF demande un complément d'info ou fait une/des constatation(s) ;")}
       ${li("ne peut prendre connaissance des publications SEMES / avis urgents via SEMES 2.0 ;")}
       ${li("ne peut synchroniser l'eDrive-app ;")}
       ${li("constate, avant la conduite, qu'il n'a pas les compétences requises (connaissance de ligne / matériel) ;")}
       ${li("est victime d'un événement choquant à caractère traumatisant (organiser la prise en charge) ;")}
       ${li("rencontre un problème avec les bouteilles d'eau réfrigérées (chaleur) ;")}
       ${li("ne peut, en fin de service, prendre connaissance ou exécuter sa prochaine prestation (ex. pas de connaissance de ligne) ;")}
       ${li("est absent (maladie/accident) : ne pourra assurer un service, prolongation, ou reprise (au plus tard midi la veille) ;")}
       ${li("constate l'indisponibilité de l'horaire et ne peut l'obtenir via le chef de bord ;")}
       ${li("subit un dérangement, une perte ou un vol de son GSM de service (ou reçoit un GSM de remplacement) ;")}
       ${li("prévoit un retard à la prise en charge d'engins moteurs ;")}
       ${li("a une BK.PR prévue alors que la VK.PC n'est plus valide ;")}
       ${li("constate des situations irrégulières lors d'un INMAIN / d'un gardiennage (anomalie MR, absence de TC612…) ;")}
       ${li("constate, lors d'un relais, l'absence du conducteur relayant ;")}
       ${li("doit s'éloigner plus de 30 min d'un convoi occupé non surveillé par du personnel habilité ;")}
       ${li("ne peut joindre le gestionnaire local de l'installation SNCB.")}
       </ul>` },
    { t:"Annexe III — Cas d'appel du gestionnaire local SNCB", h:
      `<p style="${P}">Le conducteur contacte le <strong>gestionnaire local de l'installation SNCB</strong>, entre autres, lorsqu'il :</p>
       <ul style="${UL}">
       ${li("souhaite une bouteille d'eau réfrigérée (périodes de chaleur) ;")}
       ${li("réalise une étude de gare (mouvements de manœuvre réguliers, particularités locales) ;")}
       ${li("lors d'une perturbation importante : doit faire un parcours HLP, ou est réserve/stand-by sans opération dans la demi-heure ;")}
       ${li("constate une anomalie à une traverse d'écartement ;")}
       ${li("doit annoncer verbalement « Prêt au départ » / « Non prêt au départ » (retard &gt; 3 min) ou une manœuvre « Prête au départ » ;")}
       ${li("ne peut faire partir un train hors réseau Infrabel ;")}
       ${li("rencontre des circonstances atmosphériques exceptionnelles ou des faisceaux/voies inhabituels (guidage) ;")}
       ${li("arrive pour la prise en charge d'engins moteurs, ou constate une pancarte de danger CC / signal mobile rouge / plaquette d'interdiction sur coupleurs HT ;")}
       ${li("après prise en charge : ne pourra partir à l'heure, a besoin d'un 2ᵉ agent pour l'essai des freins, ou le convoi est prêt ;")}
       ${li("est en INMAIN (depuis quelle CC la conduite sera assurée) ou constate des situations irrégulières INMAIN / IDREM ;")}
       ${li("constate une anomalie MR impactant sécurité/ponctualité (retard &gt; 3 min) en gare de départ ou préparation ;")}
       ${li("ne reçoit pas de réponse du répartiteur MR (contacter le dépanneur/visiteur) ;")}
       ${li("constate qu'un pantographe (préclimatisation/préchauffage) n'est plus utilisable ;")}
       ${li("constate une clé RIC manquante / un jeu de clés incomplet, ou un signe d'interdiction sur un PC sans agent présent ;")}
       ${li("doit réaliser l'appoint des sablières (emplacement des réserves de sable).")}
       </ul>` }
  ],
  2: [
    { t:"Pilotage — responsabilités détaillées", h:
      `${sub("Le pilote (dans tous les cas)")}<ul style="${UL}">${li("possède une attestation complémentaire valable ;")}${li("connaît suffisamment la langue du conducteur piloté ;")}${li("se tient à ses côtés pendant la conduite. Le GI est informé préalablement à chaque appel à un pilote.")}</ul>
       ${sub("Cas 1 — pas d'attestation valable pour le réseau / voie hors service")}
       <p style="${P}"><strong>Conducteur piloté :</strong> peut conduire si le matériel est repris à son attestation ; indique au pilote la vitesse maximale technique et le % de frein.</p>
       <p style="${P}"><strong>Pilote :</strong> détermine et indique la vitesse maximale autorisée ; s'informe sur la façon d'arrêter/immobiliser ; est responsable de la signalisation, de la circulation et des particularités ; donne les instructions de conduite.</p>
       ${sub("Cas 2 — pas la connaissance de ligne")}
       <p style="${P}"><strong>Conducteur piloté :</strong> indique la vitesse maximale autorisée ; reste responsable du freinage du convoi.</p>
       <p style="${P}"><strong>Pilote :</strong> s'informe sur l'arrêt/immobilisation ; est responsable de la signalisation/circulation et des particularités ; donne les instructions de conduite.</p>
       ${note("Le pilotage peut aussi être organisé pour : matériel historique, train de marchandises extraordinaire (accord du GI), livraison/présentation d'un nouveau matériel, formation et contrôle du conducteur.")}` },
    { t:"Licence & attestation — recto / verso en détail", h:
      `${sub("Recto de la licence")}<ul style="${UL}">${li("nom, prénom, lieu et date de naissance (rubriques 1-3) ;")}${li("date de délivrance et de fin de validité (4a, 4b) ;")}${li("état membre et instance compétente (4c), n° d'identification facultatif (4d) ;")}${li("numéro de licence (5), photo et signature (6, 7) ; + un hologramme.")}</ul>
       ${sub("Verso de la licence")}<ul style="${UL}">${li("adresse du titulaire (8, facultatif) ;")}${li("langue maternelle (9a.1), n° de licence (9a.2) ;")}${li("particularités médicales (9b) : case 1 = lunettes/lentilles, case 2 = appareil auditif.")}</ul>
       ${sub("Attestation complémentaire")}<p style="${P}">Imprimée sur papier spécial estampillé. Rubriques 1-2 : infos générales (délivrance, validité, n° licence, identité, adresse de l'employeur). Rubrique 3 : catégories (A1/A4/B1/B2). Rubrique 4 : infos additionnelles (TVM, ETCS…). Rubrique 5 : langues (F/N/E/D). Rubrique 6 : restrictions. Rubrique 7 : matériel roulant. Rubrique 8 : infrastructure.</p>` }
  ],
  3: [
    { t:"Fiches de déviation — classification", h:
      `<p style="${P}">Les itinéraires de déviation sont classés par axe :</p>
       ${tbl(["Série","Axe"],[
         ["1XX","Bruxelles (Nord)"],["15X","Bruxelles (Sud)"],
         ["2XX","Axe Bruxelles – Pays-Bas (Prorail)"],["3XX","Dorsale Nord"],
         ["4XX","Axe Bruxelles – Allemagne (DB Netz)"],["5XX","Dorsale Sud"],
         ["6XX","Axe Bruxelles – Luxembourg (RFNL)"],["7XX","Axe Bruxelles – Charleroi"],
         ["8XX","Axe Bruxelles – France (RFF)"],["9XX","Axe Bruxelles – Côte"]])}
       ${note("<strong>Double flèche / trait épais</strong> = itinéraire réversible ; <strong>flèche simple / trait fin</strong> = non réversible.")}` },
    { t:"Indice du numéro de train", h:
      `<p style="${P}">L'indice précise le mode de traction et le type de matériel ; les lettres sont converties en chiffres pour la radio GSM-R.</p>
       ${tbl(["Indice","Signification","Chiffre"],[
         ["E / Z","Traction électrique / diesel","aucun"],
         ["—","Transport exceptionnel","1"],
         ["(rame) pour / du train","HLE-HLD pour la rame de voitures","2 / 3"],
         ["LE / LZ / ME / MZ","HLE / HLD / AM / AR pour le train","4"],
         ["EL / ZL / EM / ZM","HLE / HLD / AM / AR du train","5"],
         ["RE / RZ","Rame de voitures pour le train (remorquée)","6"],
         ["ER / ZR","Rame de voitures du train","7"],
         ["LLE / LLZ","HLE / HLD d'allège pour le train","8"],
         ["ELL / ZLL","HLE / HLD d'allège du train","9"]])}` },
    { t:"Séries de numéros de train", h:
      `${sub("Service intérieur")}
       ${tbl(["Série","Catégorie"],[
         ["100-149 · 400-999 · 1500-6999 · 7000-8999","Trains IC, L et P"],
         ["13000-13999","Trains de remplacement"],
         ["14000-14499","Charters"],
         ["15000-15099","Trains de personnel"],
         ["16100-16499","Parcours d'essai et d'homologation (Infrabel)"],
         ["17200-17799 · 18300-18499","Trains extraordinaires"],
         ["18000-18099","Trains touristiques"],
         ["18100-18299","Trains express"]])}
       ${sub("Service international (extrait)")}
       ${tbl(["Série","Relation"],[
         ["10-19 · 314-319","ICE Bruxelles – Francfort"],
         ["50-79","Bruxelles – Paris non-TGV"],
         ["9100-9199","Eurostar Londres – Bruxelles – Amsterdam"],
         ["9200-9299","IC Bruxelles – Amsterdam (via Brussels Airport)"],
         ["9300-9399","Eurostar Paris – Bruxelles – Amsterdam"],
         ["9400-9489","Eurostar Paris – Bruxelles – Cologne"],
         ["9800-9899","TGV"],["9900-9999","Eurostar (saisonnier)"]])}` },
    { t:"Codes relatifs aux locomotives", h:
      `<p style="${P}">Ajouté en fin de numéro de train pour certaines compositions (converti en chiffre pour ATLAS).</p>
       ${tbl(["Code","Signification","Chiffre"],[
         ["X","HL d'allège","1"],["Q","HL d'allège en queue","2"],
         ["V","HL comme véhicule","3"],["U","HL en unité multiple (un seul conducteur)","4"],
         ["D","Deux HL, chacune desservie par un conducteur","aucun"],
         ["Y","HL acheminée en queue comme véhicule","aucun"],
         ["R","Rame réversible encadrée par 2 HL","6"],
         ["A","Rame réversible : HL en tête + HVR en queue","7"],
         ["Z","Rame réversible : HVR en tête + HL en queue","8"],
         ["M","Rame réversible encadrée par 2 HVR","9"]])}` },
    { t:"Abréviations de la fiche de prestation / service", h:
      `${tbl(["Abrév.","Signification"],[
         ["AFREL","Relais du conducteur"],["AFREL DP","Relayé par conducteur"],
         ["BEGAR","Gardiennage d'engin moteur dans une installation"],
         ["BEVAP","Approvisionnement carburant"],
         ["BK.PR","Préparation réduite d'un engin moteur"],
         ["BNX","Arrêt supplémentaire imposé par un BNX"],
         ["CAR-WASH","Passage au carwash"],["DECUIT","Fin de découcher"],
         ["EXT","Arrêt prévu nécessitant une attention particulière"],
         ["FREE","Convoi en roue libre"],
         ["XX HLP","Parcours HLP (XX = moyen de transport)"],
         ["HPV","Train de matériel à voyageurs à vide, non accompagné"],
         ["HPM","Locomotive circulant à vide du / pour le train de marchandise"],
         ["IDREM","Prise en charge d'un engin moteur mis en INMAIN"],
         ["INMAIN","Mise en « maintien de service » d'un engin moteur"],
         ["KOPCP","Accouplement (par le conducteur)"],
         ["ONTDC","Désaccouplement (par le conducteur)"],
         ["M22","Stationnement pour entretien"],
         ["OPMRMQ","Remarque relative au service"],
         ["PAU","Pause (prestation internationale)"],
         ["PERQUAI","Mise à quai du convoi"],["PLANT XX","Planton (XX = client)"],
         ["PLAT","Mise à plat de l'engin moteur"],["PRESTA","Prestation"],
         ["RAMAN XX","Mouvement de manœuvre (XX = client)"],
         ["RES","Réserve"],["STABY / STANDBY","Stand-by"],
         ["SV","Stationnement pour le service de visite"],
         ["TRANSFER","Transfert d'un convoi entre faisceaux"],
         ["UITDEC","Début de découcher prévu"],["UITGAR","Garage du convoi"],
         ["VK.PC","Préparation complète d'engin(s) (ou PC-EJ pour TGV)"],
         ["VOETPIED","Déplacement pédestre"],
         ["&lt;","Arrêt de service à toujours respecter"],
         ["&gt;","Arrêt à respecter si le signal de couverture impose l'arrêt"]])}` },
    { t:"Prescriptions complémentaires", h:
      `<ul style="${UL}">
       ${li("<strong>Livret de sécurité</strong> : port des équipements de sécurité personnels, consignes de déplacement le long des voies.")}
       ${li("<strong>Fiches d'information</strong> : prescriptions particulières à certains endroits (eDrive icône INF, Webe).")}
       ${li("<strong>Protocole local</strong> : établi pour chaque gare (mouvements de manœuvre autorisés, chemins de service, particularités locales).")}
       ${li("<strong>Directives HR</strong> : livre d'ordres électronique HR Rail publié 1×/semaine.")}
       ${li("<strong>Réglementation des réseaux étrangers</strong> : règlements du réseau partenaire + extrait B-TO.2, collection consultable au dépôt.")}
       </ul>` }
  ]
};
COURSE.forEach(c=>{ c.annexes = ANNEXES[c.ch] || []; });

/* compléments du glossaire — abréviations de la fiche de prestation */
GLOSSARY.push(
  { t:"AFREL", ch:3, d:"Relais du conducteur (AFREL DP : relayé par un conducteur)." },
  { t:"BEGAR", ch:3, d:"Gardiennage d'un engin moteur dans une installation." },
  { t:"BEVAP", ch:3, d:"Approvisionnement en carburant." },
  { t:"BNX", ch:3, d:"Arrêt supplémentaire imposé par un BNX." },
  { t:"HPV", ch:3, d:"Train de matériel à voyageurs à vide, non accompagné." },
  { t:"HPM", ch:3, d:"Locomotive circulant à vide du / pour le train de marchandise." },
  { t:"KOPCP", ch:3, d:"Accouplement effectué par le conducteur (ONTDC : désaccouplement)." },
  { t:"PERQUAI", ch:3, d:"Mise à quai du convoi." },
  { t:"PLAT", ch:3, d:"Mise à plat de l'engin moteur." },
  { t:"RES / STANDBY", ch:3, d:"Réserve / stand-by — période sans conduite ni opération planifiée." },
  { t:"TRANSFER", ch:3, d:"Transfert d'un convoi entre faisceaux d'une même installation." },
  { t:"DMR", ch:1, d:"Dispatcher / dépanneur du matériel roulant (gestion et dépannage du MR)." },
  { t:"SGS", ch:3, d:"Système de Gestion de la Sécurité de la SNCB (dont relève le B-PII)." },
  { t:"RIC", ch:3, d:"Clé RIC — clé liée aux coupleurs HT / échange d'énergie entre véhicules." }
);

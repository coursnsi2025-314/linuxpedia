// Gestion du stockage local des articles
let articles = JSON.parse(localStorage.getItem('articles')) || [
    { titre: "Ubuntu 22.04", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Arch Linux", categorie: "distribution", contenu: "Arch linux est une distribution linux très appréciée par les gens n'ayant pas une très grand vie sociale ou hygiène. Elle est apprecié pour sa flexibilitée, ce qui implique également qu'elle prend pas mal de temps a etre mise en place de zero. Sinon elle est très bien car elle permet une customisation exellente sans non plus être trop dure a utiliser", tags: ["weebs", "basement_dwelers", "Arch"] },
    { titre: "Linux Mint", categorie: "distribution", contenu: "Une distribution Linux très simplifié et clé en mains, conçue pour les nouveaux utilisateurs venus de windows ou macOS, elle se concentre sur le simplicitée.", tags: ["Cinnamon", "ubuntu", "simple"] },
    { titre: "Zorin OS", categorie: "distribution", contenu: "Une distribution Linux très simplifiée, un peut comme Linux Mint mais plus pratique pour les entreprises et la connectivitée entre les appareils, comme avec l'application zorin connect pour connecter son téléphone", tags: ["ubuntu", "zorin", "gnome"] },
    { titre: "Fedora", categorie: "distribution", contenu: "Fedora est un grand groupe de distributions, basé sur un mélange de stabilitée et de nouveautées, permettant ue bonne stabilitée et des fonctionnalitées récentes, un peut comme un mélange entre débian et arch", tags: ["fedora, "innovation", "gnome"] },
    { titre: "Pop_OS", categorie: "distribution", contenu: "Pop_OS est une version dérivé de Ubuntu, utilisant l'environement de bureau appelé cosmic. Cette version se concentre sur une intergration incroyable des cartes Nvidia, grace a ces liens avec cette entreprise", tags: ["ubuntu", "nvidia", "cosmic"] },
    { titre: "bazzite", categorie: "distribution", contenu: "Une version basée sur Fedora, concentré sur le gaming mais permettant une utilisation de bureau normale. Cette version viens avec des intégration de steam et proton très performantes", tags: ["fedora", "proton", "gaming"] },
    { titre: "Raspberry pi OS", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Android", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "AMD", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Intel", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Nvidia", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Open SUSE", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Cent OS", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Ubuntu Server", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Direct X", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Wayland", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Gnome", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "KDE Plasma", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "I3", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "XFCE", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Hyprland", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Cinnamon", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
    { titre: "Commande grep", categorie: "commande", contenu: "La commande grep est un outil en ligne de commande utilisé pour rechercher du texte ou des expressions régulières dans des fichiers. Elle est très utile pour filtrer des logs ou des sorties de commandes.", tags: ["grep", "terminal", "recherche"] },
    { titre: "Installer Apache", categorie: "tutoriel", contenu: "Ce tutoriel explique comment installer et configurer le serveur web Apache sur une distribution Linux. Apache est l'un des serveurs web les plus utilisés au monde.", tags: ["apache", "web", "serveur"] },
];

// Sauvegarder les articles dans localStorage
function sauvegarderArticles() {
    localStorage.setItem('articles', JSON.stringify(articles));
}

// Afficher les derniers articles sur la page d'accueil
function afficherDerniersArticles() {
    const container = document.getElementById('derniers-articles');
    if (container) {
        container.innerHTML = '';
        articles.slice(0, 5).forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h4>${article.titre}</h4>
                <p>${article.contenu.substring(0, 150)}...</p>
                <small>Catégorie: ${article.categorie}</small>
                <br>
                <a href="article.html?titre=${encodeURIComponent(article.titre)}">Lire la suite</a>
            `;
            container.appendChild(articleElement);
        });
    }
}

// Afficher un article au hasard
function afficherArticleHasard() {
    const container = document.getElementById('article-hasard');
    if (container) {
        const randomIndex = Math.floor(Math.random() * articles.length);
        const article = articles[randomIndex];
        container.innerHTML = `
            <h3>${article.titre}</h3>
            <p>${article.contenu}</p>
            <p><strong>Catégorie:</strong> ${article.categorie}</p>
            <p><strong>Tags:</strong> ${article.tags.join(', ')}</p>
            <a href="article.html?titre=${encodeURIComponent(article.titre)}">Lire la suite</a>
        `;
    }
}

// Gestion du formulaire de création d'article
function gererFormulaire() {
    const form = document.getElementById('form-article');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const titre = document.getElementById('titre').value;
            const categorie = document.getElementById('categorie').value;
            const contenu = document.getElementById('contenu').value;
            const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
            const nouvelArticle = { titre, categorie, contenu, tags };
            articles.push(nouvelArticle);
            sauvegarderArticles();
            alert('Article publié avec succès !');
            form.reset();
            window.location.href = `article.html?titre=${encodeURIComponent(titre)}`;
        });
    }
}

// Bouton "Tirer un autre article"
function gererBoutonHasard() {
    const btn = document.getElementById('btn-hasard');
    if (btn) {
        btn.addEventListener('click', afficherArticleHasard);
    }
}

// Afficher un article en détail
function afficherArticleDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const titre = urlParams.get('titre');
    if (titre) {
        const article = articles.find(a => a.titre === titre);
        if (article) {
            document.title = `${article.titre} - Linuxpedia`;
            document.querySelector('[data-titre]').textContent = article.titre;
            document.querySelector('[data-categorie]').textContent = `Catégorie : ${article.categorie}`;
            document.querySelector('[data-contenu]').textContent = article.contenu;
            document.querySelector('[data-tags]').querySelector('span').textContent = article.tags.join(', ');
        }
    }
}

// Gestion de la recherche
function gererRecherche() {
    const form = document.getElementById('search-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const recherche = document.getElementById('search-input').value.toLowerCase();
            const resultats = articles.filter(article =>
                article.titre.toLowerCase().includes(recherche) ||
                article.contenu.toLowerCase().includes(recherche) ||
                article.tags.some(tag => tag.toLowerCase().includes(recherche))
            );
            if (resultats.length > 0) {
                const container = document.getElementById('derniers-articles') || document.getElementById('article-hasard');
                if (container) {
                    container.innerHTML = '<h3>Résultats de recherche</h3>';
                    resultats.forEach(article => {
                        const articleElement = document.createElement('article');
                        articleElement.innerHTML = `
                            <h4>${article.titre}</h4>
                            <p>${article.contenu.substring(0, 150)}...</p>
                            <small>Catégorie: ${article.categorie}</small>
                            <br>
                            <a href="article.html?titre=${encodeURIComponent(article.titre)}">Lire la suite</a>
                        `;
                        container.appendChild(articleElement);
                    });
                }
            } else {
                alert('Aucun article trouvé.');
            }
        });
    }
}

// Appels des fonctions au chargement
document.addEventListener('DOMContentLoaded', () => {
    afficherDerniersArticles();
    afficherArticleHasard();
    gererFormulaire();
    gererBoutonHasard();
    gererRecherche();
    afficherArticleDetail();
});



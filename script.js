// Gestion du stockage local des articles
let articles = JSON.parse(localStorage.getItem('articles')) || [
    { titre: "Ubuntu 22.04", categorie: "distribution", contenu: "Ubuntu 22.04 LTS, nommée Jammy Jellyfish, est une version stable et populaire de Linux développée par Canonical. Elle est sortie en avril 2022 et est supportée jusqu'en 2027.", tags: ["ubuntu", "lts", "gnome"] },
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

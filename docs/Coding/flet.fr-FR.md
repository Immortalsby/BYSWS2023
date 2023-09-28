---
nav:
  title: Flet
  order: -1
group:
  title: Projet-2023
  order: 0
---

# Flet

## Découverte de Flet : Construction d'une Infrastructure d'Applications Web, Bureau et Mobiles Multi-Utilisateurs

Le mois dernier (août 2023), j'ai eu ma première véritable expérience avec Flet. J'avais entendu parler de Flet en 2022 lorsque je travaillais sur un projet Flutter, mais à l'époque, le projet était encore en phase de test bêta, alors je n'ai pas osé l'essayer. Maintenant, en 2023, je suis impatient de découvrir comment ce projet a évolué.

### Qu'est-ce que Flet ?

Flet est une infrastructure qui vous permet de construire des applications web, de bureau et mobiles interactives multi-utilisateurs en utilisant votre langage de programmation préféré, sans avoir besoin d'une expertise en développement front-end.

### Caractéristiques Clés

- **Développement Rapide** : Flet vous permet de passer du concept à l'application en quelques minutes, en servant un groupe d'utilisateurs.

- **Architecture Simplifiée** : Pas besoin d'architectures complexes comme le front-end JavaScript, le back-end REST API, les bases de données et la mise en cache. Avec Flet, vous n'avez qu'à écrire une application complète et étatique en Python pour obtenir une application monopage temps réel multi-utilisateurs (SPA).

- **Tout-en-un** : Pour commencer à développer avec Flet, tout ce dont vous avez besoin est votre IDE ou éditeur de texte préféré. Pas de SDK, pas de dépendances innombrables, pas d'outils complexes - Flet est livré avec un serveur web intégré qui héberge des ressources et des clients de bureau.

- **Alimenté par Flutter** : L'interface utilisateur de Flet est construite avec Flutter, de sorte que vos applications ont un aspect professionnel et peuvent être déployées sur n'importe quelle plateforme. Flet simplifie le modèle Flutter en composant de plus petits "widgets" en "contrôles" prêts à l'emploi avec un modèle de programmation impératif.

- **Indépendant du Langage** : Flet est indépendant du langage, ce qui permet à n'importe qui dans l'équipe de développer des applications Flet dans son langage de programmation préféré. Python est déjà pris en charge, avec Go, C# et d'autres à venir.

- **Livraison Multi-Appareils** : Déployez des applications Flet en tant qu'applications web pour les consulter dans le navigateur. Emballez-les en tant qu'applications de bureau autonomes pour Windows, macOS et Linux. Installez-les en tant que Progressive Web Apps (PWA) sur des appareils mobiles ou consultez-les via des applications Flet pour iOS et Android.

### Installation et Utilisation

Pour installer Flet, vous pouvez utiliser la commande suivante :

```
pip install flet
```

Voici un exemple simple de comptage :

```python
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "Exemple de Compteur Flet"
    page.vertical_alignment = "center"

    txt_number = TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = int(txt_number.value) - 1
        page.update()

    def plus_click(e):
        txt_number.value = int(txt_number

.value) + 1
        page.update()

    page.add(
        Row(
            [
                IconButton(icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(icons.ADD, on_click=plus_click),
            ],
            alignment="center",
        )
    )

flet.app(target=main)
```

Pour exécuter le programme, vous pouvez utiliser la commande suivante :

```
python counter.py
```

Si vous souhaitez que l'application s'exécute uniquement dans le navigateur, vous pouvez la configurer comme suit :

```
flet.app(target=main, view=flet.WEB_BROWSER)
```

Par défaut, elle s'exécute sur le bureau, mais elle démarre un serveur web sur un port aléatoire au démarrage, ce qui permet l'accès via le web.

Maintenant, laissez-moi vous parler de quelques choses incroyables que j'ai réalisées avec Flet, et vous pourrez les découvrir progressivement.

---
See on kandidaatite intervjueerimis frontend rakenduse repositoorium.
Rakendust arendatakse Tallinna Ülikooli Haapsalu kolledzi Valikpraktika raames.

Eeldused:
git (Link: https://www.atlassian.com/git/tutorials/install-git)
npm (Link: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Rakenduse jooksutamine lokaalses arvutis:

    1. Lae alla kood:
    git clone https://github.com/kristjanvoolaid/schoolint-frontend.git

    2. Liigu allalaetud koodi root kataloogi (schoolint-frontend)

    3. Installi npm sõltuvused
    npm install

    4. Jooksuta rakendus
    npm start

    5. Ava oma lemmik veebilehitsejas aadress http://localhost:3000

Arendus:

Kasutame nö "git flowd" kus uued arendused toimuvad feature harudes. Kui arendus valmis laetakse haru git'i ülesse ning tehakse pull request develop haru pihta.
Koodi vaatab üle keegi kes ei ole antud feature haru ise valmis teinud. Kui kõik on korras, mergetakse haru develop harusse.

Juhend:

    1. Kood peaks olema eelmisest juhendist arvutisse alla laetud. Tee kindlaks, et oled develop harus
    git branch // aktiivsel harul on * juures

    3. Lae alla viimane koodi seis (ilmselt on toimunud muudatusi viimase korraga kui arendusi tegid)
    git pull

    4. Tee uus branch. Nimi kujuneb selliselt - feature/TH-23-uus-nupp. Ehk feature/jira-taski-nr-mida-branchis-tegema hakkad.
    git checkout -b feature/jira-taski-nr-mida-branchis-tegema hakkad

    3. Tee vajalik arendus. Kuna oled eraldi harus, siis saad rahulikult igalpool muudatusi teha. Rakendust jooksuta samamoodi nagu esimeses juhendis

    4. Kui arendus valmis, lae haru git'i ülesse
    git add .
    git commit -m "jira taski nr mida branchis tegid"
    git push --set-upstream origin feature/jira-taski-nr-mida-branchis-tegema hakkad (ehk hetkel aktiivne branch)

    5. Tee pull request
    - Ava browseris front end git repositooriumis pull requestide aken - https://github.com/kristjanvoolaid/schoolint-frontend/pulls
    - Klikka nupul "New pull request"
    - base haruks peab olema develop
    - compare haruks sinu viimati tehtud haru
    - create

    6. Anna teada tiimile, et tegid pull requesti.




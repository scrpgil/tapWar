cd platforms/browser/www
git init
git remote add origin https://github.com/scrpgil/tapWar.git
git branch gh-pages && git checkout gh-pages && git add . &&  git commit -m "auto update" &&  git push -f origin gh-pages

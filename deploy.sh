set -e
npm run build
cd docs/.vuepress/dist
 
git init
git add -A
git commit -m 'deploy'
 
git push -f 
cd -
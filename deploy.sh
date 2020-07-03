#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tilkofjin/nest-rest-api.git master:gh-pages

cd -

#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/tilkofjin/nest-rest-api.git master:gh-pages

cd -

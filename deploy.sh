#!/usr/bin/env sh

set -e

# build
npm run build:docs

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'docs: update docs.'

git push -f git@github.com:snowycn324/tailwindcss-rtx.git master:gh-pages

cd -
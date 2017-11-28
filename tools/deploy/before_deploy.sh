#!/bin/sh

cat .gitignore | grep -v ^dist$ > temp.gitignore
mv temp.gitignore .gitignore
rm -rf node_modules

cp tools/deploy/web.config.sample dist/web.config

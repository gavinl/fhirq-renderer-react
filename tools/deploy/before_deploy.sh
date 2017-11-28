cat .gitignore | grep -v ^dist$ > temp.gitignore
mv temp.gitignore .gitignore
rm -rf node_modules coverage

cp tools/deploy/web.config.sample dist/web.config

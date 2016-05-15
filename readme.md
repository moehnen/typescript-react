# Bootstrap minimal react code with typescript & systemjs

* npm i typings jspm-server jspm@beta typescript@next -g
* jspm init .
* jspm install react-dom --save
* tsc --init
* npm init
* jspm init
* typings install react react-dom systemjs --save --ambient
* tsc --watch
* jspm-server --ignore-exts=".map.js"
* --browser-sync start --server --files "dist/*.*"--


jspm build raudit - react dist/raudit.js --format umd --global-name rAudit --global-deps "{'react':'React'}" --skip-source-maps
## see


* [functional stateless components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.f89axtdru)
* [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

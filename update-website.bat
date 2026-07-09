@echo off
REM Publica o site: adiciona tudo (a pasta admin-tool fica de fora pelo .gitignore),
REM faz o commit e envia para o GitHub -> Vercel coloca no ar.
git add . -A
git commit -m "latest update"
git push

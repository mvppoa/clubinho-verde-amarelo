@echo off
REM ===================================================================
REM  Editor do Site - Clubinho Verde Amarelo
REM  De um duplo-clique neste arquivo para abrir o editor no navegador.
REM ===================================================================
title Editor do Site - Clubinho Verde Amarelo
cd /d "%~dp0admin-tool"

if not exist node_modules (
  echo.
  echo  Instalando o necessario pela primeira vez. Isso pode levar um minuto...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo  Falha ao instalar. Verifique se o Node.js esta instalado.
    pause
    exit /b 1
  )
)

echo.
echo  Abrindo o editor no navegador...
start "" http://localhost:4000

echo  O editor esta rodando. Para FECHAR, feche esta janela preta.
echo.
node server.js

pause

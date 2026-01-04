#!/bin/zsh

# ネットワークの存在を確認
if ! docker network inspect microfrontends >/dev/null 2>&1; then
  echo "Network 'microfrontends' does not exist. Creating..."
  docker network create microfrontends
else
  echo "Network 'microfrontends' already exists."
fi
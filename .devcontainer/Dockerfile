FROM ignisda/developr-workspace

RUN sudo pnpm install --global "@nestjs/cli" "@ionic/cli@latest" ; \
    curl https://cli-assets.heroku.com/install.sh | sh ; \
    heroku plugins:install heroku-repo ; \
    pip3 install click google-cloud-automl ; \
    curl -sL https://deb.nodesource.com/setup_17.x | sudo bash - ; \
    sudo apt-get install -y nodejs ; \
    node --version

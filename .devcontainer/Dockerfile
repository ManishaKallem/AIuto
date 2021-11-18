FROM ignisda/developr-workspace

RUN sudo pnpm install --global "@nestjs/cli" "@ionic/cli@latest" ; \
    curl https://cli-assets.heroku.com/install.sh | sh ;\
    heroku plugins:install heroku-repo

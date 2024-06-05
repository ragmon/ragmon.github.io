FROM node:22

ARG GIT_USER_EMAIL
ARG GIT_USER_NAME

# Добавьте директорию /app в список безопасных директорий Git
#RUN git config --global --add safe.directory /app

# Настройка Git пользователя
RUN git config --global user.email $GIT_USER_EMAIL  \
    && git config --global user.name $GIT_USER_NAME


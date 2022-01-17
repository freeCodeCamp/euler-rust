FROM ubuntu

ARG USERNAME=codeally
ARG HOMEDIR=/home/$USERNAME

ENV TZ="America/New_York"

RUN apt update && apt install -y sudo

# Unminimize Ubuntu to restore man pages
RUN yes | unminimize

# Set up timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Set up user, disable pw, and add to sudo group
RUN adduser --disabled-password \
  --gecos '' ${USERNAME}

RUN adduser ${USERNAME} sudo

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> \
  /etc/sudoers

USER ${USERNAME}

# Install packages for projects
RUN sudo apt install -y curl git nano bash-completion man-db

# Install Node LTS
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt install -y nodejs

# Give permissions to run scripts
RUN chmod +x fcc

# Install marked globally for node
RUN npm install marked prism live-server chai chokidar -g

RUN cp sample.env .env

# Configure project directory?
RUN mkdir ${HOMEDIR}/project
WORKDIR ${HOMEDIR}/project
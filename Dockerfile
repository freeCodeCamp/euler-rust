FROM ubuntu

ARG USERNAME=camper
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

# Install Rust for this project
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Install Node LTS
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt install -y nodejs


# Configure project directory to match course name
RUN mkdir ${HOMEDIR}/curriculum
WORKDIR ${HOMEDIR}/curriculum

# Install marked globally for node
RUN sudo npm install live-server -g

# Copy necessary files
COPY .devcontainer/ .devcontainer/
COPY .git/ .git/
COPY .freeCodeCamp/ .freeCodeCamp/
COPY .gitignore .gitignore

# Append history to .bash_history
RUN echo 'PROMPT_COMMAND="history -a ${HOMEDIR}/curriculum/.freecodecamp/.bash_history"' >> ${HOMEDIR}/.bashrc

# Copy curriculum content to project directory
COPY .vscode/ .vscode/
COPY curriculum/ ./

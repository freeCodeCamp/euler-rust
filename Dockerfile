FROM ubuntu

ARG USERNAME=camper
ARG HOMEDIR=/workspace/$USERNAME

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
RUN sudo apt install -y curl git bash-completion man-db

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
COPY --chown=camper .devcontainer/ .devcontainer/
COPY --chown=camper .git/ .git/
COPY --chown=camper .freeCodeCamp/ .freeCodeCamp/
COPY --chown=camper .gitignore .gitignore

# Append terminal to .output.log
RUN echo "PROMPT_COMMAND='>| ~/curriculum/.freecodecamp/.output.log && cat ~/curriculum/.freecodecamp/.temp.log >| ~/curriculum/.freecodecamp/.output.log && truncate -s 0 ~/curriculum/.freecodecamp/.temp.log; echo $PWD >> ~/curriculum/.freeCodeCamp/test/.cwd; history -a'" >> ${HOMEDIR}/.bashrc
RUN echo "exec > >(tee -ia ~/curriculum/.freecodecamp/.temp.log) 2>&1" >> ${HOMEDIR}/.bashrc

# Copy curriculum content to project directory
COPY --chown=camper .vscode/ .vscode/
COPY --chown=camper curriculum/ ./

### Gitpod user ###
# '-l': see https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user
RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod \
    # passwordless sudo for users in the 'sudo' group
    && sed -i.bkp -e 's/%sudo\s\+ALL=(ALL\(:ALL\)\?)\s\+ALL/%sudo ALL=NOPASSWD:ALL/g' /etc/sudoers

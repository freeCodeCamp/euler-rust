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

RUN sudo usermod -aG root ${USERNAME}

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> \
  /etc/sudoers


# Install packages for projects - Docker for testing
RUN sudo apt-get install -y curl git bash-completion man-db docker wget build-essential

# Install Rust for this project
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Install Node LTS
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# /usr/lib/node_modules is owned by root, so this creates a folder ${USERNAME} 
# can use for npm install --global
WORKDIR ${HOMEDIR}
RUN mkdir ~/.npm-global
RUN npm config set prefix '~/.npm-global'

# Configure course-specific environment
RUN mkdir curriculum
COPY ./ ./curriculum/
WORKDIR ${HOMEDIR}/curriculum

RUN cd .freeCodeCamp && cp sample.env .env && npm ci && npm run dev:curriculum

# Começando

> Olá! Recentemente migramos alguns documentos para adicionar novas páginas. Caso queira nos ajudar traduzindo essa página clique em "Edit this page" no final da página.

`asdf` installation involves:

1. Instalando dependências
2. Instalando núcleo `asdf`
3. Adicionando `asdf` ao seu shell
4. Instalar um plugin para cada ferramenta que deseja gerenciar
5. Instalar uma versão de ferramenta
6. Configurações globais e versões de projetos via `.tool-versions`

## 1. Instalar Dependências

**Linux**:

| Gerenciador de pacotes | Comando                        |
| --------------- | ------------------------------ |
| Aptitude        | `sudo apt install curl git`    |
| DNF             | `sudo dnf install curl git`    |
| Pacman          | `sudo pacman -S curl git`      |
| Zypper          | `sudo zypper install curl git` |

**macOS**:

| Gerenciador de pacotes | Comando                                                   |
| --------------- | --------------------------------------------------------- |
| Homebrew        | Dependências seram instaladas automaticamente pelo Homebrew. |
| Spack           | `spack install coreutils curl git`                        |

## 2. Instalar asdf

Nos recomendamos instalação via Git, mesmo que existam outros métodos específicos:

| Método   | Comando                                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git      | `git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.1`                                                                                             |
| Homebrew | `brew install asdf`                                                                                                                                                 |
| Pacman   | `git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si` ou use sua preferência [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers) |

## 3. Adicionando ao seu shell

Existem muitas combinações diferentes de shells, sistemas operacionais e métodos de instalação, todos eles demonstrados aqui. Expanda as seleções abaixo que melhor se adequam ao seu sistema:

::: details Bash & Git

Adicione em seu `~/.bashrc`:

```shell
. $HOME/.asdf/asdf.sh
```

Os complementos precisam ser configurados manualmente em seu arquivo `.bashrc`:

```shell
. $HOME/.asdf/completions/asdf.bash
```

:::

::: details Bash & Git (macOS)

Caso esteja usando **macOs Catalina ou mais recente**, por padrão o _shell_ é **ZSH**. Para voltar ao _Bash_ siga as instruções do ZSH.

Adicione em seu `~/.bash_profile`:

```shell
. $HOME/.asdf/asdf.sh
```

Os complementos precisam ser configurados manualmente em seu arquivo `.bash_profile`:

```shell
. $HOME/.asdf/completions/asdf.bash
```

:::

::: details Bash & Homebrew (macOS)

Caso esteja usando **macOs Catalina ou mais recente**, por padrão o _shell_ é **ZSH**. Para voltar ao _Bash_ siga as instruções do ZSH.

Adicione `asdf.sh` ao seu `~/.bash_profile` usando:

```shell:no-line-numbers
echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ~/.bash_profile
```
Os complementos precisam [instruções de configuração do Homebrew](https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash) ou usando:

```shell:no-line-numbers
echo -e "\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash" >> ~/.bash_profile
```

:::

::: details Bash & Pacman

Adicione em seu `~/.bashrc`:

```shell
. /opt/asdf-vm/asdf.sh
```
[`bash-complementos`](https://wiki.archlinux.org/title/bash#Common_programs_and_options) precisam ser instalado para os complementos funcionem.
:::

::: details Fish & Git

Adicione em seu `~/.config/fish/config.fish`:

```shell
source ~/.asdf/asdf.fish
```

Os complementos precisam ser configurados manualmente com esse comando:

```shell:no-line-numbers
mkdir -p ~/.config/fish/completions; and ln -s ~/.asdf/completions/asdf.fish ~/.config/fish/completions
```

:::

::: details Fish & Homebrew

Adicione `asdf.fish` ao seu `~/.config/fish/config.fish` usando:

```shell:no-line-numbers
echo -e "\nsource "(brew --prefix asdf)"/asdf.fish" >> ~/.config/fish/config.fish
```

Os complementos são [manipulados pelo Homebrew para o Fish shell](https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish). Legal!
:::

::: details Fish & Pacman

Adicione em seu `~/.config/fish/config.fish`:

```shell
source /opt/asdf-vm/asdf.fish
```

Os complementos são automaticamente configurados na instalação feita pelo pacote AUR.
:::

::: details ZSH & Git

Adicione em seu `~/.zshrc`:

```shell
. $HOME/.asdf/asdf.sh
```

**Ou** use ZSH Framework plugin descrito em [asdf para oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf) que irá realizar as configurações.

Os complementos são configurados usando ZSH Framework `asdf` plugin ou através do arquivo `.zshrc`:

```shell
# adicione em seu fpath
fpath=(${ASDF_DIR}/completions $fpath)
# termine usando os comandos do ZSH's compinit
autoload -Uz compinit && compinit
```

- Caso tiver usando uma costumização de `compinit`, garanta que seu `compinit` esteja dentro do arquivo `asdf.sh`
- Caso tiver usando uma costumização de `compinit` e ZSH Framework, garanta que `compinit` esteja dentro do framework

**Cuidado**

Caso tiver usando ZSH Framework em conjunto com `asdf`, talvez seja necessário atualizar os complementos de ZSH no `fpath`. Para atualizar Oh-My-ZSH asdf plugin, seja em https://github.com/ohmyzsh/ohmyzsh/pull/8837.
:::

::: details ZSH & Homebrew

Adicione `asdf.sh` ao seu `~/.zshrc` usando:

```shell
echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

**Ou** use o ZSH Framework plugin descrito em [asdf para oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf) para concluir sua configuração.


Os complementos são configurados pelo ZSH Framework `asdf` ou precisam [instruções de configuração do Homebrew](https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh). Caso tiver usando ZSH Framework em conjunto com `asdf`, talvez seja necessário atualizar os complementos de ZSH no `fpath`. Para atualizar Oh-My-ZSH asdf plugin, seja em [ohmyzsh/ohmyzsh#8837](https://github.com/ohmyzsh/ohmyzsh/pull/8837).
:::

::: details ZSH & Pacman

Adicione em seu `~/.zshrc`:

```shell
. /opt/asdf-vm/asdf.sh
```

Os complementos são colocados em um local escolhido pelo ZHS, para mais [ZSH deve ser usado para configurações dos complementos](https://wiki.archlinux.org/index.php/zsh#Command_completion).
:::

Scripts `asdf` precisa dos recursos **AFETER** em seu `$PATH` e **AFTER** precisa estar em seu framework (oh-my-zsh etc).

Reinicie seu shell para que as alterações `PATH` tenham efeito. Abrir uma nova guia do terminal geralmente resolve.

## 4. Instalar um Plugin

Para efeitos de demonstração, instalaremos e configuraremos [Node.js](https://nodejs.org/) via plugin[`asdf-nodejs`](https://github.com/asdf-vm/asdf-nodejs/).

### Dependências do Plugin

Each plugin has dependencies so we need to check the plugin repo where they should be listed. For `asdf-nodejs` they are:

| OS             | Dependency Installation                 |
| -------------- | --------------------------------------- |
| Linux (Debian) | `apt-get install dirmngr gpg curl gawk` |
| macOS          | `brew install gpg gawk`                 |

We should install dependencies first as some Plugins have post-install hooks.

### Install the Plugin

```shell:no-line-numbers
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

## 5. Install a Version

Now we have a plugin for Node.js we can install a version of the tool.

We can observer which versions are available with `asdf list all nodejs` or a subset of versions with `asdf list all nodejs 14`.

We will just install the `latest` available version:

```shell:no-line-numbers
asdf install nodejs latest
```

::: tip Note
`asdf` enforces exact versions. `latest` is a helper throughout `asdf` that will resolve to the actual version number at the time of execution.
:::

## 6. Set a Version

`asdf` performs a version lookup of a tool in all `.tool-versions` files from the current working directory up to the `$HOME` directory. The lookup occurs just-in-time when you execute a tool that `asdf` manages.

::: warning
Without a version listed for a tool execution of the tool will **error**. `asdf current` will show you the tool & version resolution, or absence of, from your current directory so you can observe which tools will fail to execute.
:::

### Global

Global defaults are managed in `$HOME/.tool-versions`. Set a global version with:

```shell:no-line-numbers
asdf global nodejs latest
```

`$HOME/.tool-versions` will then look like:

```
nodejs 16.5.0
```

Some OSs already have tools installed that are managed by the system and not `asdf`, `python` is a common example. You need to tell `asdf` to pass the management back to the system. The [Versions reference section](/pt-br/manage/versions.md) will guide you.

### Local

Local versions are defined in the `$PWD/.tool-versions` file (your current working directory). Usually, this will be the Git respository for a project. When in your desired directory execute:

```shell:no-line-numbers
asdf local nodejs latest
```

`$PWD/.tool-versions` will then look like:

```
nodejs 16.5.0
```

### Using Existing Tool Version Files

`asdf` supports the migration from existing version files from other version managers. Eg: `.ruby-version` for the case of `rbenv`. This is supported on a per-plugin basis.

[`asdf-nodejs`](https://github.com/asdf-vm/asdf-nodejs/) supports this via both `.nvmrc` and `.node-version` files. To enable this, add the following to your `asdf` configuration file `$HOME/.asdfrc`:

```
legacy_version_file = yes
```

See the [configuration](/pt-br/manage/configuration.md) reference page for more config options.

## Setup Complete!

That completes the initial setup of `asdf` :tada: You can now manage `nodejs` versions for your project. Follow similar steps for each type of tool in your project!

`asdf` has a many more commands to become familiar with, you can see them all by running `asdf --help` or `asdf`. The core of the commands are broken into three categories:

- [core `asdf`](/pt-br/manage/core.md)
- [plugins](/pt-br/manage/plugins.md)
- [versions (of tools)](/pt-br/manage/versions.md)

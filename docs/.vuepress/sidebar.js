const en = {
  "/guide/": ["/guide/introduction.md", "/guide/getting-started.md"],
  "/manage/": [
    {
      text: "Manage",
      children: [
        "/manage/core.md",
        "/manage/plugins.md",
        "/manage/versions.md",
        "/manage/configuration.md",
        "/manage/commands.md",
        {
          text: "Changelog",
          link: "https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md"
        }
      ]
    }
  ],
  "/plugins/": [
    {
      text: "Author",
      children: [
        "/plugins/create.md",
        {
          text: "GitHub Plugin Template",
          link: "https://github.com/asdf-vm/asdf-plugin-template"
        }
      ]
    },
    {
      text: "First Party Plugins",
      children: [
        {
          text: "Elixir",
          link: "https://github.com/asdf-vm/asdf-elixir"
        },
        {
          text: "Erlang",
          link: "https://github.com/asdf-vm/asdf-erlang"
        },
        {
          text: "Node.js",
          link: "https://github.com/asdf-vm/asdf-nodejs"
        },
        {
          text: "Ruby",
          link: "https://github.com/asdf-vm/asdf-ruby"
        }
      ]
    },
    {
      text: "Community Plugins",
      children: [
        {
          text: "asdf-community",
          link: "https://github.com/asdf-community/"
        }
      ]
    },
    {
      text: "Reference",
      children: [
        {
          text: "Plugin Shortname Index",
          link: "https://github.com/asdf-vm/asdf-plugins"
        }
      ]
    }
  ],
  "/contribute/": [
    {
      text: "Contribute",
      children: [
        "/contribute/core.md",
        "/contribute/documentation.md",
        "/contribute/first-party-plugins.md",
        "/contribute/github-actions.md"
      ]
    }
  ],
  "/learn-more/": [
    {
      text: "Questions",
      children: [
        "/learn-more/faq.md",

        {
          text: "GitHub Issues",
          link: "https://github.com/asdf-vm/asdf/issues"
        },
        {
          text: "GitHub Discussions",
          link: "https://github.com/asdf-vm/asdf/discussions"
        },
        {
          text: "StackOverflow Tag",
          link: "https://stackoverflow.com/questions/tagged/asdf-vm"
        }
      ]
    },
    {
      text: "Resources",
      children: ["/learn-more/thanks.md"]
    }
  ]
};

const pt_br = {
  "/pt-br/guide/": [
    "/pt-br/guide/introduction.md",
    "/pt-br/guide/getting-started.md"
  ],
  "/pt-br/manage/": [
    {
      text: "Gerenciar",
      children: [
        "/pt-br/manage/core.md",
        "/pt-br/manage/plugins.md",
        "/pt-br/manage/versions.md",
        "/pt-br/manage/configuration.md",
        "/pt-br/manage/commands.md",
        {
          text: "Alterações",
          link: "https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md"
        }
      ]
    }
  ],
  "/pt-br/plugins/": [
    {
      text: "Autor",
      children: [
        "/pt-br/plugins/create.md",
        {
          text: "GitHub Plugin Template",
          link: "https://github.com/asdf-vm/asdf-plugin-template"
        }
      ]
    },
    {
      text: "Começando com Plugins",
      children: [
        {
          text: "Elixir",
          link: "https://github.com/asdf-vm/asdf-elixir"
        },
        {
          text: "Erlang",
          link: "https://github.com/asdf-vm/asdf-erlang"
        },
        {
          text: "Node.js",
          link: "https://github.com/asdf-vm/asdf-nodejs"
        },
        {
          text: "Ruby",
          link: "https://github.com/asdf-vm/asdf-ruby"
        }
      ]
    },
    {
      text: "Comunidade de Plugins",
      children: [
        {
          text: "asdf-community",
          link: "https://github.com/asdf-community/"
        }
      ]
    },
    {
      text: "Referência",
      children: [
        {
          text: "Plugin Shortname Index",
          link: "https://github.com/asdf-vm/asdf-plugins"
        }
      ]
    }
  ],
  "/pt-br/contribute/": [
    {
      text: "Contribuição",
      children: [
        "/pt-br/contribute/core.md",
        "/pt-br/contribute/documentation.md",
        "/pt-br/contribute/first-party-plugins.md",
        "/pt-br/contribute/github-actions.md"
      ]
    }
  ],
  "/pt-br/learn-more/": [
    {
      text: "Questões",
      children: [
        "/pt-br/learn-more/faq.md",

        {
          text: "GitHub problemas",
          link: "https://github.com/asdf-vm/asdf/issues"
        },
        {
          text: "GitHub discussões",
          link: "https://github.com/asdf-vm/asdf/discussions"
        },
        {
          text: "StackOverflow Tag",
          link: "https://stackoverflow.com/questions/tagged/asdf-vm"
        }
      ]
    },
    {
      text: "Recursos",
      children: ["/pt-br/learn-more/thanks.md"]
    }
  ]
};

module.exports = { en, pt_br };

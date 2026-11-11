# Chef's Match

Projeto acadêmico de uma startup de gastronomia, com lançamento em Brasília/DF. Slogan: *a gastronomia se conecta aqui.*

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `docs/index.html` | O site completo. **Dê dois cliques para abrir no navegador.** Funciona offline, exceto as fontes. |
| `index.html` | O mesmo site, na versão publicada no claude.ai. Não abra este: use o de `docs/`. |
| `apresentacao/project/` | Os 17 slides (`deck.json` mais `slides/*.html`), publicados no claude.ai. |
| `ROTEIRO.md` | O roteiro de fala dividido por integrante, as perguntas prováveis e o checklist do dia. |

## Links online (privados até você compartilhar)

- Site: https://claude.ai/artifact/BGuCLn8Cgr4zAPGXzLp4ri
- Protótipo do app (direto na seção): https://claude.ai/artifact/BGuCLn8Cgr4zAPGXzLp4ri#app
- Slides: https://claude.ai/artifact/JqQ65sKEiLemDABeF1qFWi

Para o grupo conseguir abrir os links, use o botão **Share** de cada página. Os slides podem ser baixados em PowerPoint ou PDF pelo próprio Share.

## Como editar o site

1. Edite `index.html`, porque é ele que vai para o claude.ai.
2. Gere de novo a cópia local no terminal (Git Bash), dentro desta pasta:

```bash
{ printf '<!doctype html>\n<html lang="pt-BR">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'; cat index.html; printf '\n</html>\n'; } > docs/index.html
```

Para editar no VS Code e ver as mudanças na hora, instale a extensão **Live Server**, clique com o botão direito em `docs/index.html` e escolha **Open with Live Server**.

## Fontes do conteúdo

- *Plano de Negócios Chef Match* (documento do grupo)
- *Menu_Clik* (apresentação do grupo)
- A conversa "Criar plataforma de RH" no ChatGPT

Os dados de mercado vêm da Abrasel e do Sebrae. Preços, metas e projeções são hipóteses acadêmicas.

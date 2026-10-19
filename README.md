# Do chat para o terminal — curso (INEMA Learning v7.2)

Curso completo do **degrau 1** da formação [Do chat ao agente](https://inematds.github.io/do-chat-ao-agente-v72/): do terminal vazio ao agente (Claude Code ou Codex) trabalhando numa pasta sua, com AGENTS.md, segredos fora do texto, Git para desfazer, página no GitHub Pages e o mesmo projeto numa VPS.

**Abrir o curso:** https://inematds.github.io/do-chat-ao-agente-terminal-v72/

| Aula | O que você sai fazendo |
|---|---|
| 1. O terminal começa dizendo onde você está | abrir o cmd e andar pelas pastas com seis comandos |
| 2. Instalar da fonte oficial e entrar com a sua conta | Git, gh, Node e o agente instalados e conferidos |
| 3. A pasta é o contexto | árvore projetos/config, README e AGENTS.md em Markdown |
| 4. Primeiro o agente lê, depois ele muda | tarefa com escopo, conferência e correção |
| 5. Segredo não entra no texto | .env, .env.example e .gitignore antes do 1º commit |
| 6. Git: a rede de segurança | status, diff, commit, restore e revert |
| 7. AGENTS.md, Skills e memória | regras conferíveis e a falha que vira regra |
| 8. Página no ar e o mesmo projeto numa VPS | SSH, gh, GitHub Pages, git clone/pull e plano com datas |

Didática v7: objetivo em uma linha, diagrama clicável primeiro, texto curto, **terminal de ensaio** (simulação com missões, sem rodar nada no seu computador), modelos com botão copiar, prática com "pronto quando" e teste com resposta comentada.

## Como funciona

```bash
python3 gerar.py && python3 validar.py --links
node ~/.claude/skills/formato-curso-v72/scripts/conferir-tela.cjs .
```

`conteudo/pt/` (JSON) → `gerar.py` → `index.html` e `aulas/<slug>/index.html`. HTML estático, sem build e sem backend; o progresso fica só no navegador de quem estuda.

Fontes do conteúdo: [OSWork v6.2](https://inematds.github.io/oswork-v62/), [OSWork Quick](https://inematds.github.io/oswork-quick/), [exercícios do degrau 1](https://github.com/inematds/jornada-agentes/blob/main/exercicios/01-oswork.md) e a [área OSWork](https://eventos.inema.pro/oswork/). Vídeos já publicados: série jornada-agentes (`video-v2.0.0`) e [OSWork comando por comando](https://inematds.github.io/oswork-terminal/videos/).

Conteúdo aberto e gratuito · [INEMA.CLUB](https://inema.club)

## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/324-do-chat-ao-agente-degrau-1-o-terminal-pasta-regras-segredos-git-e-vps/)
- [Guia: como aprender inteligência artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)

# CLAUDE.md — do-chat-ao-agente-terminal-v72

Curso completo do degrau 1 (Do chat para o terminal / OSWork) da formação Do chat ao agente, no formato INEMA Learning v7.2 (skill `formato-curso-v72`). Visão geral da formação: https://inematds.github.io/do-chat-ao-agente-v72/ (não editar daqui).

- Conteúdo em `conteudo/pt/`; nunca editar o HTML gerado à mão: editar o JSON e rodar o portão.
- Portão: `python3 gerar.py && python3 validar.py --links` + `node ~/.claude/skills/formato-curso-v72/scripts/conferir-tela.cjs .` (HTTP local, 1366/390).
- Tipo de seção próprio deste curso: `simterm` (terminal de ensaio com missões) — `sec_simterm` em `gerar.py`, `assets/terminal.js` e `assets/terminal.css`. Campos: `janela`, `sistema` (windows|linux), `inicio` (caminho/prompt inicial), `sufixo` (">" padrão; "" quando `inicio`/`vai` já trazem o fim do prompt), `missoes [{pede, aceita[], saida (aceita {cwd}), vai?, explica, mostra?}]`, `fim`, `legenda`.
- Fonte do conteúdo: `~/projetos/oswork-v62`, `~/projetos/oswork-quick`, `~/projetos/jornada-agentes/exercicios/01-oswork.md`. Não inventar comando nem número.
- Imagens: Codex image_gen na assinatura (luz neutra, sem texto; capa com texto). Fontes em `img-src/` (fora do Git).
- Autor dos commits: `inematds <inematds@gmail.com>`. Publicação = commit + push (GitHub Pages, raiz da main).

## Self-learning

When I correct you, or you catch yourself making a mistake: before continuing, add the lesson as a one-line rule at the TOP of the Lessons section below.

## Lessons

- Marca-texto (anotação) dentro de elemento flex/grid vira item solto e abre espaço no meio da palavra: o texto anotável tem que estar num `span`/`p` próprio (ex.: `.nesta2 li > span`). Bloco anotável novo → conferir o `display` dele (18/10/2026).
- Rolagem guiada no desktop: o texto da etapa fica DENTRO do painel fixo (legenda que troca); cartões rolando por baixo do diagrama aparecem cortados e espiando no topo — o Nei viu na aula 1 (18/10/2026).
- Rolagem guiada: posição de destino calculada com o diagrama JÁ grudado no topo (top do sticky + altura), nunca pela posição atual; e a etapa só vira ativa quando o cartão está visível abaixo do diagrama (18/10/2026).
- Menu do topo de curso segue o padrão v2 (curso | INEMA.CLUB - PRO à esquerda; seções e Aa à direita); não inventar outro topo (18/10/2026).
- Simulação com falha proposital: amarrar a falha à primeira execução da tarefa, não à primeira rodada — senão interromper e retomar esconde a falha (18/10/2026).
- Validar por HTTP local, nunca `file://` (o progresso e os caminhos relativos se comportam diferente) (18/10/2026).

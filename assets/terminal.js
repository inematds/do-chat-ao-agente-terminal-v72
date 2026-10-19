/* Simulação de terminal do curso "Do chat para o terminal" (tipo de seção simterm).
   O aluno digita o comando de cada missão; o terminal responde como o de verdade responderia.
   Nada roda de verdade: é um ensaio sem risco antes de fazer no seu computador. */
(function () {
  function norm(s, win) {
    s = (s || "").replace(/\s+/g, " ").trim();
    return win ? s.toLowerCase() : s;
  }
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  document.querySelectorAll(".simterm").forEach(function (sim) {
    var d;
    try { d = JSON.parse(sim.getAttribute("data-term")); } catch (e) { return; }
    var win = (d.sistema || "windows") === "windows";
    var tela = sim.querySelector(".st-tela"), input = sim.querySelector("input"),
        prompt = sim.querySelector(".st-prompt"), fb = sim.querySelector(".st-fb"),
        lis = sim.querySelectorAll(".st-missoes li"), form = sim.querySelector("form"),
        agora = sim.querySelector(".st-agora");
    var cwd, i;

    var suf = d.sufixo == null ? ">" : d.sufixo;
    function pr() { return cwd + suf; }
    function linha(txt, cls) { tela.appendChild(el("span", cls || "", txt + "\n")); tela.scrollTop = tela.scrollHeight; }
    function marca() {
      lis.forEach(function (li, k) {
        li.classList.toggle("feita", k < i);
        li.classList.toggle("atual", k === i);
      });
      prompt.textContent = pr();
      var m = d.missoes[i];
      agora.innerHTML = m ? "<b>Missão " + (i + 1) + " de " + d.missoes.length + ":</b> " + m.pede : "<b>Missões cumpridas.</b>";
    }
    function zerar() {
      cwd = d.inicio; i = 0; tela.textContent = "";
      fb.innerHTML = "";
      marca();
    }
    function fim() {
      fb.innerHTML = '<div class="r ok">' + (d.fim || "Pronto.") + "</div>";
      sim.classList.add("concluida");
    }
    function executa(cmd) {
      var c = norm(cmd, win);
      linha(pr() + " " + cmd, "st-cmd");
      if (!c) return;
      if (c === "cls" || c === "clear") { tela.textContent = ""; return; }
      var m = d.missoes[i];
      var ok = m && m.aceita.some(function (a) { return norm(a, win) === c; });
      if (ok) {
        if (m.saida) m.saida.replace(/\{cwd\}/g, cwd).split("\n").forEach(function (l) { linha(l, "st-out"); });
        if (m.vai) cwd = m.vai;
        fb.innerHTML = '<div class="r ok">' + (m.explica || "") + "</div>";
        i++; marca();
        if (i >= d.missoes.length) fim();
        return;
      }
      if (win && c === "cd") { linha(cwd, "st-out"); fb.innerHTML = '<p class="aguarda">Isso mostrou onde você está. Agora faça o que a missão ' + (i + 1) + " pede.</p>"; return; }
      if (!m) { fb.innerHTML = '<div class="r ok">' + (d.fim || "") + "</div>"; return; }
      fb.innerHTML = '<p class="aguarda">Esse não é o comando da missão ' + (i + 1) + ". Releia o pedido ou toque em <b>Mostrar o comando</b>.</p>";
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = input.value; input.value = "";
      executa(v);
    });
    sim.querySelector(".st-dica").addEventListener("click", function () {
      var m = d.missoes[i];
      if (!m) return;
      input.value = m.mostra || m.aceita[0];
      input.focus();
    });
    sim.querySelector(".st-zerar").addEventListener("click", function () { sim.classList.remove("concluida"); zerar(); });
    zerar();
  });
})();

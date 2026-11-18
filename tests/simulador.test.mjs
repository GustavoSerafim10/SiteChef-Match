// Testa a função do gráfico do simulador, extraída do index.html entre os marcadores /*serie:inicio*/ e /*serie:fim*/.
// Rodar: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const trecho = html.match(/\/\*serie:inicio\*\/([\s\S]*?)\/\*serie:fim\*\//);

function carregar() {
  assert.ok(trecho, "marcadores /*serie:inicio*/ … /*serie:fim*/ não encontrados no index.html");
  return new Function(`${trecho[1]}; return serieAcumulada;`)();
}

test("cenário do plano: começa no investimento e se paga no 1º mês", () => {
  const serie = carregar()(6452, 3000);
  assert.equal(serie.length, 13);
  assert.equal(serie[0], -3000);
  assert.equal(serie[1], 3452);
  assert.equal(serie[12], 74424);
});

test("prejuízo: o acumulado só desce", () => {
  assert.equal(carregar()(-500, 3000)[12], -9000);
});

test("resultado zero: fica parado no investimento", () => {
  assert.ok(carregar()(0, 3000).every((v) => v === -3000));
});

test("aceita outro número de meses", () => {
  assert.equal(carregar()(100, 0, 6).length, 7);
});

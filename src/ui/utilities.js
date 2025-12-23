export const formatBRL = (num) =>
  num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

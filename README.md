# Suprema Odontologia

Site da clínica, feito com Next.js, TypeScript e Tailwind CSS.

## Comandos

- `npm run dev`: servidor de desenvolvimento
- `npm run test`: testes
- `npm run lint`: regras de Clean Code (ESLint)
- `npm run format`: formatação (Prettier)
- `npm run typecheck`: verificação de tipos

## Estrutura

```
src/
├── app/      rotas e layout
├── config/   dados da clínica (fonte única da verdade)
└── lib/      funções puras e testáveis
```

As pastas `components/` e `sections/` entram na Fase 2.

## Regra de dependência

`app` → `sections` → `components` → `lib` e `config`.
Cada camada só importa das que estão à direita dela.
Use sempre o atalho `@/` nas importações.

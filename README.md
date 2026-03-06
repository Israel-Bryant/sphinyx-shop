# Sphynix

## Visao Geral Institucional

A Sphynix funciona como a holding do ecossistema. Dentro dela existem:

- marca institucional
- Sphynix Platform como camada de infraestrutura
- Sphynix Launcher como cliente oficial de distribuicao
- verticais e iniciativas de software

A frente que entra em producao agora e uma linha de apps para automacao de
servicos, com foco em operacoes como:

- barbearias
- estetica
- clinicas
- outros negocios de atendimento e servico

Nesta fase, o foco do site e comunicar essa estrutura:

- homepage premium
- posicionamento institucional da holding
- marketplace inicial das iniciativas proprias
- pagina do launcher
- navegacao principal
- fundacao visual da marca

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Estrutura de Dominios

- `sphynix.com` -> holding, marca, iniciativas e marketplace
- `app.sphynix.com` -> hub de aplicativos, acessos e launcher
- `account.sphynix.com` -> area do usuario
- `admin.sphynix.com` -> operacao interna
- `api.sphynix.com` -> backend
- `cdn.sphynix.com` -> downloads e distribuicao

## Paginas Implementadas

- `/` -> homepage institucional
- `/flow` -> linha de produtos Flow com foco mobile-first
- `/marketplace` -> catalogo inicial das iniciativas da Sphynix
- `/launcher` -> apresentacao do Sphynix Launcher

## Arquitetura de Marca

- `Sphynix` -> holding / ecossistema
- `Sphynix Platform` -> infraestrutura, conta, marketplace, licencas e distribuicao
- `Sphynix Launcher` -> cliente oficial da plataforma
- `Flow` -> linha de produtos mobile-first para negocios de servico

## Direcao Visual

- preto profundo
- grafite
- dourado luminoso
- atmosfera premium
- geometria sutil e textura elegante

## Executar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Proximos passos sugeridos

1. criar paginas detalhadas para cada app da linha Flow
2. modelar produtos por segmento, como barbearia, estetica e clinicas
3. adicionar area de conta
4. integrar autenticacao e checkout

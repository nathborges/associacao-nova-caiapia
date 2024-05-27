<script setup></script>

<template>
  <header>
    <section class="flex-row logo-container">
      <div class="logo">
        <img alt="Associação logo" src="@/assets/logo.png" width="200" />
      </div>
      <h1 class="hammersmith-one-regular">ASSOCIAÇÃO DOS COMPRADORES DO LOTEAMENTO NOVA CAIAPIÁ</h1>
    </section>
  </header>
  <section class="flex-row">
    <div class="nav-bar">
      <h2 class="title">Sobre nós</h2>
      <p>
        Unidos pela luta contra o descaso e o atraso na entrega dos lotes vendidos entre 2020-2022
        pela Construtora e Incorporadora Manassés (C&Gomes). <br />
        O loteamento situa-se na Avenida Manoel Lages do Chão, 1069, Cotia - SP
      </p>
      <nav class="flex-column title">
        <hr class="solid divider" />

        <RouterLink to="/">Início</RouterLink>
        <hr class="solid divider" />

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfJGSf_7QNROf-sR8R3XDqEiQPOIDs65dIsvL6HIzWtPsnyTA/viewform"
          target="_blank"
          >Inscreva-se como associado</a
        >
        <hr class="solid divider" />

        <RouterLink to="/linha-do-tempo">Linha do tempo</RouterLink>
        <hr class="solid divider" />

        <a
          href="https://drive.google.com/file/d/1T-rO79ad5CXAYAj0_TqKaBnsGSvuCufJ/view"
          target="_blank"
          >Estatuto social</a
        >
        <hr class="solid divider" />

        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=assoc.compradores.caiapia@gmail.com&ctz=America/Sao_Paulo"
          target="_blank"
          >Agenda de compromissos</a
        >
        <hr class="solid divider" />

        <RouterLink to="/about">Perguntas frequentes</RouterLink>
        <hr class="solid" />
      </nav>
    </div>
    <div class="content-bar flex-column">
      <h2 class="title">Últimas atualizações</h2>
      <RouterView class="content" />
    </div>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  align-items: center;
}

.logo-container {
  width: 100%;
  align-items: flex-end;
  gap: 1vw;
}

h1 {
  color: #e7191f;
  letter-spacing: -2px;
  margin: 0px;
  text-align: center;
  font-size: 40px;
  flex: 2;
  text-shadow:
    3px 3px 0 #fff,
    -3px 3px 0 #fff,
    -3px -3px 0 #fff,
    3px -3px 0 #fff;
}

.solid {
  border-top: 1px solid #565656;
  border-radius: 10px;
  width: 100%;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

.nav-bar {
  flex: 0.7;
  text-align: center;
}

.content-bar {
  flex: 2;
}

.title {
  font-family: 'Roboto';
  font-weight: 500;
  color: var(--main-title-color);
  font-size: 22px;
  text-align: center;
}

p {
  font-family: 'Roboto';
  font-weight: 400;
  color: var(--main-text-color);
  font-size: 20px;
}

.logo-container > h1 {
  align-self: center;
}

.logo {
  flex: 0.7;
  display: flex;
  justify-content: center;
}

.content-bar {
  display: flex;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

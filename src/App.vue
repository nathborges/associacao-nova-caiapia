<template>
  <header>
    <section class="flex-row logo-container">
      <div class="logo">
        <a href="./"
          ><img alt="Associação logo" src="@/assets/logo.png" width="200"
        /></a>
      </div>
      <h1 class="hammersmith-one-regular">
        ASSOCIAÇÃO DOS COMPRADORES NOVA CAIAPIÁ
      </h1>
    </section>
  </header>
  <section class="flex-row">
    <div class="nav-bar">
      <h2 class="title">Sobre nós</h2>
      <p>
        Unidos pela luta contra o descaso e o atraso na entrega dos lotes
        vendidos entre 2020 e 2022 pela Construtora (C&Gomes). O loteamento
        situa-se na Avenida Manoel Lages do Chão, 1069, Cotia - SP.
      </p>
      <nav class="flex-column menu-items">
        <hr class="solid divider" />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfJGSf_7QNROf-sR8R3XDqEiQPOIDs65dIsvL6HIzWtPsnyTA/viewform"
          target="_blank"
          >Inscreva-se como associado</a
        >
        <hr class="solid divider" />

        <RouterLink to="/">Linha do tempo</RouterLink>
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

        <RouterLink to="/">Perguntas frequentes</RouterLink>
        <hr class="solid" />
      </nav>
      <h2 class="title">Acompanhe nossas redes sociais</h2>
      <div class="social-media-container">
        <a
          target="_blank"
          href="https://www.facebook.com/people/Associa%C3%A7%C3%A3o-dos-Compradores-do-Loteamento-Nova-Caiapi%C3%A1/61559550944707/?ref=embed_page"
          ><img src="@/assets/social-media/facebook.svg"
        /></a>
        <a target="_blank" href="https://www.instagram.com/loteamento_caiapia"
          ><img src="@/assets/social-media/instagram.svg"
        /></a>
        <a
          target="_blank"
          href="https://www.youtube.com/@assoc.compradores.caiapia"
          ><img src="@/assets/social-media/youtube.svg"
        /></a>
      </div>
      <a href="mailto://assoc.compradores.caiapia@gmail.com"
        ><p class="social-media-text">Fale conosco</p></a
      >
    </div>
    <div class="content-bar flex-column">
      <h2 class="title outline">Últimas atualizações</h2>
      <RouterView class="content" />
    </div>
  </section>
  <footer>©️ 2024 Associação dos Compradores do Loteamento Nova Caiapiá. Todos os direitos reservados. | Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/nathaliafborges/"> Nathália Borges.</a> </footer>
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
  border-top: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.nav-bar {
  flex: 0.7;
  text-align: center;
}

.content-bar {
  flex: 2;
}

.title {
  font-family: "Inter";
  font-weight: 700;
  color: var(--main-title-color);
  font-size: 24px;
  text-align: center;
}

.menu-items {
  font-family: "Inter";
  font-weight: 600;
  color: var(--main-menu-color);
  font-size: 20px;
  text-align: center;
}

p {
  font-family: "Inter";
  font-weight: 500;
  color: var(--main-text-color);
  font-size: 18px;
}

.social-media-text {
  font-size: 16px;
  text-decoration: underline;
}

.logo-container > h1 {
  align-self: center;
  line-height: 1;
}

.nav-bar > p {
  text-align: justify;
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
  align-content: center;
  align-items: flex-start;
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

footer {
  font-size: 10px;
  color: #565656;
  text-align: right;
  padding-bottom: 20px;
}
</style>

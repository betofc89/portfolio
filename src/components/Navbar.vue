<template>
  <div id="navbar">
    <a href="#projects-section">
      <div class="navbar-element">
        <span lang="en">Projects</span><span lang="pt">Projetos</span>
      </div>
    </a>

    <a href="#bio-section">
      <div class="navbar-element">
        <span lang="en">Bio</span><span lang="pt">Sobre</span>
      </div>
    </a>

    <a href="#misc-section">
      <div class="navbar-element">
        <span lang="en">Misc</span><span lang="pt">Outros</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  position: sticky;
  top: 5px;
  background-color: var(--navbar-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color-lighter);
  width: 100%;
  margin: 0 auto;

  /* box-shadow: 0px 3px 3px 0px var(--box-shadow-color); */
  box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);
  z-index: var(--navbar-z-index);
}

.navbar-element {
  background-color: var(--element-bg-color);
  color: var(--font-color);
  text-align: center;
  margin: 0 0.75rem;
  min-width: 100px;
  padding: 0.5rem;
  font-weight: bold;
  transition: 0.2s all ease-in-out;
  border-radius: 0.2rem;

  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-image: linear-gradient(
      to right,
      var(--thematic-gradient-color-1-unhovered),
      var(--thematic-gradient-color-2-unhovered)
    )
    1;
  border-bottom-left-radius: 0.2rem;

  user-select: none;
}

@media only screen and (max-width: 400px) {
  /* Se o tamanho da tela for menor que 400px, faço alguns ajustes no navbar. */
  #navbar {
    position: sticky;
    top: 5px;
    /* background-color: rgba(0, 0, 0, 0.85); */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    /* border-radius: 0.4rem; */
    /* border: 1px solid gray; */
    width: 100%;
    margin: 0 auto;

    /* box-shadow: 0px 5px 8px var(--box-shadow-color); */
    z-index: var(--navbar-z-index);

    flex-wrap: wrap;
  }

  .navbar-element {
    background-color: var(--element-bg-color);
    color: var(--font-color);
    text-align: center;
    margin: 0 0.25rem;
    min-width: 80px;
    padding: 0.25rem;
    font-weight: normal;
    transition: 0.2s all ease-in-out;
    border-radius: 0.2rem;

    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-image: linear-gradient(
        to right,
        var(--thematic-gradient-color-1-unhovered),
        var(--thematic-gradient-color-2-unhovered)
      )
      1;
    border-bottom-left-radius: 0.2rem;
  }
}

.navbar-element:hover {
  background-color: var(--element-bg-color-hover);
  cursor: pointer;
  color: var(--font-color-hover);
  border-image: linear-gradient(
      to right,
      var(--thematic-gradient-color-1),
      var(--thematic-gradient-color-2)
    )
    1;
}

#navbar a {
  text-decoration: none;
}
</style>

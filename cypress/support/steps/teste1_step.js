/* Given, When, then */

import TestePage from '../Page/teste1_page'
const Pagina = new TestePage

Given("que acesso a URL" , () => {
  Pagina.acessarUrl();
})

When("aguardo a tela carregar" , () => {
    Pagina.Espera();
    Pagina.preenchercampoEmail();
})

Then("valido o carregamento da tela" , () => {
    Pagina.Espera();
})
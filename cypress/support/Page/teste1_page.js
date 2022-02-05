///<reference types= "Cypress" />

const url = Cypress.config("baseUrl")
import testeElementos from '../Elementos/teste1_elementos'
const elementos = new testeElementos

class TestePage {
   
    acessarUrl(){
     cy.visit(url)
    }

    preenchercampoEmail(){
        cy.get(elementos.CampoEmail()).should('be.visible').type("wellington.santos@gmail.com" , {delay : 80})
        cy.screenshot("exemplo screenshot")
    } 

    Espera(){
        cy.wait(5000)
    }
 
 


}
export default TestePage;
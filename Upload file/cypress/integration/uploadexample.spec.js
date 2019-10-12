/// <reference types="Cypress" />
import 'cypress-file-upload'

// run the following command, which will add the package to the project level 
//npm install --save-dev cypress-file-upload



describe('Setup the Exposure Suit with Configuration', function(){
    
    it('Reload the KB', function()
    {
        //Select the main navigation menu
        cy.get('data-cy=adminmenue').then(
            option =>{
                // select Admin menu and then trigger Dom trigger on mouseover action, then get all the sub links, further more iterate on each sub iteam
                cy.wrap(option).contains('Admin').trigger('mouseover').get('.rmLink').then(suboption =>{
                    cy.wrap(suboption).contains("ReloadKB").click()
                })
            })
            //assertion 
        cy.get('data-cy= PopupMessageContainer').should('contain', '- Knowledgebase is reloaded' )
    
    })
})

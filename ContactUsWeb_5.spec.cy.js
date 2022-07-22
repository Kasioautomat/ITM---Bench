/// <reference types="cypress" />

const { imgSrcToBlob } = require("blob-util");
const { chocolate } = require("color-name");

describe('My first automated test for ITM', () => {


  it('1. Verify reset', () => {
    
    cy.visit('https://www.itmagination.com/contact')
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    .click()
    
    cy.get('input[name="First-Name"]')
    .click({force: true})
    .type('Katarzyna')

    cy.get('input[name="Last-Name"]')
    .click({force: true})
    .type('Rębelska')
    
    cy.get('input[name="Email"]')
    .click({force: true})
    .type('katarzyna.rebelska@gmail.com')
    
    cy.get('input[name="Phone-Number"]')
    .click({force: true})
    .type('123456789')
 
    cy.get('select[id="NDA-Needed-2"]')
    .select('itm-nda', {force: true})

    cy.get('input[name="Blockchain-App-Development"]')
    .click({force: true})
    
     cy.get('textarea[id="About-Your-Project"]')
     .click({force:true})
     .type('Just learning how to type automated tests in ITM. Its really excited task. Therefore I like chocolate.')

     cy.get('label.w-file-upload-label')
     .selectFile('GREE - letnie-ceny-2022_str.pdf', {force: true})

     cy.get('label[class="w-checkbox checkbox-field"]')
     .click({force:true})

     cy.reload()

    cy.get('input[name="First-Name"]')
    .should('have.value', '')

    cy.get('input[name="Last-Name"]')
    .should('have.value', '')
    
    cy.get('input[name="Email"]')
    .should('have.value', '')
    
    cy.get('input[name="Phone-Number"]')
    .should('have.value', '')
 
    cy.get('select[id="NDA-Needed-2"]')
    .should('have.class', 'custom-select-field w-select')

    cy.get('div[id="w-node-_0e6f5aa9-71b2-93e4-ea74-ed854510d384-4510d366"]')
    .children()
    .should('not.have.class', 'w--redirected-checked')

    cy.get('textarea[id="About-Your-Project"]')
     .should('have.value', '')

     cy.get('div.w-file-upload-file-name')
     .should('contain', '')

     cy.get('label[class="w-checkbox checkbox-field"]')
     .should('not.have.class', 'w--redirected-checked')

  })


  it('Test nr 2', () => {
    
    cy.visit('https://www.itmagination.com/contact')
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    .click()
    
    cy.get('input[name="First-Name"]')
    .click({force: true})
    .type('Katarzyna')
  
    cy.get('input[name="Last-Name"]')
    .click({force: true})
    .type('Rębelska')
    
    cy.get('input[id="w-node-_0e6f5aa9-71b2-93e4-ea74-ed854510d3c6-4510d366"]')
    .click({force:true})

  cy.get('div[id="w-node-_0e6f5aa9-71b2-93e4-ea74-ed854510d370-4510d366"]').children('.warn-message').then( warnMessage => {
    expect(warnMessage.text()).to.equal('Please check that your email is valid')
  })

  })

  it('Test nr 3', () => {
    
    cy.visit('https://www.itmagination.com/contact')
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    .click()
    
    cy.get('input[name="Email"]')
    .type('Egzorcyzmy Rosmary')
    .children('.warn-message').then( warnMessage => {
    expect(warnMessage.text()).to.equal('Please check that your email is valid')
  })

  })

  it('Test nr 4', () => {
    
    cy.visit('https://www.itmagination.com/contact')
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    .click()
    
    cy.get('input[name="First-Name"]')
    .click({force: true})
    .type('Katarzyna')

    cy.get('input[name="Last-Name"]')
    .click({force: true})
    .type('Rębelska')
    
    cy.get('input[name="Email"]')
    .click({force: true})
    .type('katarzyna.rebelska@gmail.com')
    
    cy.get('input[name="Phone-Number"]')
    .click({force: true})
    .type('123456789')
 
    cy.get('select[id="NDA-Needed-2"]')
    .select('itm-nda', {force: true})

    cy.get('input[name="Blockchain-App-Development"]')
    .click({force: true})
    
     cy.get('textarea[id="About-Your-Project"]')
     .click({force:true})
     .type('Just learning how to type automated tests in ITM. Its really excited task. Therefore I like chocolate.')

     /*cy.get('label.w-file-upload-label')
     .selectFile('GREE - letnie-ceny-2022_str.pdf', {force: true})*/

     cy.get('label[class="w-checkbox checkbox-field"]')
     .click({force:true})

     cy.get('input[id="w-node-_0e6f5aa9-71b2-93e4-ea74-ed854510d3c6-4510d366"]')
     .click({force:true})
     
     cy.get('div[id="contact-form-block-general"]')
     .children('div[class="custom-success-message w-form-done"]')
     .children('div[class="margin-bottom-4"]')
     .then( mess => {
     expect(mess.text()).to.equal('Thank you! Your submission has been received! We will call you or send you an email soon to discuss the next steps.')
   })

  })

  it('Test nr 5', () => {
    
    cy.visit('https://www.itmagination.com/contact')
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    .click()
    
    cy.get('div[id="w-dropdown-toggle-0"]')
    .trigger('mouseover')

    cy.get('div[id="w-dropdown-toggle-1"]')
    .trigger('mouseover')

    cy.get('div[id="w-dropdown-toggle-2"]')
    .trigger('mouseover')

    cy.get('div[id="w-dropdown-toggle-3"]')
    .trigger('mouseover')

    cy.get('input[name="Blockchain-App-Development"]')
    .click({force: true})

    cy.get('label[class="w-checkbox checkbox-field"]')
    .click({force:true})

  })
  

});





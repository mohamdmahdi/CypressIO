/// <reference types="Cypress" />
describe('Make an API call', function(){
    it.skip('Send a detection request',function(){
        //store the name of the xml file for api calling
        var detectionCalls = ['Detectioncall-greencall.xml','Detectioncall-redcall.xml']
        detectionCalls.forEach(function(index){
            cy.fixture(index).then(fileContent => {
                //this call is using a post method, sending xml file to the api that use soap as a protocol 
                cy.request({method:'POST',
                body:fileContent,
                url: 'https://wwww.myexample.api/apiendedcall.svc', // customize this as your work is
                headers:{
                "Content-Type":"text/xml",
                'SOAPaction':'soapactions/ISuoap/soapendpoing' }}).then((response)=>{
                    expect(response.status).is.eq(200)})
                })
            })
        })   
})
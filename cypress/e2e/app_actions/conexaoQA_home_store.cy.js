describe("APP Actions - Store", () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it("valida o store inicial", () => {
        cy.window()
            .its('store')
            .invoke('getState')
            .should('deep.equal', {
                "alert": [],
                "auth": {
                    "isAuthenticated": false,
                    "loading": true,
                    "user": null
                },
                "profile": {
                    "profile": null,
                    "profiles": [],
                    "repos": [],
                    "loading": true,
                    "error": {}
                },
                "post": {
                    "posts": [],
                    "post": null,
                    "loading": true,
                    "error": {}
                }
            })
    });
});


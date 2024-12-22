describe('Website Test', () => {
    it('Should load the homepage', () => {
        cy.visit('http://localhost:3000'); // Sesuaikan dengan URL website Anda
        cy.contains('Welcome'); // Pastikan teks "Welcome" muncul di halaman
    });
});

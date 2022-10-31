module.exports = {
    /**
     * Site name, useful for page titles
     */
    name: `Nuxt Starter`,

    /**
     * Company Information
     */
    email: `info@resknow.co.uk`,
    phone: '0208 300 8833',
    address: '13 St Johns Parade, Sidcup, Kent, DA14 6ES',
    location: {
        lat: `51.42492021179657`,
        lng: `0.10547518730163574`,
    },

    /**
     * Site URL, we use this in the Sitemap
     */
    url: `http://localhost:3000`,

    /**
     * Menus
     */
    menus: {
        main: [{ label: 'Home', href: '/' }],
    },

    /**
     * Cookie Consent
     *
     * A small banner will appear in the bottom left of the
     * page letting the user know this site uses cookies
     * to provide the best experience.
     *
     * You can customise the text shown by setting a text property
     */
    cookieConsent: {
        show: true,
    },
}

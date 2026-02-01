import CardNav from './CardNav'

const Header = () => {
    const items = [
        {
            label: "Programs",
            bgColor: "#0a0a0a",
            textColor: "#fff",
            links: [
                { label: "Aging & Lifestyle", ariaLabel: "ReYou Aging Program", href: "#programs" },
                { label: "Weight Loss", ariaLabel: "Healthy Weight Loss Program", href: "#programs" },
                { label: "Quick Detox", ariaLabel: "Quick Body Detox Program", href: "#programs" }
            ]
        },
        {
            label: "About",
            bgColor: "#0d0d0d",
            textColor: "#fff",
            links: [
                { label: "Our Founder", ariaLabel: "About Founder", href: "/about", isRouterLink: true }
            ]
        },
        {
            label: "Connect",
            bgColor: "#111111",
            textColor: "#fff",
            links: [
                { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/reyouthcompany", external: true },
                { label: "Email Us", ariaLabel: "Email", href: "mailto:reyouthcompany@gmail.com" },
                { label: "Call Us", ariaLabel: "Phone", href: "tel:+919296953926" }
            ]
        }
    ];

    return (
        <CardNav
            logoText="The ReYouth Company"
            logoAlt="ReYouth"
            items={items}
            baseColor="rgba(10, 10, 10, 0.9)"
            menuColor="#ffffff"
            buttonBgColor="#7AE7C7"
            buttonTextColor="#000000"
            ctaLink="https://forms.gle/Rgxkpn99UkyFE7Xu7"
            ctaText="Get Started"
            ease="power3.out"
        />
    );
}

export default Header

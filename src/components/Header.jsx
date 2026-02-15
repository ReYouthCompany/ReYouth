import CardNav from './CardNav'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const items = [
        {
            label: "Programs",
            bgColor: isLight ? "#ffffff" : "#0a0a0a",
            textColor: isLight ? "#111" : "#fff",
            links: [
                { label: "Aging & Lifestyle", ariaLabel: "ReYou Aging Program", href: "#programs" },
                { label: "Weight Loss", ariaLabel: "Healthy Weight Loss Program", href: "#programs" },
                { label: "Quick Detox", ariaLabel: "Quick Body Detox Program", href: "#programs" }
            ]
        },
        {
            label: "About",
            bgColor: isLight ? "#f8f8f8" : "#0d0d0d",
            textColor: isLight ? "#111" : "#fff",
            links: [
                { label: "Our Founder", ariaLabel: "About Founder", href: "/about", isRouterLink: true }
            ]
        },
        {
            label: "Connect",
            bgColor: isLight ? "#f0f0f0" : "#111111",
            textColor: isLight ? "#111" : "#fff",
            links: [
                { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/reyouthcompany", external: true },
                { label: "Email Us", ariaLabel: "Email", href: "mailto:reyouthcompany@gmail.com" },
                { label: "Call Us", ariaLabel: "Phone", href: "tel:+919296953926" }
            ]
        }
    ];

    return (
        <CardNav
            logo="/reyou-logo.png"
            logoText="The ReYouth Company"
            items={items}
            baseColor={isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 10, 10, 0.9)"}
            menuColor={isLight ? "#111111" : "#ffffff"}
            buttonBgColor={isLight ? "#0fb886" : "#7AE7C7"}
            buttonTextColor={isLight ? "#ffffff" : "#000000"}
            ctaLink="https://forms.gle/Rgxkpn99UkyFE7Xu7"
            ctaText="Get Started"
            ease="power3.out"
            showThemeToggle
        />
    );
}

export default Header

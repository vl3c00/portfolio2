

const footerLinks = [
    { href: "/contact", label: "Contact" },
];

export default function Footerr() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div>
                    <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        trcBudg8
      </p>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link, index) => (
                                <a 
                                    key={index} // ✅ Added key prop
                                    href={link.href} 
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

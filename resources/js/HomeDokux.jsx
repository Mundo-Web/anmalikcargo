import { createRoot } from 'react-dom/client';
import Base from './Components/Tailwind/Base';
import CreateReactScript from './Utils/CreateReactScript';
import { CarritoProvider } from './context/CarritoContext.jsx';


import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    Scale,
    Shield,
    Users,
    Globe,
    Phone,
    Mail,
    MapPin,
    Star,

    ChevronUp,
    MessageCircle,
    CheckCircle,
    AlertTriangle,
    FileText,
    Clock,
    Award,
    Heart,
    Plane,
    Building,
    User,
    ArrowRight,
    PlayCircle,
    Briefcase,
    GraduationCap,
    TrendingUp,
    Instagram,
    Facebook,
    Languages,
    Youtube,
    ChevronDown
} from 'lucide-react';
import { translations } from '../Data/translations.js';
import GeneralRest from './actions/GeneralRest';
import { LanguageContext } from './context/LanguageContext.jsx';
import MessagesRest from './actions/MessagesRest';
import Swal from 'sweetalert2';


const Home = ({ services = [], testimonies = [], faqs = [], generals = [] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [openFAQ, setOpenFAQ] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Estados para idiomas (desde Header)
    const [socials, setSocials] = useState([]);
    const [languagesSystem, setLanguagesSystem] = useState([]);
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);
    const [selectLanguage, setSelectLanguage] = useState(currentLanguage || languagesSystem[0]);

    // Form states
    const [formData, setFormData] = useState({
        phone: "",
        selectedService: null
    });
    const [sending, setSending] = useState(false);
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const descriptionRef = useRef();
    const serviceDropdownRef = useRef();
    const messagesRest = new MessagesRest();

    // Translation system compatibility
    console.log("Current Language:", currentLanguage);
    const [languageContext, setLanguageContext] = useState(currentLanguage?.description || 'es');

    const language = languageContext || 'es';
    const t = translations[language];

    // Cargar idiomas del sistema (desde Header)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const generalRest = new GeneralRest();
                const data = await generalRest.getSocials();
                const languages = await generalRest.getLanguages();
                setSocials(data);
                setLanguagesSystem(languages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Sincronizar con el contexto de idioma (desde Header)
    useEffect(() => {
        if (currentLanguage) {
            setSelectLanguage(currentLanguage);
        } else if (languagesSystem.length > 0) {
            setSelectLanguage(languagesSystem[0]);
        }
    }, [currentLanguage, languagesSystem]);

    // Función para cambiar idioma (desde Header)
    const onUseLanguage = async (langData) => {
        try {
            // Función para extraer el token de la cookie
            const getCsrfTokenFromCookie = () => {
                const cookie = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
                return cookie ? decodeURIComponent(cookie[1]) : null;
            };

            // Obtén el token CSRF de las cookies automáticamente
            const response = await fetch("/set-current-lang", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": getCsrfTokenFromCookie(), // Función para obtenerlo
                },
                body: JSON.stringify({ lang_id: langData.id }),
                credentials: "include", // Permite enviar cookies
            });

            if (response.ok) {
                await changeLanguage(langData); // ✅ Agrega await aquí
                setSelectLanguage(langData);
                window.location.reload(); // ⚠️ Opcional temporal para forzar actualización
            } else {
                console.log("Error de extracion:", await response.text());
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Función para obtener el icono según el nombre de la red social
    const getSocialIcon = (name) => {
        const socialName = name.toLowerCase();
        // Devuelve directamente el JSX del SVG para cada red social
        switch (socialName) {
            case 'instagram':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                );
            case 'facebook':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                );
            case 'whatsapp':
            case 'watsapp':
                return () => (
                   <svg fill='currentColor'   width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                );
            case 'twitter':
            case 'x':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                );
            case 'linkedin':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                );
            case 'youtube':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                );
            case 'tiktok':
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                    </svg>
                );
            default:
                return () => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                );
        }
    };

    // Función para obtener los colores según el nombre de la red social
    const getSocialColors = (name) => {
        const socialName = name.toLowerCase();
        switch (socialName) {
            case 'instagram':
                return 'from-pink-500 to-purple-600';
            case 'facebook':
                return 'from-blue-600 to-blue-700';
            case 'whatsapp':
            case 'watsapp':
                return 'from-green-500 to-green-600';
            case 'twitter':
            case 'x':
                return 'from-blue-400 to-blue-600';
            case 'linkedin':
                return 'from-blue-700 to-blue-900';
            case 'youtube':
                return 'from-red-500 to-red-700';
            case 'tiktok':
                return 'from-black to-gray-800';
            default:
                return 'from-gray-500 to-gray-700'; // Colores por defecto
        }
    };

    // Función para obtener el color de sombra según el nombre de la red social
    const getSocialShadowColor = (name) => {
        const socialName = name.toLowerCase();
        switch (socialName) {
            case 'instagram':
                return 'hover:shadow-pink-500/25';
            case 'facebook':
                return 'hover:shadow-blue-500/25';
            case 'whatsapp':
            case 'watsapp':
                return 'hover:shadow-green-500/25';
            case 'twitter':
            case 'x':
                return 'hover:shadow-blue-400/25';
            case 'linkedin':
                return 'hover:shadow-blue-700/25';
            case 'youtube':
                return 'hover:shadow-red-500/25';
            case 'tiktok':
                return 'hover:shadow-gray-800/25';
            default:
                return 'hover:shadow-gray-500/25';
        }
    };

    // Función para enviar el formulario de contacto
    const onMessageSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const request = {
            name: nameRef.current.value + " " + lastNameRef.current.value,
            email: emailRef.current.value,
            subject: formData.phone,
            description: descriptionRef.current.value,
            service_id: formData.selectedService?.id || null,
        };

        try {
            const result = await messagesRest.save(request);
            setSending(false);

            if (result) {
                // Redirigir a página de agradecimiento
                window.location.href = "/thanks";
            }
        } catch (error) {
            setSending(false);
            console.error("Error enviando mensaje:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
            });
        }
    };

    const testimonialImages = [
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonies.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonies.length]);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };


    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-500">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className={`flex items-center space-x-3 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="relative">

                                <a href="/">
                                    <img

                                        src="/assets/img/logo.png"
                                        alt="Dokux Logo"
                                        className="h-[40px] w-auto md:h-[50px] object-cover object-top"
                                    />
                                </a>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-8 items-center">
                            {Object.entries(t.nav).map(([key, value], index) => (
                                <button
                                    key={key}
                                    onClick={() => scrollToSection(key)}
                                    className={`text-gray-700 hover:text-[#36C4E4] transition-all duration-300 relative group transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {value}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#36C4E4] group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ))}

                            {/* Language Flags */}
                            <div
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
                                style={{ transitionDelay: '500ms' }}
                            >
                                {selectLanguage &&
                                    languagesSystem &&
                                    languagesSystem?.map((language, index) => (
                                        <React.Fragment key={language.id}>
                                            {index > 0 && <div className="w-px h-6 bg-gray-300"></div>}
                                            <button
                                                onClick={() => {
                                                    setLanguageContext(language?.description),
                                                        onUseLanguage(language)
                                                }}
                                                className={`flex items-center space-x-1 px-2 py-1 rounded transition-all duration-300 transform hover:scale-110 ${selectLanguage?.id === language.id
                                                    ? 'bg-[#36C4E4] text-white shadow-md'
                                                    : 'hover:bg-gray-200 text-gray-600'
                                                    }`}
                                            >
                                                <img
                                                    src={`/api/lang/media/${language.image}`}
                                                    alt={language.name}
                                                    className="w-5 h-4 object-cover rounded"
                                                />
                                                <span className="text-xs font-medium">{language.correlative?.toUpperCase()}</span>
                                            </button>
                                        </React.Fragment>
                                    ))}
                            </div>
                        </nav>

                        <div className="md:hidden flex items-center space-x-3">
                            {/* Mobile Language Flags */}
                            <div className="flex items-center space-x-2 px-2 py-1 rounded bg-gray-50">
                                {selectLanguage &&
                                    languagesSystem &&
                                    languagesSystem?.map((language, index) => (
                                        <React.Fragment key={language.id}>
                                            {index > 0 && <div className="w-px h-4 bg-gray-300"></div>}
                                            <button

                                                onClick={() => {
                                                    setLanguageContext(language?.description),
                                                        onUseLanguage(language)
                                                }}
                                                className={`flex items-center space-x-1 px-2 py-1 rounded transition-all duration-300 transform hover:scale-110 ${selectLanguage?.id === language.id
                                                    ? 'bg-[#36C4E4] text-white shadow-md'
                                                    : 'hover:bg-gray-200 text-gray-600'
                                                    }`}
                                            >
                                                <img
                                                    src={`/api/lang/media/${language.image}`}
                                                    alt={language.name}
                                                    className="w-4 h-3 object-cover rounded"
                                                />
                                                <span className="text-xs font-medium">{language.correlative?.toUpperCase()}</span>
                                            </button>
                                        </React.Fragment>
                                    ))}
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                                    <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                    <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="py-4 border-t border-gray-200 mt-4">
                            <div className="flex flex-col space-y-4">
                                {Object.entries(t.nav).map(([key, value], index) => (
                                    <button
                                        key={key}
                                        onClick={() => scrollToSection(key)}
                                        className={`text-left text-gray-700 hover:text-[#36C4E4] transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="inicio" className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `linear-gradient(rgba(54, 196, 228, 0.85), rgba(43, 163, 196, 0.85)), url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                ></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-[#36C4E4]/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-[#36C4E4]/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center text-white">
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                {t.hero.title.your}{' '}
                                <span className="text-white relative drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    {t.hero.title.procedures}
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#36C4E4] transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
                                </span>
                                <br />{t.hero.title.inSpain}{' '}
                                <span className="text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    {t.hero.title.security}, {t.hero.title.speed} {language === 'es' ? 'y' : 'and'} {t.hero.title.trust}
                                </span>
                            </h1>
                        </div>

                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-xl md:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                                {t.hero.subtitle}
                            </p>
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <button
                                onClick={() => scrollToSection('contacto')}
                                className="group bg-[#36C4E4] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#2BA3C4] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#36C4E4]/25 flex items-center justify-center space-x-2"
                            >
                                <span>{t.hero.cta.freeConsultation}</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button
                                onClick={() => scrollToSection('servicios')}
                                className="group border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-[#36C4E4] transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                <span>{t.hero.cta.knowServices}</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className={`grid grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {[
                                { number: '500+', label: t.hero.stats.successfulCases },
                                { number: '15+', label: t.hero.stats.yearsExperience },
                                { number: '98%', label: t.hero.stats.successRate }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                        {stat.number}
                                    </div>
                                    <div className="text-white mt-2 drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Servicios hecho*/}
            <section id="servicios" className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t.services.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#36C4E4]">{t.services.title.split(' ').slice(-1)}</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t.services.subtitle}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`/api/service/media/${service?.image}`}
                                        alt={service?.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0   opacity-80`} style={{ backgroundColor: service?.color }}>

                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                            <img
                                                src={`/api/service/media/${service?.icon}`}
                                                alt={service?.name}
                                                className="w-full h-full p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#36C4E4] transition-colors duration-300">
                                        {service?.title}
                                    </h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service?.characteristics.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 group/item">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-300">
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                </div>
                                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonios hecho */}
            <section id="testimonios" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t.testimonials.title.split(' ').slice(0, -2).join(' ')} <span className="text-[#36C4E4]">{t.testimonials.title.split(' ').slice(-2).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t.testimonials.subtitle}
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#36C4E4] via-[#2BA3C4] to-[#36C4E4]"></div>

                            <div className="text-center mb-8">


                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <img
                                            src={`/api/testimony/media/${testimonies[activeTestimonial]?.image}`}
                                            alt={testimonies[activeTestimonial]?.name}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-[#36C4E4] shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8 relative">
                                    <span className="text-6xl text-[#36C4E4]/30 absolute -top-4 -left-4">"</span>
                                    {testimonies[activeTestimonial]?.description}
                                    <span className="text-6xl text-[#36C4E4]/30 absolute -bottom-8 -right-4">"</span>
                                </blockquote>

                                <div className="border-t border-gray-200 pt-6">
                                    <div className="font-bold text-gray-900 text-xl mb-2">
                                        {testimonies[activeTestimonial]?.name}
                                    </div>
                                    <div className="text-gray-600 mb-3 flex items-center justify-center space-x-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{testimonies[activeTestimonial]?.correlative}</span>
                                    </div>
                                    <div className="inline-block bg-cyan-100 text-[#36C4E4] px-4 py-2 rounded-full text-sm font-medium">
                                        {language === 'es' ? 'Caso' : 'Case'}: {testimonies[activeTestimonial]?.case}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center space-x-3">
                                {testimonies.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${index === activeTestimonial
                                            ? 'bg-[#36C4E4] shadow-lg'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfil Profesional */}
            <section id="perfil" className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="relative z-10">
                                    <img
                                        src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                                        alt="Dokux Team"
                                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <div className="text-2xl font-bold">Dokux Team</div>
                                        <div className="text-blue-200">{language === 'es' ? 'Especialistas Legales' : 'Legal Specialists'}</div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    {t.profile.title.split(' ').slice(0, 1).join(' ')} <span className="text-[#36C4E4]">{t.profile.title.split(' ').slice(1).join(' ')}</span>
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {t.profile.subtitle}
                                </p>

                                <div className="space-y-6 mb-10">
                                    {[
                                        {
                                            icon: Shield,
                                            title: t.profile.values.security.title,
                                            subtitle: t.profile.values.security.subtitle,
                                            color: "text-[#36C4E4]"
                                        },
                                        {
                                            icon: Clock,
                                            title: t.profile.values.speed.title,
                                            subtitle: t.profile.values.speed.subtitle,
                                            color: "text-[#36C4E4]"
                                        },
                                        {
                                            icon: Heart,
                                            title: t.profile.values.trust.title,
                                            subtitle: t.profile.values.trust.subtitle,
                                            color: "text-[#36C4E4]"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4 group">
                                            <div className={`w-12 h-12 ${item.color} bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 group-hover:text-[#36C4E4] transition-colors duration-300">
                                                    {item.title}
                                                </div>
                                                <div className="text-gray-600">{item.subtitle}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 gap-8">
                                    {[
                                        { number: '1000+', label: t.profile.stats.procedures, icon: TrendingUp },
                                        { number: '5+', label: t.profile.stats.experience, icon: Clock },
                                        { number: '99%', label: t.profile.stats.satisfaction, icon: Award }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center group">
                                            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-200 transition-colors duration-300">
                                                <stat.icon className="h-8 w-8 text-[#36C4E4]" />
                                            </div>
                                            <div className="text-3xl font-bold text-[#36C4E4] group-hover:scale-110 transition-transform duration-300">
                                                {stat.number}
                                            </div>
                                            <div className="text-gray-600 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t.faq.title.split(' ').slice(0, 1).join(' ')} <span className="text-[#36C4E4]">{t.faq.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t.faq.subtitle}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {faqs?.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden transform hover:scale-105 transition-all duration-300">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 group"
                                >
                                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#36C4E4] transition-colors duration-300">
                                        {faq.name}
                                    </h3>
                                    <div className={`transform transition-all duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                                        {openFAQ === index ? (
                                            <ChevronUp className="h-6 w-6 text-[#36C4E4]" />
                                        ) : (
                                            <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-[#36C4E4]" />
                                        )}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-8 pb-6">
                                        <p className="text-gray-700 leading-relaxed">{faq.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t.contact.title.split(' ').slice(0, 1).join(' ')} <span className="text-[#36C4E4]">{t.contact.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t.contact.subtitle}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">{language === 'es' ? 'Información de Contacto' : 'Contact Information'}</h3>

                                <div className="space-y-8">
                                    {[
                                        {
                                            icon: Phone,
                                            title: t.contact.info.phone,
                                            details: generals?.find(g => g.correlative === 'phone_contact')?.description,
                                            color: "from-green-500 to-green-600"
                                        },
                                        {
                                            icon: Mail,
                                            title: t.contact.info.email,
                                            details: generals?.find(g => g.correlative === 'email_contact')?.description,

                                            color: "from-blue-500 to-blue-600"
                                        },
                                        {
                                            icon: MapPin,
                                            title: t.contact.info.office,
                                            details: generals?.find(g => g.correlative === 'address')?.description,
                                            color: "from-purple-500 to-purple-600"
                                        },
                                        {
                                            icon: Clock,
                                            title: t.contact.info.schedule,
                                            details: generals?.find(g => g.correlative === 'opening_hours')?.description,
                                            color: "from-amber-500 to-amber-600"
                                        }
                                    ].map((contact, index) => (
                                        <div key={index} className="flex items-start space-x-6 group">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <contact.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-900 transition-colors duration-300">
                                                    {contact.title}
                                                </div>

                                                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                    {contact.details}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl p-8 shadow-2xl">
                                <form className="space-y-6" onSubmit={onMessageSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-bold text-gray-700 mb-3">
                                                {t.contact.form.fullName}
                                            </label>
                                            <input
                                                ref={nameRef}
                                                type="text"
                                                id="nombre"
                                                required
                                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                placeholder={t.contact.form.placeholders.fullName}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="apellido" className="block text-sm font-bold text-gray-700 mb-3">
                                                Apellidos
                                            </label>
                                            <input
                                                ref={lastNameRef}
                                                type="text"
                                                id="apellido"
                                                required
                                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                placeholder="Apellidos"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                                                {t.contact.form.email}
                                            </label>
                                            <input
                                                ref={emailRef}
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                placeholder={t.contact.form.placeholders.email}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="telefono" className="block text-sm font-bold text-gray-700 mb-3">
                                                {t.contact.form.phone}
                                            </label>
                                            <input
                                                ref={phoneRef}
                                                type="tel"
                                                id="telefono"
                                                required
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                placeholder={t.contact.form.placeholders.phone}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="servicio" className="block text-sm font-bold text-gray-700 mb-3">
                                            Servicio de Interés
                                        </label>
                                        <div className="relative" ref={serviceDropdownRef}>
                                            <button
                                                type="button"
                                                onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-left flex items-center justify-between"
                                            >
                                                <div className="flex items-center">
                                                    {formData.selectedService ? (
                                                        <>
                                                            <div
                                                                className="w-6 h-6 rounded-full mr-3 p-1"
                                                                style={{ backgroundColor: formData.selectedService?.color || '#36C4E4' }}
                                                            >
                                                                <img src={`/api/service/media/${formData.selectedService.icon}`} className='h-full w-full object-cover' />

                                                            </div>
                                                            <span>{formData.selectedService.title}</span>
                                                        </>
                                                    ) : (
                                                        <span className="text-gray-500">Selecciona un servicio</span>
                                                    )}
                                                </div>
                                                <ChevronDown className={`h-5 w-5 transition-transform ${showServiceDropdown ? 'rotate-180' : ''}`} />
                                            </button>

                                            {showServiceDropdown && (
                                                <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-xl py-2 max-h-60 overflow-auto border border-gray-200">
                                                    <div
                                                        className="px-6 py-3 hover:bg-gray-100 cursor-pointer flex items-center transition-colors"
                                                        onClick={() => {
                                                            setFormData({ ...formData, selectedService: null });
                                                            setShowServiceDropdown(false);
                                                        }}
                                                    >
                                                        <span className="text-gray-500">Consulta General</span>
                                                    </div>
                                                    {services.map((service) => (
                                                        <div
                                                            key={service.id}
                                                            className="px-6 py-3 hover:bg-gray-100 cursor-pointer flex items-center transition-colors"
                                                            onClick={() => {
                                                                setFormData({ ...formData, selectedService: service });
                                                                setShowServiceDropdown(false);
                                                            }}
                                                        >
                                                            <div
                                                                className="w-4 h-4 rounded-full mr-3"
                                                                style={{ backgroundColor: service.color }}
                                                            ></div>
                                                            <span>{service.title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-bold text-gray-700 mb-3">
                                            {t.contact.form.message}
                                        </label>
                                        <textarea
                                            ref={descriptionRef}
                                            id="mensaje"
                                            rows={5}
                                            required
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#36C4E4] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                                            placeholder={t.contact.form.placeholders.message}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="w-full bg-gradient-to-r from-[#36C4E4] to-[#2BA3C4] text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-[#2BA3C4] hover:to-[#1E8FA8] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                                    >
                                        {/* Loading background animation */}
                                        {sending && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#2BA3C4] to-[#36C4E4] animate-pulse"></div>
                                        )}

                                        {/* Loading spinner */}
                                        {sending && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={`flex items-center space-x-3 transition-all duration-300 ${sending ? 'opacity-0' : 'opacity-100'}`}>
                                            <span>{t.contact.form.submit}</span>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>


                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-900 via-[#36C4E4] to-gray-900 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="h-10 w-10 text-[#36C4E4]" />
                                <div>
                                    <div className="text-2xl font-bold">Dokux</div>
                                    <div className="text-gray-400">Asesoría y Gestión</div>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t.footer.description}
                            </p>
                            <div className="flex space-x-4 mb-6">
                                {socials?.filter(social => social.visible && social.status).map((social, index) => {
                                    const SocialIconComponent = getSocialIcon(social.description);
                                    const colorClasses = getSocialColors(social.description);
                                    const shadowClass = getSocialShadowColor(social.description);

                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-gradient-to-r ${colorClasses} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg ${shadowClass}`}
                                            title={social.description || social.name}
                                        >
                                            <SocialIconComponent />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-6">{t.footer.services}</h4>
                            <ul className="space-y-3 text-gray-300">
                                {services?.map((service, index) => (
                                    <li key={index} className="hover:text-[#36C4E4] transition-colors duration-300 cursor-pointer flex items-center space-x-2">
                                        <ArrowRight className="h-4 w-4" />
                                        <span>{service.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-6">{t.footer.contact}</h4>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-[#36C4E4]" />

                                    <span className="whitespace-pre-line">
                                        {generals?.find(g => g.correlative === 'phone_contact')?.description}
                                    </span>

                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-[#36C4E4]" />
                                    <span className="whitespace-pre-line">
                                        {generals?.find(g => g.correlative === 'email_contact')?.description}
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-[#36C4E4] mt-1" />
                                    <div>
                                        <span className="whitespace-pre-line">
                                            {generals?.find(g => g.correlative === 'address')?.description}
                                        </span>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="h-5 w-5 text-[#36C4E4]" />
                                    <div>
                                        <span className="whitespace-pre-line">
                                            {generals?.find(g => g.correlative === 'opening_hours')?.description}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} Dokux Asesoría y Gestión. Todos los derechos reservados. Power by <a href='https://mundoweb.pe' className='font-semibold'>Mundo Web</a></p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            {(() => {
                const whatsappSocial = socials?.find(social =>
                    social.description.toLowerCase().includes('whatsapp') && social.visible && social.status
                );

                if (!whatsappSocial) return null;

                return (
                    <>
                        <a
                            href={whatsappSocial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fixed bottom-8 right-8  fill-white  bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-110 transition-all duration-300 z-50 animate-bounce"
                            style={{ animationDuration: '2s' }}
                            title={whatsappSocial.description || whatsappSocial.name}
                        >
                            <svg width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        </a>
                    </>
                );
            })()}

            <style jsx>{`
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `}</style>
        </div>
    );
}


CreateReactScript((el, properties) => {
    createRoot(el).render(
        <CarritoProvider>
            <Base {...properties}>
                <Home {...properties} />
            </Base>
        </CarritoProvider>
    );
});

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Cpu,
  Cuboid as Cube,
  DollarSign,
  Eye,
  FileSearch,
  Gauge,
  Menu,
  MessageSquare,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showGDPRBanner, setShowGDPRBanner] = useState(() => {
    const gdprStatus = localStorage.getItem("gdprStatus");
    return gdprStatus === null; // Show banner if no status is set
  });

  const plans = [
    {
      name: "Basic Plan",
      price: "$49",
      features: [
        "AI-powered car diagnostics",
        "Virtual preview of modifications",
        "Basic AI design library",
        "Performance reduction reports",
      ],
    },
    {
      name: "Pro Plan",
      price: "$129",
      features: [
        "Complete car analysis",
        "AI-generated 3D models",
        "Advanced customisation",
        "Priority support",
      ],
    },
    {
      name: "Enterprise Plan",
      price: "$299",
      features: [
        "Comprehensive AI planning",
        "Expert tuner access",
        "Intelligent efficiency tools",
        "Premium design models",
      ],
    },
  ];

  const testimonials = [
    {
      name: "John - CEO",
      role: "Elite Auto Designs",
      image: "/images/T1.png",
      text: "Our business operations have evolved as a result of implementing AI-powered automobile customisation. Our workflow has been streamlined and manual errors have been greatly reduced thanks to the accuracy and effectiveness of vehicle modifications.",
      rating: 5,
    },
    {
      name: "Sophia - Managing Director",
      role: "AutoTech Innovations",
      image: "/images/T2.png",
      text: "Our shift to auto customisation driven by AI has changed the industry. AI has improved our ability to produce custom designs with unparalleled accuracy, from automated changes to predictive styling. Sales have increased by 35%, and customers adore the personalised experience.",
      rating: 5,
    },
    {
      name: "James - Founder",
      role: "Smart Auto Mods",
      image: "/images/T3.png",
      text: "Our customisation shop's service standards have increased thanks to AI-driven automation. The complex algorithms precisely implement changes, recommend the best designs, and assess user preferences.",
      rating: 5,
    },
    {
      name: "Emma - Director",
      role: "Racing Team",
      image: "/images/T4.png",
      text: "AI has improved design correctness, decreased waste, and reduced expenses in our car personalisation process. We can anticipate trends and provide high-end, in-demand customisations thanks to the data-driven insights, which help us stay one step ahead of the competition.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question:
        "How can my business profit from automotive customisation powered by AI?",
      answer:
        "By evaluating customer tastes, improving design decisions, and automating customisation procedures, machine learning (AI) makes customised car changes possible. This results in more customer joy, lower costs, and more efficiency.",
    },
    {
      question: "What kinds of AI-powered modifications to cars are available?",
      answer:
        "Smart infotainment systems, improved autonomous driving, predictive maintenance, personalised body modifications, and AI-optimized performance tuning for efficiency and safety are just a few among the ways AI may personalise a vehicle.",
    },
    {
      question:
        "How does AI improve the customisation of automobiles for customers?",
      answer:
        "Machine learning is used by AI-powered platforms to suggest customised upgrades based on user preferences, driving patterns, and budgetary limitations. Customers can see changes before they go into effect with the use of AR/VR experiences and virtual simulations.",
    },
    {
      question: "Is it economical for businesses to customize cars using AI?",
      answer:
        "Indeed, AI streamlines design and production processes, minimises labour costs, and limits errors. By estimating inventory requirements and maximising material utilisation, it additionally boosts supply chain management and raises profit margins.",
    },
    {
      question:
        "Is it possible to integrate AI-powered car customisation with current business processes?",
      answer:
        "Artificial intelligence are scalable and easily connected with production facilities, dealerships, and auto garages. For increased productivity, they improve customer relationship management (CRM), order tracking, and procedure automation.",
    },
    {
      question:
        "What are the coming advancements in AI-powered car individualisation?",
      answer:
        "For safe and verifiable vehicle decrease, the future holds autonomous learning car modification systems, 3D printing integration, real-time AI-driven customisation at dealerships, and blockchain-powered personalisation authentication.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Add this useEffect hook to initialize Tawk.to
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67ac58c53a842732607dba73/1ijsjlhrm";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Add script to document
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Add form handling functions
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      setSubmitStatus({
        type: "error",
        message: "Please complete the CAPTCHA verification",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaValue,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
        setCaptchaValue(null);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const gdprStatus = localStorage.getItem("gdprStatus");
    if (gdprStatus) {
      setShowGDPRBanner(false);
    }
  }, []);

  const acceptGDPR = () => {
    localStorage.setItem("gdprStatus", "accepted");
    setShowGDPRBanner(false);
  };

  const declineGDPR = () => {
    localStorage.setItem("gdprStatus", "declined");
    setShowGDPRBanner(false);
  };

  return (
    <>
      <Helmet>
        <title>AutoMod AI - AI-Powered Car Customization Platform</title>
        <meta
          name="description"
          content="Transform your vehicle with AutoMod AI's cutting-edge artificial intelligence car customization platform. Get AI-powered diagnostics, virtual previews, and expert modifications."
        />
        <meta
          name="keywords"
          content="AI car customization, automotive AI, car modifications, vehicle customization, AI diagnostics, car tuning, automotive technology, virtual car preview, car performance optimization, automotive innovation"
        />

        {/* Favicon and manifest links */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Automod" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" /> 
      </Helmet>

      <div className="min-h-screen bg-primary text-primary-light overflow-hidden">
        {/* Header */}
        <header
          className={`fixed w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary transition-all duration-300 ${
            isVisible ? "shadow-lg" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2 hover-scale">
                <img
                  src="/images/icon.png"
                  alt="AutoMod AI Icon"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/images/logo_name.png"
                  alt="AutoMod AI Logo"
                  className="h-8 object-contain" // Adjust height as needed
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="hover:text-accent transition-colors duration-300 hover-scale"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="hover:text-accent transition-colors duration-300 hover-scale"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="hover:text-accent transition-colors duration-300 hover-scale"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors duration-300 hover-scale"
                >
                  Contact
                </a>
                <Link
                  to="/dashboard"
                  className="inline-block bg-accent hover:bg-accent-bright px-8 py-2 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <span className="font-semibold relative z-10">Dashboard</span>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-secondary border-t border-secondary animate-slideDown">
              <div className="container mx-auto px-4 py-4 space-y-4 stagger-fade-in">
                <a
                  href="#home"
                  className="block hover:text-accent transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="block hover:text-accent transition-colors duration-300"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block hover:text-accent transition-colors duration-300"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="block hover:text-accent transition-colors duration-300"
                >
                  Contact
                </a>
                <Link
                  to="/dashboard"
                  className="block w-full bg-accent hover:bg-accent-bright px-8 py-2 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <span className="font-semibold text-center relative z-10">
                    Dashboard
                  </span>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-60 pb-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/Hero.png')] bg-cover bg-center">
            <div className="absolute inset-0 "></div>
          </div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: {
                color: { value: "transparent" },
              },
              fpsLimit: 60,
              particles: {
                color: { value: "#ffffff" },
                number: {
                  value: 40,
                  density: { enable: true, value_area: 800 },
                },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 3 } },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                },
                modes: {
                  grab: {
                    distance: 140,
                    links: { opacity: 0.5 },
                  },
                },
              },
            }}
            className="absolute inset-0 z-[1]"
          />
          <div className="container mx-auto px-4 relative z-[2]">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Based Automated Car Assistance And Modification At Your
                Doorstep
              </h1>
              <p className="text-xl text-primary-light mb-8">
                We are here to assist in AI-Based Customization To Make It Into
                Reality
              </p>
              <a
                href="#contact"
                className="inline-block bg-accent hover:bg-accent-bright px-12 py-4 transition-all duration-300 hover-scale relative"
                style={{
                  clipPath:
                    "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                }}
              >
                <span className="font-semibold text-lg relative z-10">
                  Begin Tailoring
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 relative">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/about us.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video Side */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/about-us.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h3>About us</h3>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
                  Uprising Car Automation
                </h1>
                <p className="text-lg text-primary-light leading-relaxed">
                  We are AI-driven precision, AutoMod AI changes car
                  customisation, enabling companies and enthusiasts to
                  effectively design, alter, and optimise vehicles.Integrate
                  market access, cost estimation, and AI-powered visualisation
                  to promote smooth, data-based choices for improved automotive
                  innovation, customer satisfaction, and industry
                  competitiveness.
                </p>
                <p className="text-lg text-primary-light leading-relaxed"></p>
                <a
                  href="#features"
                  className="inline-block bg-accent hover:bg-accent-bright px-8 py-3 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <span className="font-semibold relative z-10">
                    Explore Our Features
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/features-new.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <div className="grid md:grid-cols-3 gap-8 stagger-fade-in">
              {[
                {
                  icon: <Cpu />,
                  title: "Smart Performance Tuning",
                  desc: "AI-powered motor upgrades",
                },
                {
                  icon: <Cube />,
                  title: "Adaptive Driving Modes",
                  desc: "Real-time AI adjustments",
                },
                {
                  icon: <ShoppingCart />,
                  title: "Predictive Maintenance Alerts",
                  desc: "Computerised detection of problems",
                },
                {
                  icon: <Eye />,
                  title: "Intelligent Interior Customization",
                  desc: "AI-powered comfort that is customized",
                },
                {
                  icon: <DollarSign />,
                  title: "Aerodynamic Efficiency Boost",
                  desc: "AI-powered modifications to the body",
                },
                {
                  icon: <FileSearch />,
                  title: "Autonomous Safety Enhancements",
                  desc: "Driving security through AI",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-accent animate-float">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 relative">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/pricing.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-fade-in">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-primary/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover-lift
                          ${
                            index === 1
                              ? "shadow-2xl shadow-accent/40 border-accent scale-110"
                              : ""
                          }
                        `}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-accent mb-6">
                    {plan.price}
                    <span className="text-lg text-primary-light">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Gauge className="w-5 h-5 text-accent mr-2 animate-float" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full bg-accent hover:bg-accent-bright px-6 py-3 rounded-lg transition-all duration-300 hover-scale text-center"
                  >
                    Choose {plan.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/testimonials.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
              What Our Users Say
            </h1>
            <div className="relative">
              <div
                ref={useInfiniteScroll()}
                className="flex overflow-hidden gap-6 scroll-smooth"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 70%, black 60%, transparent)",
                }}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div key={index} className="flex-none w-[400px]">
                      <div className="bg-secondary p-6 rounded-lg h-full">
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-primary-light">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-primary-light mb-4">
                          {testimonial.text}
                        </p>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-accent fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/faq-bg-new.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* FAQ Questions */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-primary rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between"
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === index ? null : index
                        )
                      }
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {activeAccordion === index ? (
                        <X className="w-5 h-5" />
                      ) : (
                        <MessageSquare className="w-5 h-5" />
                      )}
                    </button>
                    {activeAccordion === index && (
                      <div className="px-6 pb-4 text-primary-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Image Side */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="./images/faq-new.png"
                  alt="Car Customization"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/cta bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div
              className="relative max-w-4xl mx-auto p-12 before:absolute before:inset-0 before:bg-accent/20 before:-z-10"
              style={{
                clipPath:
                  "polygon(92% 0, 100% 50%, 92% 100%, 8% 100%, 0% 50%, 8% 0%)",
              }}
            >
              <div className="text-center scale-in">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
                  Ready to Start Your Journey?
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-light">
                  Be a part of us in Automobile Partners who transform their
                  vehicle via AI-Powered platform
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-accent hover:bg-accent-bright px-8 py-4 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <span className="font-semibold text-lg relative z-10">
                    Attempt Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/contact us bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Map Side */}
              <div className="relative h-[500px] rounded-lg overflow-hidden p-4">
                {/* Border box moved behind the map */}
                <div className="absolute inset-4 border-4 border-red-500 z-0 rounded-lg -translate-y-4 translate-x-4"></div>

                {/* Map overlay */}
                <div className="absolute inset-4 bg-primary/30 z-20 rounded-lg"></div>

                {/* Map iframe moved in front */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1533964604414!2d79.86097007457687!3d6.872216393126521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb7545ceba5%3A0xc109bae4f4406a98!2s28%20Sangam%20Ln%2C%20Colombo!5e0!3m2!1sen!2slk!4v1739347555419!5m2!1sen!2slk"
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-0 rounded-lg grayscale contrast-125 brightness-75 z-10"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Gradient overlay on top */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 z-30"></div>
              </div>

              {/* Form Side */}
              <div className="bg-secondary p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-primary border border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey="6LdWy9UqAAAAAIeUnKGaJJnZgn8DYD-shNrSUvfX"
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                  </div>

                  {submitStatus.message && (
                    <div
                      className={`p-3 rounded-lg text-center ${
                        submitStatus.type === "success"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !captchaValue}
                    className={`w-full bg-accent hover:bg-accent-bright px-6 py-3 rounded-lg transition-colors ${
                      isSubmitting || !captchaValue
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Buttons Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-64 h-24 bg-accent hover:bg-accent-bright px-8 py-3 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h4 className="font-semibold text-xl mb-1">Phone</h4>
                    <span className="font-semibold relative z-10">
                      0112 364 044
                    </span>
                    <br></br>
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className="w-64 h-24 bg-accent hover:bg-accent-bright px-8 py-3 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h4 className="font-semibold text-xl mb-1">Email</h4>
                    <span className="font-semibold relative z-10">
                      contact@automod.lk
                    </span>
                    <br></br>
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className="w-64 h-24 bg-accent hover:bg-accent-bright px-8 py-3 transition-all duration-300 hover-scale relative"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h4 className="font-semibold text-xl mb-1">Address</h4>
                    <span className="font-semibold relative z-10">
                      28, Sangam Ln, Colombo 00600, Sri Lanka
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage: 'url("/images/footerbgnewnew.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(0px)",
              transform: "scale(1.1)", // Prevents blur edges from showing
            }}
          />

          {/* Content Layer with Glassmorphism */}
          <div className="relative z-10">
            <div className="container mx-auto px-20">
              <div className="backdrop-blur-md bg-secondary/30 border border-gray-600/50 rounded-xl p-10">
                <div className="grid md:grid-cols-2 gap-20">
                  {/* Logo and Elevator Pitch */}
                  <div className="max-w-xl">
                    <div className="flex items-center space-x-2 mb-4">
                      <img
                        src="/images/logo.png"
                        alt="AutoMod AI Logo"
                        className="w-48 h-auto object-contain"
                      />
                    </div>
                    <p className="text-primary-light text-justify">
                      AutoMod is your go-to platform for car customization,
                      offering expert guides, premium parts, and professional
                      services to upgrade performance.
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex flex-col items-end max-w-xl">
                    <h4 className="font-semibold mb-6 text-3xl">Follow Us</h4>
                    <div className="flex space-x-8">
                      <a
                        href="https://www.facebook.com/automodAI/"
                        className="text-primary-light hover:text-accent transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/automodai"
                        className="text-primary-light hover:text-accent transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="https://www.pinterest.com/automodAI/"
                        className="text-primary-light hover:text-accent transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.89-.986-.705 0-1.269.73-1.269 1.708 0 .623.211 1.044.211 1.044s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.442-3.57-4.442-6.555 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@Automod-AI"
                        className="text-primary-light hover:text-accent transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-600/50 mt-12 pt-8 text-primary-light">
                  <div className="flex justify-between items-center">
                    <div>
                      <p>
                        &copy; {new Date().getFullYear()} AutoMod AI. All rights
                        reserved.
                      </p>
                    </div>
                    <div className="flex space-x-6 mr-10">
                      <Link
                        to="/privacy-policy"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        to="/terms-and-conditions"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        Terms & Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* GDPR Banner */}
        {showGDPRBanner && (
          <div className="fixed bottom-4 left-4 max-w-sm bg-secondary/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/20 z-50 animate-slideUp">
            <h4 className="font-semibold text-lg mb-2">Cookie Policy</h4>
            <p className="text-sm text-primary-light mb-4">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              "Accept", you consent to our use of cookies.
            </p>
            <div className="flex justify-end space-x-4">
              <Link
                to="/privacy-policy"
                className="text-sm text-white hover:text-gray-200 px-4 py-2 transition-colors"
              >
                Learn More
              </Link>
              <button
                onClick={declineGDPR}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptGDPR}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;

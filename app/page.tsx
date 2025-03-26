"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000f30]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[1400px]">
        <div className="absolute inset-0">
          <Image
            src="/Desktop-Header-Light-1.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full text-center">
          {/* Top text */}
          <div className="pt-32">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white font-bold text-[40px] leading-tight mb-4 font-[var(--font-roboto-condensed)]"
            >
              Disrupting capital markets with digital innovation.
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-white font-normal text-[19px] font-[var(--font-roboto-condensed)]"
            >
              RocketFin is an advisory and delivery firm focused on building
              digital solutions within Financial Services
            </motion.p>
          </div>

          <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 w-full max-w-[900px]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[#0066CC] font-bold text-[40px] leading-tight font-[var(--font-roboto-condensed)]"
            >
              The journey to digital excellence requires
              <br />
              more than technology, it requires partnership.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Existing paragraph */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center font-bold text-[20px] leading-relaxed font-[var(--font-roboto-condensed)]"
            >
              At RocketFin we're not just consultants, we're partners in your
              journey to success. We transform complex challenges into elegant
              solutions, powered by cutting-edge data insights, AI and agile
              methodologies. We listen to your ambitions, envision your user's
              goals and then design and engineer solutions that fit your unique
              trajectory at a cost effective level. We work alongside you,
              combining our expertise with your vision to craft custom-built
              solutions that propel your business forward.
            </motion.p>
          </div>

          {/* Three cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Our People Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/our_people.png"
                  alt="Our People Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Our People
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                Our team is compiled of industry experts who deliver expert
                advisory, cutting-edge technology design and engineering
                solutions across the full spectrum of capital markets.
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>

            {/* Clients Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/client.png"
                  alt="Clients Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Clients
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                We partner with a diverse range of Capital Markets firms, from
                global financial institutions to specialized investment firms.
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>

            {/* Locations Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/locations.png"
                  alt="Locations Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Locations
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                We have representation in these centres:
                <br />
                London
                <br />
                New York
                <br />
                Malta
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>
          </div>

          {/* Second set of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
            {/* Client Focused Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/client_focused.png"
                  alt="Client Focused Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Client Focused
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                We work closely with our clients to ensure we provide the
                ultimate value and can be totally flexible in our working
                arrangements:
                <br />
                Fixed price
                <br />
                Outcome based
                <br />
                Time and materials
                <br />
                Or a blended mix
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>

            {/* Industry Focused Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/industry_focused.png"
                  alt="Industry Focused Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Industry Focused
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                We believe a small team with industry experience, domain
                expertise and track-record, delivers quicker, better and at less
                cost than larger teams of contractors or generalists.
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>

            {/* Delivery Focused Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="rounded-full w-32 h-32 mb-6 flex items-center justify-center">
                <Image
                  src="/delivery_focused.png"
                  alt="Delivery Focused Icon"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold mb-4 font-[var(--font-roboto-condensed)]">
                Delivery Focused
              </h3>
              <p className="text-[18px] mb-8 font-[var(--font-roboto-condensed)] flex-grow">
                RocketFin's breadth of advisory and technology delivery
                expertise enables us to deliver innovative solutions on-time, in
                budget and that make a difference to your business.
              </p>
              <button className="bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] mt-auto">
                LEARN MORE
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen bg-[#f5f7fa] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Advisory Services - Text Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-1">
                <h3 className="text-[40px] font-bold mb-6 font-[var(--font-roboto-condensed)] text-[#333]">
                  Advisory Services
                </h3>
                <ul className="space-y-3 text-[18px] leading-[22px] font-[var(--font-roboto-condensed)] text-[#333] font-normal">
                  <li>FMI Strategy</li>
                  <li>Digital Assets</li>
                  <li>Data Science & Strategy</li>
                  <li>Risk Management</li>
                  <li>Technology & Infrastructure</li>
                  <li>Transformation</li>
                  <li>Operational Risk/Resilience</li>
                  <li>PE Advisory</li>
                </ul>
              </div>
              <div className="relative flex justify-center order-2">
                <Image
                  src="/1st.svg"
                  alt="Advisory Services Illustration"
                  width={500}
                  height={350}
                  className="w-auto h-auto"
                />
              </div>
            </motion.div>

            {/* Design Services - Image Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-1 md:order-2">
                <h3 className="text-[40px] font-bold mb-6 font-[var(--font-roboto-condensed)] text-[#333]">
                  Design Services
                </h3>
                <ul className="space-y-3 text-[18px] leading-[22px] font-[var(--font-roboto-condensed)] text-[#333] font-normal">
                  <li>UX/UI Design & Product Vision</li>
                  <li>Rapid Prototyping</li>
                  <li>Data Visualisation</li>
                  <li>iOS & Android Design</li>
                  <li>Information Architecture</li>
                  <li>User Journey Mapping</li>
                  <li>Persona & User Analysis</li>
                </ul>
              </div>
              <div className="relative flex justify-center order-2 md:order-1">
                <Image
                  src="/trading.svg"
                  alt="Design Services Illustration"
                  width={500}
                  height={350}
                  className="w-auto h-auto"
                />
              </div>
            </motion.div>

            {/* Delivery Services - Text Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-1">
                <h3 className="text-[40px] font-bold mb-6 font-[var(--font-roboto-condensed)] text-[#333]">
                  Delivery Services
                </h3>
                <ul className="space-y-3 text-[18px] leading-[22px] font-[var(--font-roboto-condensed)] text-[#333] font-normal">
                  <li>Product Engineering</li>
                  <li>API Development</li>
                  <li>Quant Analytics</li>
                  <li>Platform Partner Implementation</li>
                  <li>iOS & Android Development</li>
                  <li>AI/ML Implementation</li>
                  <li>Blockchain Integration</li>
                </ul>
              </div>
              <div className="relative flex justify-center order-2">
                <Image
                  src="/risk.svg"
                  alt="Delivery Services Illustration"
                  width={500}
                  height={350}
                  className="w-auto h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

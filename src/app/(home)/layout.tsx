import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import AboutPage from "./@about";
import Skills from "./@skills";
import SkillProgress from "./@skillProgress";
import Education from "./@education";
import Projects from "./@projects";

export default function Layout() {
    return (
        <>
            <Header />
            <AboutPage />
            <Skills />
            <SkillProgress />
            <Education />
            <Projects />
            <Footer />

        </>
    );
}
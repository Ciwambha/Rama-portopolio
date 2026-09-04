import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { FeaturedProject } from '@/components/featured-project'
import { AcademicProjects } from '@/components/academic-projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <FeaturedProject />
        <AcademicProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

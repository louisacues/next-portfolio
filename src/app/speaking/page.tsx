import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  // event,
  cta,
  href,
}: {
  title: string
  description: string
  // event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {/* <Card.Eyebrow decorate>{event}</Card.Eyebrow> */}
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I've developed a set of technical skills which allowed me to make progress."
      intro="Over the years, I have cultivated a robust set of technical skills, each honed through dedicated practice and real-world application. This expertise has been instrumental in driving significant progress in my endeavors, empowering me to navigate challenges with precision and consistently deliver results. "
    >
      <div className="space-y-20">
        <SpeakingSection title="Skills">
          <Appearance
            href="https://tailwindcss.com/docs/installation"
            title="Tailwind"
            description="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces without writing custom styles. It offers a set of low-level utility classes that allow developers to create responsive designs with ease."
            // event="SysConf 2021"
            cta="Reference"
          />
          <Appearance
            href="https://www.typescriptlang.org/"
            title="Typescript"
            description="TypeScript is a superset of JavaScript that adds optional static typing to the language, enabling enhanced code quality and maintainability. By catching errors early through its type-checking capabilities, TypeScript provides developers with a more robust and scalable environment for large-scale applications."
            // event="Business of Startups 2020"
            cta="Reference"
          />
          <Appearance
            href="https://nextjs.org/"
            title="Next.js"
            description="Next.js is an open-source React framework that enables developers to build server-side rendered and static web applications with ease. It offers features like automatic code-splitting, built-in CSS support, and optimized performance out of the box."
            // event="Business of Startups 2020"
            cta="Reference"
          />
          <Appearance
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            title="Javascript"
            description="JavaScript is a versatile, high-level programming language primarily known for enhancing interactivity and functionality in web browsers. It forms the triad of foundational web technologies alongside HTML and CSS, enabling developers to create dynamic, responsive web applications."
            // event="Business of Startups 2020"
            cta="Reference"
          />
          <Appearance
            href="https://getbootstrap.com/"
            title="Bootstrap"
            description="Bootstrap is a popular open-source CSS framework designed for creating responsive and mobile-first web designs with ease. It offers a comprehensive set of components and styles, streamlining the web development process for both beginners and experienced developers."
            // event="Business of Startups 2020"
            cta="Reference"
          />
          <Appearance
            href="https://reactjs.org/"
            title="Reactjs"
            description="React is a JavaScript library developed by Facebook for building user interfaces in web applications. It introduces a component-based architecture, enabling developers to create reusable UI elements and manage state efficiently."
            // event="Business of Startups 2020"
            cta="Reference"
          />
        </SpeakingSection>
        {/* <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            // event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            // event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            // event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection> */}
      </div>
    </SimpleLayout>
  )
}

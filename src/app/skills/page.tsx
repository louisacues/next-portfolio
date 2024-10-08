import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoNextJS from '@/images/logos/nextjs.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoReact from '@/images/logos/react.svg'
import logoStorybook from '@/images/logos/storybook.svg'

const skills = [
  {
    name: 'Tailwind',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces without writing custom styles.',
    link: {
      href: 'https://tailwindcss.com/docs/installation',
      //   label: 'reference',
    },
    logo: logoTailwind,
  },
  {
    name: 'Typescript',
    description:
      'TypeScript is a superset of JavaScript that adds optional static typing to the language, enabling enhanced code quality and maintainability.',
    link: { href: 'https://www.typescriptlang.org/' },
    logo: logoTypescript,
  },
  {
    name: 'Next.js',
    description:
      'Next.js is an open-source React framework that enables developers to build server-side rendered and static web applications with ease.',
    link: { href: 'https://nextjs.org/' },
    logo: logoNextJS,
  },
  {
    name: 'Javascript',
    description:
      'JavaScript is a versatile, high-level programming language primarily known for enhancing interactivity and functionality in web browsers.',
    link: {
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    logo: logoJavascript,
  },
  {
    name: 'Reactjs',
    description:
      'React is a JavaScript library developed by Facebook for building user interfaces in web applications. It introduces a component-based architecture, enabling developers to create reusable UI elements and manage state efficiently.',
    link: { href: 'https://reactjs.org/' },
    logo: logoReact,
  },
  {
    name: 'Storybook',
    description:
      'Storybook is an open-source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation for various frontend frameworks and libraries.',
    link: { href: 'https://storybook.js.org/' },
    logo: logoStorybook,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="The projects I've shared reflect my passion for programming and continuous learning. While I hope you find them interesting, I’m unable to share specific details about my work with the company due to an NDA. However, you can explore our work by visiting the website linked in my resume."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill) => (
          <Card
            as="li"
            key={skill.name}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0">
                <Image
                  src={skill.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={skill.link.href}>{skill.name}</Card.Link>
              </h2>
              <Card.Description>{skill.description}</Card.Description>
            </div>
            <div>
              {' '}
              <Card.Cta>reference</Card.Cta>
            </div>

            {/* <p className="relative z-10 mt-2 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"> */}
            {/* <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{skill.link.label}</span> */}
            {/* </p> */}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

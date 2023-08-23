import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/cuenzaGradPic.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-scale-down dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Louisa Cuenza, driven to make an impact in the digital realm.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Graduating with a degree in Information Technology has not only
              equipped me with the essential skills of the industry but has also
              ignited a deep-seated passion for technology within me. This
              passion drives me to constantly seek out the latest advancements,
              trends, and innovations, ensuring that I am always at the
              forefront of the rapidly evolving tech landscape. I am not content
              with just understanding the surface; I yearn to dive deep, dissect
              complexities, and immerse myself in learning. This eagerness is
              not just confined to acquiring knowledge but extends to applying
              it innovatively to solve real-world problems and to contribute to
              the broader technological community.
            </p>
            <p>
              My initial steps into the IT field didn't start on such a
              passionate note. Initially, I embarked on my academic voyage with
              a limited understanding of programming and a cloud of uncertainty
              regarding my chosen path. The complexities of the subject were, at
              times, overwhelming, causing me to question my capability to
              succeed in this course.
            </p>
            <p>
              My college journey was marked by a recurring pattern: I was
              frequently appointed as the leader of various groups.
              Interestingly, this didn't just pertain to programming subjects,
              an area where I initially felt I lacked proficiency. Despite my
              self-doubt, my classmates consistently placed their trust in me, a
              sentiment I couldn't fully comprehend at the time. Upon
              reflection, I recognized that their belief was not solely rooted
              in technical skill but in my inherent qualities. They saw my
              relentless drive to learn, my ability to deliver quality results,
              my leadership style that not only made firm decisions but also
              valued the opinions of others. This realization has since
              bolstered my self-confidence and highlighted the unique strengths
              I bring to the table.
            </p>
            <p>
              Despite my initial hesitation in the IT field, I persisted in
              believing in myself, which eventually led me to develop a profound
              love for technology. My insatiable curiosity propelled me to seek
              answers, to understand the intricacies of how things operate. With
              each day, I endeavored to refine my skills, grounded in the belief
              that with genuine willingness, any concept can be mastered.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink> */}
            <SocialLink href="#" icon={FacebookIcon} className="mt-4">
              Follow on Facebook
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:cuenzalouisa@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              cuenzalouisa@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

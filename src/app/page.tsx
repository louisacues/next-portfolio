import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image_1.jpg'
import image2 from '@/images/photos/image_2.jpg'
import image3 from '@/images/photos/idea.jpeg'
import image4 from '@/images/photos/image_4.jpeg'
import image5 from '@/images/photos/image5.jpeg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// function Article({ article }: { article: ArticleWithSlug }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   )
// }

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
function ContactMe() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="mb-2 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact Me</span>
      </h2>
      <div className="ml-2">
        {' '}
        <a href="tel:09060110022">
          <button className="my-2 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <PhoneIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">09060110022</span>
          </button>
        </a>
      </div>

      {/* <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p> */}
      {/* <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div> */}
    </div>
  )
}

interface Role {
  company: string
  title: string
  // logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="ml-4 flex gap-4">
      {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div> */}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Omni Digital Solutions',
      title: 'Front End Developer',
      // logo: logoPlanetaria,
      start: '2022',
      end: '2023',
    },
    {
      company: 'OLi',
      title: 'Front End Developer',
      // logo: logoPlanetaria,
      start: '2024',
      end: '2024',
    },
    // {
    //   company: 'Oli',
    //   title: 'Front End Developer',
    //   // logo: logoAirbnb,
    //   start: '2023',
    //   end: {
    //     label: 'Present',
    //     dateTime: new Date().getFullYear().toString(),
    //   },
    // },
    // {
    //   company: 'Facebook',
    //   title: 'iOS Software Engineer',
    //   logo: logoFacebook,
    //   start: '2011',
    //   end: '2014',
    // },
    // {
    //   company: 'Starbucks',
    //   title: 'Shift Supervisor',
    //   logo: logoStarbucks,
    //   start: '2008',
    //   end: '2011',
    // },
  ]

  const cvLink =
    'https://doc-0k-1k-docs.googleusercontent.com/docs/securesc/helbs3gvoe1teo6afq56obhev6uceag6/rvke69df4ajboj3f31ap2u0bcka6ev6d/1692710850000/07717737423888219577/07717737423888219577/1SkzPGVOmv3PsIFc5X8gYKwztjzrcQ15e?e=download&ax=AH3YgiBjtIPFkx_hvmnMdKL1YUc1QqJqt_wxC4DZXeYbTFDpBCT05alKp1B5625DBvp9Hw1JGhO_KWO8nBHfqPR0cT8pgkCx89Hm810Y77BAzaIJU9Suuywe3OgrzhcEr-DOBBdcuM4Y64X4Bo15q23myVq6NY0uG9SwcrilfAwueZJcTYy1WBhDxacI1mmETbOBc6OE49Z3iYmv-Yek6tewGy_AdF02wfInFuDEuEYnm9TciLR8tCJiL3C56vW64ntTgrT3TbymgEqguQs_Sobml55er1YnvvKJBnjukF36Fr6WgP_AGe_cX1X24QtivfGaO4avL_JMrwxbExqDSrZ5Mri_5TYucd5pyUPng1TqbM_r5-aIIwS5SPBzrkInJh-yuRZV5HrxqemCo4BR8qxNXFy0rSjtXQio85uuDu4y1wx9AVkayB77C0n5847jU3DVaJHFte9NI4Hd6mfHnZhcVTotnZZfoF9UMUCDV3mWXnGDnw1qOIuEwDWIPdo0IoxKwtvsiK-cknOtuwVH2f3yYz4wE7r50TLr_Zaab2hgP8BROMbxcMvZZ0qBaJh-DqR2mUyz_ZgK3gxHjjZSUilPWOvSo2i_9ACOJIKlI-46GoxatVpZLeB820olYC8aC7uteQtt8nH1AQpNwR8Bn_GNbXVGco3NW9V_-UORUulzEHGA4guMuUeAYXimX_YrIvhyXlvOLx7bxYMBWujWTeyEoKRHBGs-ozQDRO_1sZAlz2wZ8ruk9R4ovVftdfMwaytnsLB2Ytm4lgKDIc8KVqhVu6UXeGJVpwecxqwroNpmpN685YsWB9XAj0SxHCgDt8hkLjhHymWlEkL0ObD9dWdZQrjBdj7rTiOAMQ2MCG14aq5z9mSGh9LYNllwFpOSegU&uuid=5a9af180-d495-4ebe-8b5c-8e57df24ba03&authuser=0&nonce=4pss55lom2k2e&user=07717737423888219577&hash=0n45t2mnfluq42s4idpl0ao6c9qq9tcp'
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        // href={cvLink}
        href="https://drive.google.com/file/d/1gxf8F1B5JwHXjR7uvJBFUADT7qREkBPV/view?usp=drive_link"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Frontend Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I am Louisa, a frontend developer with one year of hands-on experience. During this time, I have honed my skills by working on diverse projects, gaining proficiency in various frontend technologies. I am passionate about coding and always eager to take on new challenges in this dynamic field.
          </p>

          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
            <SocialLink
              href="https://github.com/louisacues"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://ph.linkedin.com/in/louisa-cuenza-855688281"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://m.facebook.com/louiseanne.cuenza/"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://instagram.com/ruizacues"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        {/* <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"> */}
        <div className="mx-auto max-w-xl">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          {/* <div className="space-y-10 lg:pl-16 xl:pl-24"> */}
          <div className="space-y-10">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

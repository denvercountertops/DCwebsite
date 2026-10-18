import { ArrowRight, Clock } from "lucide-react"
import { Link, useParams } from "react-router"
import { CtaBand, PageHero } from "@/components/site/hero"
import { posts, type BlogBlock, type BlogPost } from "@/data/blog"
import NotFoundPage from "./not-found"

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="reveal group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(22,24,25,0.35)]"
    >
      {post.cover && (
        <div className="aspect-[16/10] overflow-hidden bg-stone-100">
          <img
            src={post.cover.src}
            alt=""
            width={post.cover.w}
            height={post.cover.h}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-brand-red">
          {post.category}
          <span className="text-muted-foreground">{post.date}</span>
        </p>
        <h2 className="font-heading text-2xl leading-tight text-navy-900">{post.title}</h2>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 self-start border-b border-navy-800 pt-3 pb-0.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase transition-colors group-hover:border-brand-red group-hover:text-brand-red">
          Read article <ArrowRight className="size-3.5" />
        </span>
      </div>
    </Link>
  )
}

export function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Countertop & remodeling tips."
        intro="Straight answers from our team on buying, budgeting, removing and caring for countertops."
        image="/images/projects/project-7.webp"
        position="50% 60%"
      />
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-12 font-heading text-3xl leading-tight text-navy-900 md:text-4xl">{b.text}</h2>
    case "h3":
      return <h3 className="mt-8 font-heading text-2xl text-navy-900">{b.text}</h3>
    case "quote":
      return <blockquote className="mt-6 border-l-2 border-brand-red pl-5 text-lg italic text-navy-900">{b.text}</blockquote>
    case "ul":
    case "ol": {
      const List = b.type
      return (
        <List className={`mt-4 grid gap-2 pl-6 text-lg leading-relaxed text-ink/85 ${b.type === "ul" ? "list-disc" : "list-decimal"} marker:text-brand-red`}>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </List>
      )
    }
    case "img":
      return (
        <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" className="mt-8 h-auto w-full rounded-sm" />
      )
    default:
      return <p className="mt-5 text-lg leading-relaxed text-ink/85">{b.text}</p>
  }
}

export function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFoundPage />
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Blog" title={post.title} image={post.cover?.src ?? "/images/marble.jpg"} />
      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
            <span className="text-brand-red">{post.category}</span>
            <span>{post.date}</span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" /> {post.readTime}
              </span>
            )}
          </p>
          {post.blocks.map((b, i) => (
            <Block key={i} b={b} />
          ))}
          <div className="mt-14 border-t border-stone-200 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase hover:text-brand-red"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </article>
      {more.length > 0 && (
        <section className="bg-stone-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-heading text-3xl text-navy-900 md:text-4xl">Keep reading</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  )
}

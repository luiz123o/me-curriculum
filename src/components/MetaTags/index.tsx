import Head from 'next/head'

type MetaTagsProps = Partial<{
  title: string
  description: string
  canonical: string
  image: string
}>

export const MetaTags = (props: MetaTagsProps) => {
  const { title, description, canonical, image } = props

  const pageTitle = title ? `${title} | Luiz Otavio` : 'Luiz Otavio'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="Luiz Otavio" />
      <meta property="og:url" content={`${canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Luiz Otavio" />
      <meta name="twitter:creator" content="Luiz Otavio" />
      <meta
        property="og:image"
        content={
          image ||
          `https://www.propernoun.co/static/images/proper-noun-social.png`
        }
      />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}

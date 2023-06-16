export const useCustomMeta = () => {
  const defaultDesc
    = 'Kaurabranding merupakan agency penyedia layanan Jasa Brand Design dan Social Media Design untuk kalangan perusahaan maupun UMKM..'
  const defaultImage = 'https://kaura-branding.vercel.app/og.png'

  const setMeta = (title: string, desc = defaultDesc, image = defaultImage) => {
    useHead({
      titleTemplate: (title?: string) => `${title} - Kaura Branding`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: desc },
        { name: 'og:site_name', content: 'Kaura Branding' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://kaura-branding.vercel.app/' },
        { name: 'og:image', content: image },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@kaurabranding' },
        { name: 'twitter:creator', content: '@kaurabranding' },
        { name: 'twitter:title', content: 'Kaura Branding' },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: image },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    })
  }

  return {
    setMeta,
  }
}

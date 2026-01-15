import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your website (e.g., "Way Trades")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'A short description of your brand',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Your brand logo (recommended: 200x200px or larger)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      description: 'Alternative text for the logo (for accessibility)',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color (Gold)',
      type: 'string',
      description: 'Your primary brand color (hex code, e.g., #D4AF37)',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color (Dark)',
      type: 'string',
      description: 'Your secondary brand color (hex code, e.g., #1a1a1a)',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short tagline or mission statement',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
        defineField({
          name: 'tiktok',
          title: 'TikTok URL',
          type: 'url',
        }),
        defineField({
          name: 'discord',
          title: 'Discord URL',
          type: 'url',
        }),
      ],
    }),
  ],
})

export default {
  name: 'leadMagnet',
  title: 'Lead Magnet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline for the lead magnet page',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      description: 'Secondary headline',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'downloadUrl',
      title: 'Download URL',
      type: 'url',
      description: 'URL to the downloadable file or resource',
    },
    {
      name: 'emailSequence',
      title: 'Email Sequence',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subject',
              title: 'Email Subject',
              type: 'string',
            },
            {
              name: 'body',
              title: 'Email Body',
              type: 'text',
            },
            {
              name: 'delayDays',
              title: 'Send After (days)',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}

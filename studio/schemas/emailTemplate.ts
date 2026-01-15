export default {
  name: 'emailTemplate',
  title: 'Email Template',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Template Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subject',
      title: 'Email Subject',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Template Type',
      type: 'string',
      options: {
        list: [
          { title: 'Welcome', value: 'welcome' },
          { title: 'Lead Magnet', value: 'leadMagnet' },
          { title: 'Upsell', value: 'upsell' },
          { title: 'Confirmation', value: 'confirmation' },
          { title: 'Follow-up', value: 'followUp' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      description: 'HTML template for the email',
    },
    {
      name: 'variables',
      title: 'Template Variables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., {{firstName}}, {{productName}}, etc.',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      type: 'type',
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: selection.type,
      }
    },
  },
}

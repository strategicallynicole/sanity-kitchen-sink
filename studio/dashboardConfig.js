export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb4fcb8322d970a92c586c0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-61wbp9ie',
                  apiId: 'f7f3e0e1-50c3-48ab-b547-2d18c61d81ff'
                },
                {
                  buildHookId: '5eb4fcb8b8216dff57f0eab9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s57ge585',
                  apiId: 'de1c548d-6a1f-453e-8ba3-27df41bd8e45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strategicallynicole/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s57ge585.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

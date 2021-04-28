export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60899e7948ac561089f2db75',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-unpkx8ag',
                  apiId: '71325033-6e86-4a97-a443-5537f16eb9db'
                },
                {
                  buildHookId: '60899e79611f5b0feee89fe3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dv3yb4i3',
                  apiId: '4b85836b-4c54-4bc1-a0bf-9c5b8410a57b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mantonx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dv3yb4i3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

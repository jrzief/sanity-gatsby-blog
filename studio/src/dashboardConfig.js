export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9bc8df6446edde96988603',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rddkcrey',
                  apiId: '34da41a7-d67a-4d5a-aad4-4e8967a83944'
                },
                {
                  buildHookId: '5e9bc8df7824fac1707523ab',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qxaoerm7',
                  apiId: 'a0f74975-dc6b-4034-a583-6dd1710b9b61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jrzief/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qxaoerm7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

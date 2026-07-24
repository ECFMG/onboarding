import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'home',
    {
      type: 'category',
      label: 'Modern App Team Intro',
      items: [
        'introduction-to-intealth',
        'digital-transformations',
        'expectations',
        {
          type: 'category',
          label: 'Modern Apps',
          link: {
            type: 'doc',
            id: 'modern-apps',
          },
          items: [
            'pathways',
            'efdo',
            'midus',
            'epic-secure-reports',
            'cvhp',
          ],
        },
        'coop-alumni',
      ],
    },
    {
  type: 'category',
  label: 'Getting Started',
  items: [
    'create-accounts',
    {
      type: 'category',
      label: 'Tech Stack Learning',
      link: {
        type: 'doc',
        id: 'tech-stack-learning',
      },
      items: [
        'programming-languages',
        'infrastructure-components',
        'frontend-tech-stack',
        'backend-tech-stack',
      ],
    },
    'tech-concept-learning',
    'sample-apps',
  ],
},
    {
      type: 'category',
      label: "After You've Joined",
      items: ['macbook-pro-setup'],
    },
  ],
};

export default sidebars;
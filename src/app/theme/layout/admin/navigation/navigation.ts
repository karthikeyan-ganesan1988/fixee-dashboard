export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'home',
        title: 'Home',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id:'overall status',
    title:'OverAll Status',
    type:'group',
    icon: 'icon-group',
    children:[
      {
        id: 'sts',
        title: 'OverAll Status',
        type: 'collapse',
        icon: 'feather icon-trending-up',
        children:[
          {
            id: 'service-providers',
            title: 'Service Providers',
            type: 'item',
            url: '/component/providers'
          },
          {
            id: 'pro',
            title: 'Pro',
            type: 'item',
            url: '/component/pro'
          },
          {
            id: 'premium',
            title: 'Premium',
            type: 'item',
            url: '/component/premium'
          }
        ]
      }
    ]
  },
  {
    id: 'telemarketing',
    title: 'teleMarketing',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'telemkt',
        title: 'Telecalling',
        type: 'collapse',
        icon: 'feather icon-phone-call',
        children: [
          {
            id: 'calls',
            title: 'Calls',
            type: 'item',
            url: '/component/button'
          },
          {
            id: 'active',
            title: 'Active',
            type: 'item',
            url: '/component/badges'
          },
          {
            id: 'conversion',
            title: 'Conversion',
            type: 'item',
            url: '/component/breadcrumb-paging'
          },
          {
            id: 'enquiry',
            title: 'Enquiry',
            type: 'item',
            url: '/component/collapse'
          },
          {
            id: 'complaint',
            title: 'Complaint',
            type: 'item',
            url: '/component/tabs-pills'
          }
        ]
      }
    ]
  },
  {
    id: 'fieldmarketing',
    title: 'fieldmarketing',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'fieldmkt',
        title: 'Field',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'fieldleads',
            title: 'Field Leads',
            type: 'item',
            url: '/component/collapse'
          }
        ]
      }
    ]
  },
  {
    id: 'razorpay',
    title: 'razorpay',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'razor',
        title: 'RazorPay',
        type: 'collapse',
        icon: 'feather icon-briefcase',
        children: [
          {
            id: 'failedpayment',
            title: 'Failed Payment',
            type: 'item',
            url: '/component/breadcrumb-paging'
          }
        ]
      }
    ]
  },
  {
    id: 'subscription',
    title: 'subscription',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'subscrptn',
        title: 'Subscription',
        type: 'collapse',
        icon: 'feather icon-bell',
        children: [
          {
            id: 'active',
            title: 'Active',
            type: 'item',
            url: '/component/button'
          },
          {
            id: 'basic',
            title: 'Basic',
            type: 'item',
            url: '/component/badges'
          },
          {
            id: 'halted',
            title: 'Halted',
            type: 'item',
            url: '/component/breadcrumb-paging'
          },
          {
            id: 'canceled',
            title: 'Canceled',
            type: 'item',
            url: '/component/collapse'
          }
        ]
      }
    ]
  },

  {
    id: 'report',
    title: 'report',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'rpt',
        title: 'Report',
        type: 'collapse',
        icon: 'feather icon-activity',
        children: [
          {
            id: 'summary',
            title: 'Summary',
            type: 'item',
            url: '/component/button'
          },
          {
            id: 'performance',
            title: 'Performance',
            type: 'item',
            url: '/component/button'
          }
        ]
      }
    ]
  },
  
 

  // {
  //   id: 'Authentication',
  //   title: 'Authentication',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'signup',
  //       title: 'Sign up',
  //       type: 'item',
  //       url: '/auth/signup',
  //       icon: 'feather icon-at-sign',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'signin',
  //       title: 'Sign in',
  //       type: 'item',
  //       url: '/auth/signin',
  //       icon: 'feather icon-log-in',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'chart',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'apexchart',
  //       title: 'ApexChart',
  //       type: 'item',
  //       url: '/chart',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  // {
  //   id: 'forms & tables',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms',
  //       title: 'Basic Forms',
  //       type: 'item',
  //       url: '/forms',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'tables',
  //       type: 'item',
  //       url: '/tables',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'menu-level',
  //       title: 'Menu Levels',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'menu-level-2.1',
  //           title: 'Menu Level 2.1',
  //           type: 'item',
  //           url: 'javascript:',
  //           external: true
  //         },
  //         {
  //           id: 'menu-level-2.2',
  //           title: 'Menu Level 2.2',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'menu-level-2.2.1',
  //               title: 'Menu Level 2.2.1',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             },
  //             {
  //               id: 'menu-level-2.2.2',
  //               title: 'Menu Level 2.2.2',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];

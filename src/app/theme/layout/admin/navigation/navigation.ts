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
        url: '/analytics',
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
            url: '#'
          },
          {
            id: 'active',
            title: 'Active',
            type: 'item',
            url: '#'
          },
          {
            id: 'conversion',
            title: 'Conversion',
            type: 'item',
            url: '#'
          },
          {
            id: 'enquiry',
            title: 'Enquiry',
            type: 'item',
            url: '#'
          },
          {
            id: 'complaint',
            title: 'Complaint',
            type: 'item',
            url: '#'
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
            url: '#'
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
            url: '#'
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
            url: '#'
          },
          {
            id: 'basic',
            title: 'Basic',
            type: 'item',
            url: '#'
          },
          {
            id: 'halted',
            title: 'Halted',
            type: 'item',
            url: '#'
          },
          {
            id: 'canceled',
            title: 'Canceled',
            type: 'item',
            url: '#'
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
            url: '#'
          },
          {
            id: 'performance',
            title: 'Performance',
            type: 'item',
            url: '#'
          }
        ]
      }
    ]
  }
];

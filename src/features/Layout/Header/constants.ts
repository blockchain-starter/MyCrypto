import { translateRaw } from '@translations';
import { APP_ROUTES_OBJECT } from '@routing';

import settingsIcon from '@assets/images/icn-settings.svg';
import dashboardIcon from '@assets/images/icn-dashboard.svg';

export const links = [
  {
    title: 'Dashboard',
    to: APP_ROUTES_OBJECT.DASHBOARD.path,
    enabled: APP_ROUTES_OBJECT.DASHBOARD.enabled,
    icon: { src: dashboardIcon, width: '16px', height: '12px' }
  },
  {
    title: 'Manage Assets',
    enabled: true,
    subItems: [
      {
        to: APP_ROUTES_OBJECT.SEND.path,
        enabled: APP_ROUTES_OBJECT.SEND.enabled,
        title: translateRaw('SEND')
      },
      {
        to: APP_ROUTES_OBJECT.REQUEST_ASSETS.path,
        enabled: APP_ROUTES_OBJECT.REQUEST_ASSETS.enabled,
        title: translateRaw('REQUEST')
      },
      {
        to: APP_ROUTES_OBJECT.SWAP.path,
        enabled: APP_ROUTES_OBJECT.SWAP.enabled,
        title: translateRaw('SWAP')
      },
      {
        to: APP_ROUTES_OBJECT.ADD_ACCOUNT.path,
        enabled: APP_ROUTES_OBJECT.ADD_ACCOUNT.enabled,
        title: translateRaw('ADD_ACCOUNT')
      }
    ]
  },
  {
    title: 'Tools',
    enabled: true,
    subItems: [
      {
        to: APP_ROUTES_OBJECT.SIGN_MESSAGE.path,
        enabled: APP_ROUTES_OBJECT.SIGN_MESSAGE.enabled,
        title: 'Sign Message'
      },
      {
        to: APP_ROUTES_OBJECT.VERIFY_MESSAGE.path,
        enabled: APP_ROUTES_OBJECT.VERIFY_MESSAGE.enabled,
        title: 'Verify Message'
      },
      {
        to: APP_ROUTES_OBJECT.BROADCAST_TX.path,
        enabled: APP_ROUTES_OBJECT.BROADCAST_TX.enabled,
        title: 'Broadcast Transaction'
      },
      {
        to: APP_ROUTES_OBJECT.INTERACT_WITH_CONTRACTS.path,
        enabled: APP_ROUTES_OBJECT.INTERACT_WITH_CONTRACTS.enabled,
        title: 'Interact with Contracts'
      },
      {
        to: APP_ROUTES_OBJECT.DEPLOY_CONTRACTS.path,
        enabled: APP_ROUTES_OBJECT.DEPLOY_CONTRACTS.enabled,
        title: 'Deploy Contracts'
      },
      {
        to: '/helpers',
        title: 'Helpers'
      },
      {
        to: APP_ROUTES_OBJECT.DEFIZAP.path,
        title: 'DeFi Zap'
      },
      {
        to: APP_ROUTES_OBJECT.ENS.path,
        enabled: APP_ROUTES_OBJECT.ENS.enabled,
        title: 'ENS'
      }
    ]
  },
  {
    title: 'Settings',
    to: APP_ROUTES_OBJECT.SETTINGS.path,
    enabled: APP_ROUTES_OBJECT.SETTINGS.enabled,
    icon: { src: settingsIcon, width: '16px' }
  }
];

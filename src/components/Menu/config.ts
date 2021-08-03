import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://m.owld.app'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://m.owld.app/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://m.owld.app/pools'
  },
  {
    label: 'Price Graph',
    icon: 'GraphIcon',
    href: '#',
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.saltswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/owldefi",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "#",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "#",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config

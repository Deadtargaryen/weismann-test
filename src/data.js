import BitconImg from './assets/img/bitcon.png'
import EthereumImg from './assets/img/ethereum.png';
import LitecoinImg from './assets/img/litecoin.png';

export const navData = [
    
    {
        name: 'Features',
        href: '#/',
    },
    {
        name: 'Register',
        href: 'https://portal.weismanntradingrowth.com/auth/register',
    },
    {
        name: 'Login',
        href: 'https://portal.weismanntradingrowth.com/auth/login',
    },
];

export const currency = [
    {
        image: BitconImg,
        name: 'Bitcoin',
        abbr: 'BTC',
        description:
            'Digital currency in which a record of transactions is maintained.',
    },
    {
        image: EthereumImg,
        name: 'Ethereum',
        abbr: 'ETH',
        description:
            'Blockchain technology to create and run decentralized digital applications.',
    },
    {
        image: LitecoinImg,
        name: 'Litecoin',
        abbr: 'LTC',
        description:
            'Cryptocurrency that enables instant payments to anyone in the world.',
    },
];
import { IItem } from "./interfaces";

const host = 'http://localhost:4001';
export const links: Array<IItem> = [
    {
        'type': 'url',
        'name': 'home',
        'link': `${host}/home`
    },
    {
        'type': 'url',
        'name': 'fazendas',
        'link': `${host}/fazendas`
    },
    {
        'type': 'list',
        'name': 'recursos',
        'items': [
            {
                'type': 'url',
                'link': `${host}/createFarm`,
                'name': 'criar fazenda',
            },
            {
                'type': 'url',
                'link': `${host}/getSecurity`,
                'name': 'obter proteção agri-ocular',
            },
            {
                'type': 'url',
                'link': `${host}/api`,
                'name': 'API',
            },
        ]
    },
    {
        'type': 'list',
        'name': 'ajuda',
        'items': [
            {
                'type': 'url',
                'link': `${host}/aboutUs`,
                'name': 'sobre nós',
            },
            {
                'type': 'url',
                'link': `${host}/help`,
                'name': 'entrar em contacto',
            },
        ]
    },
    {
        'type': 'img/button',
        'link': '',
        'name': 'carrinho',
        'eventClick': () => console.log('Clicando no carrinho')
    },
    {
        'type': 'list',
        'name': 'idiomas',
        'items': [
            {
                'type': 'url',
                'link': `${host}/us/home`,
                'name': 'Inglês',
            },
            {
                'type': 'url',
                'link': `${host}/pt/home`,
                'name': 'Português',
            },
        ]
    },
    {
        'type': 'img/button',
        'link': '',
        'name': 'criar conta',
        'eventClick': () => console.log('Clicando no button do login')
    },
    {
        'type': 'img/button/sub',
        'link': '',
        'name': 'criar conta',
        'items': [
            {
                'type': 'url',
                'link': `${host}/us/home`,
                'name': 'associar',
            }
        ],
        'eventClick': () => console.log('Clicando no button do login')
    },
];
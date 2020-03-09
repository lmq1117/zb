/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')

const DetailPageTitle = [
    'aaa','bbb','ccc'
]

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        home: [
            '/home',
        ],
        detail:[
            '/detail'
        ],
        about:[
            '/about'
        ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar:{
            color: '#000000',
            selectedColor: '#DE554F',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'home',
                text: '首页',
                iconPath: path.resolve(__dirname, '../src/img/home.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/home.png'),
            }, {
                pageName: 'detail',
                text: '详情',
                iconPath: path.resolve(__dirname, '../src/img/us.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/us.png'),
            },{
                pageName: 'about',
                text: '关于我们',
                iconPath: path.resolve(__dirname, '../src/img/us.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/us.png'),
            }],
        }
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: '中广核直保',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {
        detail:{
            extra:{
                // navigationBarTitleText: 'xx详情页',
            }
        }
    },
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue',
        appid: 'wx5880faf136387db7',
    },
}

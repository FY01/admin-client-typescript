/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-12 11:30:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-12 11:30:21
 */
const CracoLessPlugin = require('craco-less')
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    webpack: {
        alias: {
            '@@': pathResolve('.'),
            '@': pathResolve('src'),
            '@assets': pathResolve('src/assets'),
            '@common': pathResolve('src/common'),
            '@components': pathResolve('src/components'),
            '@hooks': pathResolve('src/hooks'),
            '@pages': pathResolve('src/pages'),
            '@store': pathResolve('src/store'),
            '@utils': pathResolve('src/utils')
        }
    },
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}

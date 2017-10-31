const webpack = require('webpack');
const webpackConfig = require('./webpack.compile');
const rm = require('rimraf');
const cp = require('shelljs').cp;
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const semver = require('semver');
const src = path.resolve(process.cwd(), 'static');
const packageJson = src + '/package.json';
const name = require(packageJson).name;

const target = path.resolve(process.cwd(), name);

// // 支持单个文件引入的方式
// const vueFiles = path.resolve(process.cwd(), 'src/wc-swiper/*.vue');
// const vueLib = path.resolve(process.cwd(), 'src/wc-swiper/lib');



rm(path.resolve(process.cwd(), name), err => {
    if (err) {
        console.log(err)
    } else {
        webpack(webpackConfig, function (err, stats) {
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');
            // 修改版本号
            modifyVersion();

            cp('-R', src + '/*', target);

            // cp('-R', vueFiles, target);
            // cp('-R', vueLib, target);

            console.log();
            console.log(chalk.green.bold('> Compile Successed'));
            console.log();
        })
    }
});


function modifyVersion() {
    fs.readFile(packageJson, function (err, data) {

        // 获取版本号
        let obj = JSON.parse(data.toString());
        let version = obj.version;

        let major = semver.major(version);
        let minor = semver.minor(version);
        let patch = semver.patch(version);

        // 如果 patch = 10
        if (patch == 10) {
            // 再判断一下 minior 的值 是不是 10
            if (minor == 10) {
                major = major + 1;
                minor = 0;
                patch = 0;
            } else {
                minor = minor + 1;
                patch = 0;
            }
        } else {
            patch = patch + 1;
        }
        // 重新修改 版本号
        obj.version = major + '.' + minor + '.' + patch;
        fs.writeFile(packageJson, JSON.stringify(obj, null, 4))
    })
}
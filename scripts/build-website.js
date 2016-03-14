#! /usr/bin/env node

'use strict';

// Ensure that data directory exist.
require('mkdirp').sync('./_site/data');


const buildDemosList = require('./build-demos-list');
buildDemosList('./src/component', './_site/data/demos-list.js');


const buildCommon = require('./build-common');
buildCommon('./src/language', './_site/data/language.js');
buildCommon('./src/component', './_site/data/component.js');
buildCommon('./src/cases', './_site/data/cases.js');

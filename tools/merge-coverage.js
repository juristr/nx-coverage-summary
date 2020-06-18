/**
  Place this script under Nx `tools/merge-coverage.js`
  then invoke it with node ./tools/merge-coverage.js
  
  You should get a `coverage-merged` folder with the merged coverage report.
  
  Note: whenever you run the test, make sure to clean coverage-merged folder before
*/

const { readJsonSync } = require('fs-extra');
const { join } = require('path');
const { sync } = require('glob');
const { createCoverageMap } = require('istanbul-lib-coverage');
const compose = require('lodash/fp/compose');
const { create: createReport } = require('istanbul-reports');
const { createContext } = require('istanbul-lib-report');

if (require.main === module) {
  main();
}

function main() {
  const reportFiles = getReportFiles();
  const reporters = ['json', 'html', 'lcov'];

  const map = createCoverageMap({});

  reportFiles.forEach(
    compose(
      map.merge.bind(map),
      unnestHtmlCoverageData,
      readJsonSync,
      (f) => f // discard of index option of forEach since readJsonSync does not like it
    )
  );

  const context = createContext({
    coverageMap: map,
    dir: join(__dirname, '../coverage-merged'),
  });

  //   const tree = summarizers.pkg(map);
  const tree = context.getTree();

  reporters.forEach((reporter) => {
    tree.visit(
      createReport(reporter, {
        skipEmpty: true,
        skipFull: true,
      }),
      context
    );
  });
}

function getReportFiles() {
  const files = sync(join(__dirname, '../coverage/**/coverage*.json'));
  if (files.length > 0) {
    return files;
  } else {
    throw new Error('No coverage files found!');
  }
}

function unnestHtmlCoverageData(json) {
  return Object.keys(json).reduce((acc, k) => {
    const v = json[k];
    if (typeof v.data !== 'undefined') {
      acc[k] = v.data;
    } else {
      acc[k] = v;
    }
    return acc;
  }, {});
}

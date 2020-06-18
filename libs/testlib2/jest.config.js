module.exports = {
  name: 'testlib2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/testlib2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

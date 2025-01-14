#!/usr/bin/env node
import * as yargs from 'yargs';

import { GeneratorChoices, Settings } from '../settings';
import { Apexdocs } from '../application/Apexdocs';

const argv = yargs.options({
  sourceDir: {
    type: 'string',
    alias: 's',
    demandOption: true,
    describe: 'The directory location which contains your apex .cls classes.',
  },
  targetDir: {
    type: 'string',
    alias: 't',
    default: './docs/',
    describe: 'The directory location where documentation will be generated to.',
  },
  recursive: {
    type: 'boolean',
    alias: 'r',
    default: true,
    describe: 'Whether .cls classes will be searched for recursively in the directory provided.',
  },
  scope: {
    type: 'array',
    alias: 'p',
    default: ['global'],
    describe:
      'A list of scopes to document. Values should be separated by a space, e.g --scope global public namespaceaccessible. ' +
      'Annotations are supported and should be passed lowercased and without the @ symbol, e.g. namespaceaccessible auraenabled',
  },
  targetGenerator: {
    type: 'string',
    alias: 'g',
    default: 'jekyll',
    choices: ['jekyll', 'docsify'],
    describe:
      'Define the static file generator for which the documents will be created. Currently supports jekyll, and docsify.',
  },
  indexOnly: {
    type: 'boolean',
    default: false,
    describe: 'Defines whether only the index file should be  generated.',
  },
}).argv;

Settings.build({
  sourceDirectory: argv.sourceDir,
  recursive: argv.recursive,
  scope: argv.scope,
  outputDir: argv.targetDir,
  targetGenerator: argv.targetGenerator as GeneratorChoices,
  indexOnly: argv.indexOnly,
});

Apexdocs.generate();

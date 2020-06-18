#!/usr/bin/env -S node -r "ts-node/register"

import { jwtgenerator } from './lib/jwtgenerator';
import * as fs from 'fs';

(() => {
  const encoding = 'utf8';
  const path = process.argv[2];
  if (!path) {
    console.error('Set file path');
    return;
  }
  const json = JSON.parse(fs.readFileSync(path, encoding));
  const jwt = jwtgenerator(json.payload, json.secret, json.iss);
  console.log(jwt);
})();

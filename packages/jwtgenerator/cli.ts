#!/usr/bin/env node

import { jwtgenerator } from './lib/jwtgenerator';
import * as config from './config.json';

const { payload, iss, secret } = config;
// @ts-ignore
const jwt = jwtgenerator(payload, secret, iss);
console.log(jwt);



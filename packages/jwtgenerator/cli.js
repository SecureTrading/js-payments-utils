#!/usr/bin/env node
import { jwtgenerator } from './lib/jwtgenerator';

const [, , ...args] = process.argv;

console.log(args);

// jwtgenerator(args);

// tslint:disable:no-expression-statement
import test from 'ava';
import { ohShit } from './ohShit';

test('numbers', t => {
  t.is(ohShit(2), 2);
});

test('strings', t => {
  t.is(ohShit('strings'), 'strings');
});

test('objects', t => {
  const obj = {};
  t.is(ohShit(obj), obj);
  t.not(ohShit(obj), {});
});

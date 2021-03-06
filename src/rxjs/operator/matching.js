import { buildPatternMatcher } from 'orbit/lib/pattern-matcher';

export function matching(pattern) {
  const isMatch = buildPatternMatcher(pattern);
  return this.filter(value => isMatch(value));
}

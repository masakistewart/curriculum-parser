import { TYPES, NAMES } from './constants'
import { HEADLINE_REGEX, skipBlankLines } from '../utils'
import createNode from './create-node'

export function parse (lines, lineNum) {
  const headlineLineNum = skipBlankLines(lines, 0)
  if (!HEADLINE_REGEX.test(lines[headlineLineNum])) {
    throw new SyntaxError(
      `Invalid headline on line ${headlineLineNum}: ${lines[headlineLineNum]}`
    )
  }

  const [, headline] = lines[headlineLineNum].match(HEADLINE_REGEX)

  return createNode({
    lines,
    name: NAMES.HEADLINE,
    type: TYPES.HEADLINE,
    startLineNum: lineNum,
    endLineNum: lineNum,
    value: headline
  })
}

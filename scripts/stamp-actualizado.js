#!/usr/bin/env node
// Pre-commit hook: stamps `actualizado` with the real current timestamp on any
// staged src/data/puntos/*.ts file, so "Actualizado hace…" reflects an actual
// commit time instead of a hand-typed bare date (which parses as UTC midnight
// and reads as several hours stale in any UTC-negative timezone).
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const staged = execSync('git diff --cached --name-only --diff-filter=ACM')
  .toString()
  .trim()
  .split('\n')
  .filter((f) => /^src\/data\/puntos\/.+\.ts$/.test(f))

if (staged.length === 0) process.exit(0)

const now = new Date().toISOString()

for (const file of staged) {
  const content = readFileSync(file, 'utf8')
  const updated = content.replace(/actualizado: '[^']*'/g, `actualizado: '${now}'`)
  if (updated !== content) {
    writeFileSync(file, updated)
    execSync(`git add "${file}"`)
  }
}

console.log(`actualizado -> ${now} (${staged.join(', ')})`)

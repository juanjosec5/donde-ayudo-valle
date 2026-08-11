import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

const VIRTUAL_ID = 'virtual:git-last-modified'
const RESOLVED_VIRTUAL_ID = '\0' + VIRTUAL_ID

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const puntosDir = fileURLToPath(new URL('./src/data/puntos', import.meta.url))

function commitTimestamp(relativePath: string): string | null {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relativePath}"`, {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
    return out || null
  } catch {
    return null
  }
}

function gitLastModifiedPlugin(): Plugin {
  return {
    name: 'git-last-modified',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL_ID
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_ID) return
      const map: Record<string, string | null> = {}
      for (const file of readdirSync(puntosDir)) {
        if (!file.endsWith('.ts')) continue
        const slug = file.replace(/\.ts$/, '')
        map[slug] = commitTimestamp(`src/data/puntos/${file}`)
      }
      return `export const gitLastModified = ${JSON.stringify(map)}`
    },
  }
}

export default defineConfig({
  plugins: [vue(), gitLastModifiedPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

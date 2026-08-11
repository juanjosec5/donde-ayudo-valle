/// <reference types="vite/client" />

declare module 'virtual:git-last-modified' {
  export const gitLastModified: Record<string, string | null>
}

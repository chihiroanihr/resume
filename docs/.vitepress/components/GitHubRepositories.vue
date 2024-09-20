<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Repository</th>
          <th>languages</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repository in repositories" :key="repository.id">
          <td>
            <a :href="repository.url" target="_blank" rel="noopener noreferrer">
              {{ repository.title }}
            </a>
          </td>
          <td>
            <div class="flex gap-2 flex-wrap">
              <img v-for="language in repository.languages" :key="language.name" :src="deviconSrc(language.name)"
                :alt="language.name" class="w-4" />
            </div>
          </td>
          <td>⭐ {{ repository.stargazers_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { data } from '../data/lapras.data.ts'
const repositories = data.githubRepositories

// If the icon image did not load:
// REFER TO: https://devicon.dev/
// Then search for your icon name, click on the icon, and on the left bar under the section "SVG versions" copy its link.
const deviconSrc = (name: string) => {
  let langName = name.toLowerCase()
  let iconType = 'original';
  switch (langName) {
    case 'html':
      langName = 'html5'
      break
    case 'css':
      langName = 'css3'
      break
    case 'shell':
      langName = 'bash'
      break
    case 'tsx':
      langName = 'typescript'
      break
    case 'vue':
      langName = 'vuejs'
      break
    case 'scss':
      langName = 'sass'
      break
    case 'less':
      langName = 'less'
      iconType = 'plain-wordmark'
      break
    case 'dockerfile':
      langName = 'docker'
      break
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${langName}/${langName}-${iconType}.svg`
}

</script>

<style lang="scss" scoped></style>

---
layout: page
title: Contributors
titleTemplate: Gravinium Contributors
description: People contributing to Gravinium through development, documentation, creative work, tools, and community support.
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamPageSection,
    VPTeamMembers
} from 'vitepress/theme'

/*
Link SVG (https://icon-sets.iconify.design/material-symbols/link-2/):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.95 21q-2.05 0-3.5-1.45T3 16.05q0-1 .375-1.9t1.075-1.6L7.8 9.225l1.4 1.4l-3.35 3.35q-.425.425-.637.963T5 16.05q0 1.225.863 2.088T7.95 19q.575 0 1.125-.213t.975-.637l3.325-3.35l1.425 1.425l-3.35 3.325q-.7.7-1.6 1.075T7.95 21m1.975-5.5L8.5 14.075L14.075 8.5L15.5 9.925zm6.275-.7l-1.4-1.425l3.35-3.325q.425-.425.625-.95t.2-1.1q0-1.25-.85-2.125T16.025 5q-.575 0-1.112.213t-.963.637L10.625 9.2L9.2 7.8l3.35-3.35q.7-.7 1.6-1.075T16.05 3q2.05 0 3.487 1.45t1.438 3.525q0 .975-.363 1.875t-1.062 1.6z"/></svg>
*/

import { core } from './contributors/core'
import { projects } from './contributors/projects'
import { docs } from './contributors/docs'
import { leaders } from './contributors/leaders'
import { community } from './contributors/community'

</script>

<VPTeamPage>

<VPTeamPageTitle>
    <template #title>
        Gravinium Contributors
    </template>

<template #lead>
This page recognizes the people contributing to Gravinium through development,
documentation, creative work, tools, and community support.
</template>

</VPTeamPageTitle>

<VPTeamPageSection>
    <template #title>Core Team</template>
    <template #lead>The core member who lead and maintain Gravinium.</template>
    <template #members>
        <VPTeamMembers size="medium" :members="core" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Community Leadership & Support</template>
    <template #lead>Lead communities, organize events, and support moderation and operations.</template>
    <template #members>
        <VPTeamMembers size="small" :members="leaders" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Project Contributors</template>
    <template #lead>Development, assets, design, worlds, tools, and production contributions.</template>
    <template #members>
        <VPTeamMembers size="small" :members="projects" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Documentation Contributors</template>
    <template #lead>Writing, editing, tutorials, fixes, and documentation structure.</template>
    <template #members>
        <VPTeamMembers size="small" :members="docs" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Community Contributors</template>
    <template #lead>Testing, feedback, suggestions, and general support.</template>
    <template #members>
        <VPTeamMembers size="small" :members="community" />
    </template>
</VPTeamPageSection>

</VPTeamPage>

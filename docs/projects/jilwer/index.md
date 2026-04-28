---
layout: doc
title: Jilwer
description: Documentation for Jilwer, a toolkit that extends UdonSharp with runtime systems, custom types, and utilities for VRChat development.
---

# Jilwer <Badge type="info" text="0.1.0" />

_Pronounced: Jill-wear (/ˈdʒɪl.wɛr/)_

::: danger
Jilwer is currently in active development (0.y.z) and may introduce breaking changes.

The API will be considered stable at version 1.0.0, along with complete documentation.
:::

Jilwer is a toolkit that extends UdonSharp with additional runtime capabilities,
reusable systems, and utility functions for VRChat world and tooling development.

It can be used directly in VRChat worlds or as a dependency for larger systems built on top of UdonSharp.

## Quick Navigation

- [Getting Started](./getting-started.md)
- [API](./api/)
- [Examples](./examples/)

## Why Jilwer exists

Jilwer was created to simplify [my](https://nighthawk.gravinium.org) VRChat world and system
development workflow using UdonSharp. It focuses on reducing repetition, filling common
missing functionality, and providing reusable utilities that can be shared across projects.

## What's included

- Runtime systems that enable features not normally available in standard UdonSharp
- The Type Registry for custom constructed types and advanced data structures
- Build-time tooling that injects the required runtime components into your world
- Utility functions for math, vectors, voxels, indexing, and other common areas
- Reusable systems intended for both worlds and dependent projects
- VRChat-specific helpers for runtime interactions

## Who is this for

- VRChat world developers using UdonSharp
- Developers building reusable or modular world systems
- Projects that need functionality beyond standard UdonSharp limitations
- Users who want a smoother workflow when working with Unity and UdonSharp

Jilwer is best suited for users already familiar with Unity and UdonSharp.

## External Links

- [GitHub Repository](https://github.com/Gravinium-VR/Jilwer)
- [Changelog](https://github.com/Gravinium-VR/Jilwer/blob/main/CHANGELOG.md)

---
layout: doc
title: JilwerRuntime (Jilwer)
description: Global runtime used to access all active Jilwer systems.
---

# JilwerRuntime

`Gravinium.Jilwer.Core.JilwerRuntime`

> Global runtime used to access all active Jilwer systems.

## Example

```csharp
[HideInInspector] public JilwerRuntime jilwer;
```

## Declaration

```csharp
[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class JilwerRuntime : UdonSharpBehaviour
```

## Usage

The Jilwer runtime is meant to be accessed by Jilwer internally. When using
a part of Jilwer that requires the runtime, the methods first argument should be
the runtime. Jilwer makes retrieving the runtime incredibly easy, as it injects
the global object during build time.

::: info
In order for Jilwer to inject the runtime object correctly, the property holding
it should be public.
:::

The runtime is mostly used internally and shouldn't be used unless you need
to pass it to another object.

```csharp
using UdonSharp;
using UnityEngine;
using Gravinium.Jilwer.Core;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class RuntimeTester : UdonSharpBehaviour
{
    [HideInEditor] public JilwerRuntime runtime; //[!code highlight]

    private void OnEnable()
    {
        Debug.Log(runtime != null);
    }
}
```

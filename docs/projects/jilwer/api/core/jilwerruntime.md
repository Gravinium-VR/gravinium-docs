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

This example shows its usage with the [ArrayList](../collections/arraylist) type.

```csharp
using UdonSharp;
using UnityEngine;
using Gravinium.Jilwer.Core;
using Gravinium.Jilwer.Core.Collections;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class ArrayListTester : UdonSharpBehaviour
{
    // The Jilwer build system will inject the global object into this property
    // during the world build phase.
    [HideInInspector] public JilwerRuntime jilwer; // [!code highlight]

    private ArrayList _list;
    private int _counter = 1;

    private void Start()
    {
        // Pass the runtime to the method.
        var err = ArrayList.New(jilwer, out _list); // [!code highlight]
        if (err != Error.None)
        {
            Debug.LogError($"Failed to create ArrayList! Error: 0x{err:X2}");
            Destroy(this);
        }
    }

    public override void Interact()
    {
        _list.Add(_counter);
        _counter++;

        string msg = "[";
        for (int i = 0; i < _list.Length(); i++)
        {
            if (_list.Get(i, out object num) != Error.None) return;
            msg += num + (i < _list.Length() - 1 ? ", " : "]");
        }
        Debug.Log("[ArrayListTester] " + msg);
    }
}
```

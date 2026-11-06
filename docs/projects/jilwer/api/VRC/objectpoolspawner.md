---
layout: doc
title: ObjectPoolSpawner (Jilwer)
description: Creates copies of a reference object that get added to a VRCObjectPool.
---

# ObjectPoolSpawner

`Gravinium.Jilwer.VRC.ObjectPoolSpawner`

> Creates copies of a reference object that get added to a VRCObjectPool.

Editor-only component. Deleted during build. See [PreProcess](../../systems/preprocess).

During build, the Jilwer PreProcess systems will duplicate an object a
specified number of times and added to a `VRCObjectPool`.

## Declaration

```csharp
public class ObjectPoolSpawner : MonoBehaviour
```

## Properties

### objectPool

```csharp
public VRCObjectPool objectPool;
```

The target `VRCObjectPool` to add the duplicates to.

### referenceObject

```csharp
public GameObject referenceObject;
```

The object that will be duplicated.

### copies

```csharp
public int copies = 1;
```

Number of duplicates to make.

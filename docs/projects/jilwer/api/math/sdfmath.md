---
layout: doc
title: SDFMath (Jilwer)
description: Sign Distance Field methods.
---

# SDFMath

`Gravinium.Jilwer.Math.SDFMath`

> Sign Distance Field methods.

## Example

```csharp
Vector3 pos = new Vector3(2, 1, 1);
Vector3 spherePos = new Vector3(0, 0, 0);
float radius = 1f;
float distance = SDFMath.SDSphere(pos, spherePos, radius);
```

## Declaration

```csharp
public static class SDFMath
```

## Methods

### SDSphere

```csharp
public static float SDSphere(Vector3 position, Vector3 center, float radius)
```

| Parameter | Description           |
| --------- | --------------------- |
| position  | Position to evaluate. |
| center    | Center of the sphere. |
| radius    | Radius of the sphere. |

Returns the distance from the edge of a sphere. Positive if outside, Zero if on
the surface, negative if inside.

### SDBox

```csharp
public static float SDBox(Vector3 position, Vector3 center, Vector3 size)
```

| Parameter | Description                     |
| --------- | ------------------------------- |
| position  | Position to evaluate.           |
| center    | Center of the box.              |
| size      | Size of the box in world space. |

Returns the distance from the edge of a box. Positive if outside, Zero if on
the surface, negative if inside.

---
layout: doc
title: VectorMath (Jilwer)
description: Math utility methods for vectors.
---

# VectorMath

`Gravinium.Jilwer.Math.VectorMath`

> Math utility methods for vectors.

## Example

```csharp
Vector2 a = new Vector2(-1, 4);
Vector2 b = new Vector2(2, 3);
Vector2 abs = VectorMath.Abs(a); // (1, 4)
Vector2 max = VectorMath.Max(a, b); // (2, 4)
Vector2 min = VectorMath.Min(a, b); // (-1, 3)
```

## Declaration

```csharp
public static class VectorMath
```

## Methods

### Abs

```csharp
public static Vector2 Abs(Vector2 vec)
```

```csharp
public static Vector3 Abs(Vector3 vec)
```

```csharp
public static Vector4 Abs(Vector4 vec)
```

| Parameter | Description          |
| --------- | -------------------- |
| vec       | The original vector. |

Returns a vector whose components have been turned into absolute values.

### Max

```csharp
public static Vector2 Max(Vector2 a, Vector2 b)
```

```csharp
public static Vector3 Max(Vector3 a, Vector3 b)
```

```csharp
public static Vector4 Max(Vector4 a, Vector4 b)
```

| Parameter | Description                   |
| --------- | ----------------------------- |
| a         | The first vector to compare.  |
| b         | The second vector to compare. |

Returns a vector whose components are the max of `a` and `b`.

### Min

```csharp
public static Vector2 Min(Vector2 a, Vector2 b)
```

```csharp
public static Vector3 Min(Vector3 a, Vector3 b)
```

```csharp
public static Vector4 Min(Vector4 a, Vector4 b)
```

| Parameter | Description                   |
| --------- | ----------------------------- |
| a         | The first vector to compare.  |
| b         | The second vector to compare. |

Returns a vector whose components are the min of `a` and `b`.

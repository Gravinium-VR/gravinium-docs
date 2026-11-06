---
layout: doc
title: ArrayMath (Jilwer)
description: Math utility methods for arrays.
---

# ArrayMath

`Gravinium.Jilwer.Math.ArrayMath`

> Math utility methods for arrays.

## Example

```csharp
int[,] array2d = new int[3, 2]; // Row/Y = 3, Column/X = 2
int[] array1d = new int[3 * 2];
int index = ArrayMath.Index2DTo1D(1, 2, 2) // index (x, y)
array1d[index] = 42;
array2d[2, 1] = 42;
```

## Declaration

```csharp
public static class ArrayMath
```

## Methods

### Index2DTo1D

```csharp
public static int Index2DTo1D(int x, int y, int width)
```

| Parameter | Description            |
| --------- | ---------------------- |
| x         | X coord.               |
| y         | Y coord.               |
| width     | Width of the 2D array. |

Returns the index for a 1D array from the coordinates of a 2D index.

### Index3DTo1D

```csharp
public static int Index3DTo1D(int x, int y, int z, int width, int height)
```

| Parameter | Description             |
| --------- | ----------------------- |
| x         | X coord.                |
| y         | Y coord.                |
| z         | Z coord.                |
| width     | Width of the 3D array.  |
| height    | Height of the 3D array. |

Returns the index for a 1D array from the coordinates of a 3D index.

### Index1DTo2D

```csharp
public static Vector2Int Index1DTo2D(int index, int width)
```

| Parameter | Description            |
| --------- | ---------------------- |
| index     | Index of the 1D array. |
| width     | Width of the 2D array. |

Returns the 2D index from the index of a 1D index.

### Index1DTo3D

```csharp
public static Vector3Int Index1DTo3D(int index, int width, int height)
```

| Parameter | Description             |
| --------- | ----------------------- |
| index     | Index of the 1D array.  |
| width     | Width of the 3D array.  |
| height    | Height of the 3D array. |

Returns the 3D index from the index of a 1D index.

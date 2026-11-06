---
layout: doc
title: ArrayList (Jilwer)
description: A resizable array collection that grows automatically to accommodate new items.
---

# ArrayList

`Gravinium.Jilwer.Core.Collections.ArrayList`

> A resizable array collection that grows automatically to accommodate new items.

## Example

```csharp
ArrayList list = new ArrayList();
list.Add(1);
list.Add(2);
list.Get(0, out object num);
Debug.Log((int)num); // 1
list.Clear();
list.Destroy();
```

## Declaration

```csharp
[JilwerType]
[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class ArrayList : UdonSharpBehaviour
```

## Constructor

```csharp
public ArrayList(int size = DefaultCapacity)
```

| Parameter | Description                    |
| --------- | ------------------------------ |
| size      | The initial size of the array. |

Creates a new `ArrayList` using the [TypeRegistry](../core/typeregistry.md).

::: tip
If the constructed ArrayList is no longer needed, `Destroy` should be called on
the GameObject to clean it up. Even better would be reusing it.

There is a dedicated [Destroy](#destroy) method for this.

```csharp
ArrayList list = new ArrayList();
list.Destroy(); // [!code focus]
```

:::

## Methods

### SetResizeIncreasePercent

```csharp
public void SetResizeIncreasePercent(float factor)
```

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| factor    | The percentage increase on resize (default: 0.5). |

Sets the percentage increase of size when the array expands. The default is
set at 50% which is standard across most languages.

### Length

```csharp
public int Length()
```

Returns the current length of the ArrayList. This is the same as the number
of elements present in the list.

### Capacity

```csharp
public int Capacity()
```

Returns the total current capacity of the ArrayList. Once this is filled such
that the length is equal to the capacity, the array will expand.

### IsEmpty

```csharp
public bool IsEmpty()
```

Returns true or false whether the array is empty or not (if there are elements present).

### EnsureCapacity

```csharp
public void EnsureCapacity(int capacity)
```

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| capacity  | Amount of space to add to the current capacity. |

Adds more capacity to the ArrayList ensuring there is enough space to avoid
the ArrayList expanding multiple times.

### Add (last)

```csharp
public void Add(object item)
```

| Parameter | Description         |
| --------- | ------------------- |
| item      | Object being added. |

Puts the item passed in at the end of the ArrayList. If the capacity is full,
it will be expanded.

### Add (at)

```csharp
public Error Add(int index, object item)
```

| Parameter | Description               |
| --------- | ------------------------- |
| index     | Index to add the item at. |
| item      | Object being added.       |

Puts the item passed in at the specified index of the ArrayList. If the capacity is full,
it will be expanded.

| Error            | Code | Description                                                                               |
| ---------------- | ---- | ----------------------------------------------------------------------------------------- |
| IndexOutOfBounds | 0x01 | Provided index was either below zero or larger than the amount of items in the ArrayList. |

### Set

```csharp
public Error Set(int index, object item)
```

| Parameter | Description          |
| --------- | -------------------- |
| index     | Index to replace at. |
| item      | Object being added.  |

Replaces the object at the index with the item passed in.

| Error            | Code | Description                                                                               |
| ---------------- | ---- | ----------------------------------------------------------------------------------------- |
| IndexOutOfBounds | 0x01 | Provided index was either below zero or larger than the amount of items in the ArrayList. |

### Get

```csharp
public Error Get(int index, out object item)
```

| Parameter  | Description                    |
| ---------- | ------------------------------ |
| index      | Index of the item to retrieve. |
| item (out) | Returned item.                 |

Returns the item at the provided index. Get can fail, in which case the item
returned will always be null.

| Error            | Code | Description                                                                               |
| ---------------- | ---- | ----------------------------------------------------------------------------------------- |
| IndexOutOfBounds | 0x01 | Provided index was either below zero or larger than the amount of items in the ArrayList. |

### Contains

```csharp
public bool Contains(object item)
```

| Parameter | Description          |
| --------- | -------------------- |
| item      | Object to match for. |

Returns true or false if the item is found in the array.

### TrimToSize

```csharp
public void TrimToSize()
```

Recreates the array to have a capacity equal to the size.

### Remove

```csharp
public Error Remove(int index)
```

| Parameter | Description                  |
| --------- | ---------------------------- |
| index     | Index of the item to remove. |

Removes the item at the provided index, shifting all items to its right by one
position left. This operation can fail.

| Error            | Code | Description                                                                               |
| ---------------- | ---- | ----------------------------------------------------------------------------------------- |
| IndexOutOfBounds | 0x01 | Provided index was either below zero or larger than the amount of items in the ArrayList. |

### Clear

```csharp
public void Clear()
```

Resets the array to the default size, clearing all items.

### ToArray

```csharp
public object[] ToArray()
```

Returns the ArrayList as an array.

### Destroy

```csharp
public void Destroy()
```

Destroys the underlying GameObject and the ArrayList. Used to clean up the scene
after use of the array.

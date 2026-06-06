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
var err = ArrayList.New(jilwer, out ArrayList list);
if (err != Error.None)
{
    Debug.LogError($"Failed to create ArrayList! Error: 0x{err:X2}");
}
```

## Declaration

```csharp
[JilwerType]
[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class ArrayList : UdonSharpBehaviour
```

## Methods

### New

```csharp
public static Error New(JilwerRuntime runtime, out ArrayList value, int size = DefaultCapacity)
```

| Parameter       | Description                    |
| --------------- | ------------------------------ |
| runtime         | Global Jilwer runtime.         |
| value (out)     | Returned Arraylist on success. |
| size (optional) | Initial capacity of the array. |

The New method is used to create a new ArrayList.

New is failable, returning an error created and returned from
[TypeRegistry.Create](../core/typeregistry#create). If the runtime is passed in
and the type has the [JilwerType](../core/jilwertype) attribute, it should never
fail.

::: tip
If the constructed ArrayList is no longer needed, `Destroy` should be called on
the GameObject to clean it up. Even better would be reusing it.

```csharp
ArrayList.New(jilwer, out ArrayList list);
Destroy(list.gameObject); // [!code focus]
```

:::

### Length

```csharp
public int Length()
```

Returns the current length of the ArrayList.

### Capacity

```csharp
public int Capacity()
```

Returns the total current capacity of the ArrayList.

### EnsureCapacity

```csharp
public void EnsureCapacity(int capacity)
```

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| capacity  | Amount of space to add to the current capacity. |

Adds more capacity to the ArrayList ensuring there is enough space to avoid
the ArrayList expanding multiple times.

### Add

```csharp
public void Add(object item)
```

| Parameter | Description         |
| --------- | ------------------- |
| item      | Object being added. |

Puts the item passed in at the end of the ArrayList. If the capacity is full,
it will be expanded with an increase of 50%.

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

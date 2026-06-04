---
layout: doc
title: API (Jilwer)
description: The API reference for the Jilwer package.
---

# API

## Quick Navigation

### Methods

- [TypeRegistry.Create](#typeregistry-create)

### Classes

- [ArrayList](#arraylist)

### Enums

- [Error](#error)

### Attributes

- [JilwerType](#jilwertype)

## Methods

### TypeRegistry.Create

`Gravinium.Jilwer.Core.TypeRegistry`

```csharp
static GameObject Create(JilwerRuntime runtime, string key)
```

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| runtime   | A reference to the global Jilwer runtime. |
| key       | The name of the class being retrieved.    |

Creates and returns a game object with the requested type based on the `key`.

## Classes

### ArrayList

`Gravinium.Jilwer.Core.Collections.ArrayList`

#### Constructor

```csharp
ArrayList New(JilwerRuntime runtime, int size = DefaultCapacity)
```

| Parameter       | Description                               |
| --------------- | ----------------------------------------- |
| runtime         | A reference to the global Jilwer runtime. |
| size (optional) | The initial capacity of the ArrayList.    |

#### Methods

##### Length

```csharp
int Length()
```

Returns the number of items in the list.

##### Capacity

```csharp
int Capacity()
```

Returns the current total capacity of the list.

##### EnsureCapacity

```csharp
void EnsureCapacity(int capacity)
```

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| capacity  | The amount of space to add to the ArrayList. |

Ensures the internal array can hold at least `capacity` at the instance of calling.

Internally, this will add the current capacity and the `capacity` specified (`currentCapacity += capacity`).

##### TryAdd

```csharp
Error TryAdd(object item)
```

| Parameter | Description                         |
| --------- | ----------------------------------- |
| item      | The object to add to the ArrayList. |

Tries to add the `item` to the end of the list. This operation may fail with an [Error](#error) enum.

##### TryGet

```csharp
Error TryGet(int index, out object item)
```

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| index     | The index to get the item at.                |
| item      | The returned item when no error is returned. |

Tries to get the `item` at the specified `index`

## Enums

### Error

`Gravinium.Jilwer.Core.Error`

```csharp
public enum Error
{
    None,
    IndexOutOfBounds,
    InvalidType,
}
```

The Error enum is the standard error value passed from methods in Jilwer.
The value can be checked before attempting to use a returned value or before
preceding after a method call.

| Name             | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| None             | Represents no error was returned.                                                        |
| IndexOutOfBounds | The index used on an array was not in bounds (Smaller than 0 or larger than the length). |
| InvalidType      | The type used is not valid as input (e.g. int != string).                                |

## Attributes

### JilwerType

`Gravinium.Jilwer.Core.JilwerType`

Attached to a class, this attribute tells Jilwer to register the class with
[TypeRegistry.Create](#typeregistry-create).

#### Targets

- Class

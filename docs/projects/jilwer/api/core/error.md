---
layout: doc
title: Error (Jilwer)
description: Runtime methods for interacting with the type registry system.
---

# Error

`Gravinium.Jilwer.Core.Error`

> Standard value returned from failable methods throughout Jilwer.

## Declaration

```csharp
public enum Error
```

## Values

```csharp
public enum Error
{
    None = 0x00,
    IndexOutOfBounds = 0x01,
    InvalidType = 0x02,
    RuntimeDoesNotExist = 0x03,
    KeyValueNotFound = 0x04,
}
```

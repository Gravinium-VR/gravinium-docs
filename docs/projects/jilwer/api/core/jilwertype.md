---
layout: doc
title: JilwerType (Jilwer)
description: Attribute used to mark classes as custom types for the Jilwer build process.
---

# JilwerRuntime

`Gravinium.Jilwer.Core.JilwerType`

> Attribute used to mark classes as custom types for the Jilwer build process.

## Example

```csharp
[JilwerType]
public class CustomType : UdonSharpBehaviour { }
```

## Declaration

```csharp
[AttributeUsage(AttributeTargets.Class)]
public class JilwerType : Attribute
```

## Usage

In order for Jilwer to register a class as a custom type, it must be
annotated with the `JilwerType` attribute. Any class with this attribute
will be picked up and processed by Jilwer during the build process.

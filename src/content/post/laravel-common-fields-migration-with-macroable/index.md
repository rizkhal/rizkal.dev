---
title: "Laravel common fields migration with macroable"
description: "Laravel have a lot of magic, using macroable make everything shorten"
publishDate: "18 Sep 2020"
tags: ["php", "laravel"]
draft: false
---

When we have same column on many table, we need to rewrite the column type and name on each table, this not efficient when you are a "programmer".

Ok, we will make a provider to handle the macro, you can use AppServiceProvider to write it but i recomended using new ServiceProvider called MacroServiceProvider for consistency if you have many Provider.

**Create provider:**

```bash
php artisan make:provider MacroServiceProvider
```

**Modify MacroServiceProvider**

```php
use Illuminate\Database\Schema\Blueprint;

public function boot()
{
   Blueprint::macro('commonFields', function () {
      $this->timestamps();
      $this->softDeletes();
      $this->foreignUuid('created_by');
      $this->foreignUuid('updated_by')->nullable();
      $this->foreignUuid('deleted_by')->nullable();
   });
}
```

To use the common fields on migration, you just need to call `$table->commonFields()`.

**Example**

```php
public function up()
{
   Schema::create('yourtables', function (Blueprint $table): void {
      $table->id();
      $table->commonFields();
   });
}
```

It's save your time and clean code when you have many table and same column.

Thanks for reading me ❤️

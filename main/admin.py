from django.contrib import admin
from . models import *

admin.site.register(CustomUser)


class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blog, BlogAdmin)
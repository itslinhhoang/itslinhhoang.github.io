---
title: photography
layout: main
categories: [photgraphy]
description: Hi I am Linh, a student, photographer, designer at Augustana College.
image: /img/linh-photo.jpg
---

<div class="tag-title-container  white-space-top" id="contact">
    <h1 class="tag-title">WORKS</h1>
</div>

<div class="gallery">
{% assign i = 0 %}
{% assign sorted = site.categories.photography | sort: 'date' | reverse  %}
{% for post in sorted %}
    <a href="{{ post.url }}" class="photo-container">
        <div class="photo-frame rectangle">
            <img src="{{ post.image | baseurl }}" alt="{{ post.title }}"/>
        </div>
        <p>{{ post.title }}</p>
    </a>
{% endfor %}
</div>
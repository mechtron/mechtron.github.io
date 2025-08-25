---
layout: page
title: Blog
permalink: /blog/
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        <span class="date">{{ post.date | date: "%m-%d-%Y"}}</span>
        {% if post.description %}
        <br/>
        <br/>
        {{ post.description }}
        <br/>
        <br/>
        {% else %}
        {{ post.excerpt }}
        {% endif %}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>

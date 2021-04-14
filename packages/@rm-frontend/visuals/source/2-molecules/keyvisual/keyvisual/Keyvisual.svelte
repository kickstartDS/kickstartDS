<script>
  import MarkdownIt from 'markdown-it';

  const md = new MarkdownIt();

  export let data;
</script>
<div class="keyvisual">
  <div class="keyvisual__item {data['small'] ? 'keyvisual__item--small' : ''}">
      <div class="keyvisual__image">
          <picture>
            <source media="(min-width: 950px)" data-srcset="{data['image-desktop']}">
            <source media="(min-width: 600px)" data-srcset="{data['image-mobile']}">
            <source data-srcset="{data['image-tablet']}">
            <img src="{data['image-desktop']}" alt="" data-object-fit="">
          </picture>
      </div>
      {#if data['box']}
      <div class="visual-content keyvisual__content {data['box-alignment']}">
        <div class="keyvisual__box {data['box-style']}" style="background-color:{data['bg-color']}">
          <p class="keyvisual__topic">{data['headline']}</p>
          <div class="keyvisual__text">
            <p>{@html md.render(data['text'])}</p>
          </div>
          <div class="keyvisual__link">
            <a href="{data['link-target']}" class="button {data['link-variant']}"> {data['link-text']}</a>
          </div>
        </div>
      </div>
      {/if}
  </div>
</div>
